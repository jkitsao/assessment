import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useUsers, useAlbums } from "../hooks/useFetch";
import Navbar from "@/components/navigation";
import Loader from "@/components/loader";

export default function UsersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { users, loading: usersLoading, error: usersError } = useUsers();
  const { albums, loading: albumsLoading, error: albumsError } = useAlbums();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") return <Loader />;
  if (status === "unauthenticated") return <div>Redirecting...</div>;

  if (usersLoading || albumsLoading) return <Loader />;
  if (usersError || albumsError) return <div>Error loading data</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-900 px-6 py-8">
        <h1 className="text-4xl text-center font-bold text-gray-300 mb-8">
          All Users
        </h1>
        <ul className="space-y-6">
          {users?.length
            ? users.map((user) => (
                <li
                  key={user?._id}
                  className="bg-neutral-800 shadow-lg transition-all duration-300 ease-linear hover:shadow-xl hover:bg-neutral-700 cursor-pointer lg:w-3/4 mx-auto p-6 rounded-lg"
                >
                  <Link href={`/users/${user?._id}`}>
                    <span className="flex items-center text-2xl font-semibold text-indigo-400 hover:underline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      {user?.name}
                    </span>
                  </Link>
                  <p className="text-gray-400 mt-2 ml-8 font-medium">
                    Albums:{" "}
                    {
                      albums?.filter((album) => album?.userId._id === user?._id)
                        .length
                    }
                  </p>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}
