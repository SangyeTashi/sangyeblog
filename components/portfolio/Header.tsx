import Link from "next/link";
import React from "react";
import { Sono } from "next/font/google";
import Container from "./Container";
import { BsGithub } from "react-icons/bs";

const sono = Sono({
  subsets: ["latin"],
});

function Header() {
  return (
    <nav className="fixed top-0 w-full py-6 font-bold backdrop-blur-2xl ">
      <Container>
        <div className="mx-auto flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-9">
            <Link href="/">
              <h1 className={`${sono.className} text-3xl font-bold`}>
                sangye.dev
              </h1>
            </Link>

            <Link href="/posts">
              <p className="text-neutral-400 hover:text-gray-300">Blog</p>
            </Link>
            <Link href={"/public/resume.pdf"} download>
              <p className="text-neutral-400 hover:text-gray-300">Résumé</p>
            </Link>
          </div>
          <div className="text-neutral-400 hover:text-gray-300">
            <Link href={`https://github.com/SangyeTashi`} target="_blank">
              <BsGithub size={"25"} />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Header;
