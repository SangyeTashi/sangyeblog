import Link from "next/link";
import React from "react";
import { Sono } from "next/font/google";

const sono = Sono({
  subsets: ["latin"],
});

function Header() {
  return (
    <nav className="sticky top-0 flex  items-center space-x-3  bg-white px-4 py-5">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <h1 className={`${sono.className} text-2xl font-bold`}>sangye.dev</h1>
        </Link>

        <p className="text-slate-700">Blog</p>
      </div>
    </nav>
  );
}

export default Header;
