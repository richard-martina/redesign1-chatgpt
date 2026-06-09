"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="font-bold text-3xl text-[#0B1F4D]"
        >
          FIIT
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="
          px-5
          py-3
          rounded-xl
          bg-[#00AEEF]
          text-white
          font-medium
        "
        >
          Let's Talk
        </button>
      </div>
    </header>
  );
}
