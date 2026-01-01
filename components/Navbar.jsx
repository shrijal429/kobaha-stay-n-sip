"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import kobahaLogo from "../public/kobaha.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 sm:px-12 lg:px-30 pt-3 pb-3 flex items-center justify-between relative">
      <Link href="/" className="flex items-center cursor-pointer">
        <Image src={kobahaLogo} height={80} alt="Kobaha Logo" />
      </Link>

      <div className="hidden lg:flex gap-10 items-center">
        <Link className="hover:text-amber-700" href="/">
          Home
        </Link>
        <Link className="hover:text-amber-700" href="/menu">
          Menu
        </Link>
        <Link className="hover:text-amber-700" href="/services">
          Services
        </Link>
        <Link className="bg-amber-700 px-5 py-2 rounded-full" href="/contactus">
          Contact
        </Link>
      </div>

      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`lg:hidden absolute left-0 w-full bg-black flex flex-col items-center gap-4 py-4 transition-all duration-300 ease-in-out z-50
    ${open ? "top-full opacity-100 visible" : "top-full opacity-0 invisible"}`}
      >
        <Link onClick={() => setOpen(false)} href="/">
          Home
        </Link>
        <Link onClick={() => setOpen(false)} href="#menu">
          Menu
        </Link>
        <Link onClick={() => setOpen(false)} href="#services">
          Services
        </Link>
        <Link
          className="bg-amber-700 px-6 py-2 rounded-full"
          onClick={() => setOpen(false)}
          href="/contactus"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
