import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container h-20 flex items-center justify-between">

        <Link
          href="/"
          className="font-bold text-3xl text-[#071B38]"
        >
          FIIT
        </Link>

        <nav className="hidden md:flex gap-8">

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <button
          className="
          bg-[#00AEEF]
          text-white
          px-5
          py-3
          rounded-xl
        "
        >
          Schedule Call
        </button>

      </div>
    </header>
  );
}
