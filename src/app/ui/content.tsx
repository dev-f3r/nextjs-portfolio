"use client";

import Navbar from "./navbar";

export default function Content() {
  return (
    <div className="h-screen flex items-center justify-center" id="content">
      <div className="h-full w-full p-20">
        <h2 className="text-xl font-medium">{"I'm a software developer."}</h2>
        <Navbar />
      </div>
    </div>
  );
}
