import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col justify-center items-center">
      <Head>
        <title>Album.io</title>
        <meta
          name="description"
          content="An application to view users, their albums, and photos."
        />
      </Head>

      <main className="flex-grow items-center h-full mt-32 container mx-auto p-6 text-center">
        <div className="text-center lg:w-1/2 lg:mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Discover users and their albums.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Click on a user to see their detailed information and explore their
            albums. Dive into each album to view the photos it contains.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/home"
              className="rounded-md  px-5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 bg-blue-500    hover:bg-blue-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-neutral-800 w-full py-4 text-center text-white">
        &copy; 2024 Album.io. All rights reserved.
      </footer>
    </div>
  );
}
