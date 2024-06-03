import LandingPage from "@/components/hero";
import Navbar from "@/components/navigation";
import React from "react";

function index() {
  return (
    <main className="bg-neutral-800">
      <Navbar />
      <LandingPage />
    </main>
  );
}

export default index;
