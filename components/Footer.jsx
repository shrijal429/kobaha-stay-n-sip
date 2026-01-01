"use client";
import Link from "next/link";
import Image from "next/image";
import kobahaLogo from "../public/kobaha.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-40 pt-12">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-10 border-b border-white/20 pb-12"
      >
        <div className="flex flex-col items-center  sm:items-start">
          <Image src={kobahaLogo} height={150} alt="Kobaha Logo" />
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="font-bold">Quick Links</p>
          <div className="flex flex-col gap-1 text-sm">
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            <Link href="/">About</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="font-bold">Services</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>Live Music</p>
            <p>HomeStay</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="font-bold">Contacts</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>+977 98XXXXXXXX</p>
            <p>XXXXXXXXXX@gmail.com</p>
            <p>Kobaha, Lalitpur</p>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-xs sm:text-sm">
        <p>&copy; 2025 Kobaha Stay N' Sip. All rights reserved.</p>
      </div>
    </footer>
  );
}
