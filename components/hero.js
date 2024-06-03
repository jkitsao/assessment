import Head from "next/head";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <Head>
        <title>Welcome to MyApp</title>
        <meta
          name="description"
          content="An application to view users, their albums, and photos."
        />
      </Head>
      {/* <header className="bg-indigo-600 w-full py-4 shadow-md">
        <div className="container mx-auto text-center text-white text-3xl font-bold">
          MyApp
        </div>
      </header> */}
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
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-neutral-800 w-full py-4 text-center text-white">
        &copy; 2024 MyApp. All rights reserved.
      </footer>
    </div>
  );
}
