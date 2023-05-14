import React from "react";
import Link from "next/link";
import Logo from "./Logo";

  const CustomLink =({href, title, className=""}) => {
    return (
      <Link href={href}>{title}</Link>
    )
  }


const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium  flex  items-center justify-between">
      <nav>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/projects">Projects</CustomLink>
        <CustomLink href="/articles">Articles</CustomLink>
      </nav>

      <nav>
        <Link target={"_blank"} href="/">
          T
        </Link>
        <Link target={"_blank"} href="/">
          T
        </Link>
        <Link target={"_blank"} href="/">
          T
        </Link>
        <Link target={"_blank"} href="/">
          T
        </Link>
        <Link target={"_blank"} href="/">
          T
        </Link>
        <Link target={"_blank"} href="/">
          T
        </Link>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
