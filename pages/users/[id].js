import { useRouter } from "next/router";
import Link from "next/link";
import { useUser, useUserAlbums } from "../../hooks/useFetch";
import Navbar from "@/components/navigation";
import Loader from "@/components/loader";
import NotFound from "@/components/NotFound";

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user, loading: userLoading, error: userError } = useUser(id);
  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useUserAlbums(id);

  if (userLoading || albumsLoading) return <Loader />;
  if (userError || albumsError) return <div>Error loading data</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-900 p-6 ">
        <div className="lg:w-3/4 lg:mx-auto">
          <h1 className="text-3xl font-bold text-gray-400 mb-6">{user.name}</h1>
          <div className="p-4 bg-neutral-800 text-gray-300 rounded-md shadow-md py-3 mb-5">
            <p className="text-lg text-gray-400 font-semibold">{user?.email}</p>
            <p className="text-base font-semibold text-gray-400">
              @{user?.username}
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-500 mb-4">Albums</h2>
          <ul className="space-y-4">
            {albums?.length ? (
              albums.map((album) => (
                <li
                  key={album.id}
                  className="bg-neutral-800 p-4 shadow rounded-md"
                >
                  <Link href={`/albums/${album._id}`}>
                    <span className="text-xl font-semibold text-indigo-600 hover:underline">
                      {album.title}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <NotFound />
            )}
            {/* {JSON.stringify(albums)} */}
          </ul>
        </div>
      </div>
    </>
  );
}
