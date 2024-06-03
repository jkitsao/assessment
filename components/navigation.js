import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-neutral-900 sticky top-0 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-purple-200 text-2xl font-extrabold">
          <Link href="/">
            <span className="hover:text-gray-300 transition duration-300">
              Albums.io
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/home">
            <span className="text-white hover:text-gray-300 transition duration-300">
              Home
            </span>
          </Link>
          {status === "loading" ? (
            <div className="text-white">Loading...</div>
          ) : session ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">
                {session.user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
Navbar.displayName = "Navbar";
