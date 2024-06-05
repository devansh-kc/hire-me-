"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { cn } from "@/utils/cn";
import { FaMountain } from "react-icons/fa";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [dark, setDark] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-3xl bg-transparent  shadow-lg">
    <div className="container flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2 text-lg" prefetch={false}>
        D.
      </Link>
      <nav className="flex items-center gap-4 md:gap-6">
        <Link
          href="#"
          className="text-lg font-mono font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="https://github.com/devansh-kc"
          className="text-lg font-mono font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/devansh-karamchandani-32a083243/"
          className="text-lg font-mono font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          LinkedIn
        </Link>
        <Link
          href="https://x.com/devanshkc26"
          className="text-lg font-mono font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Twitter
        </Link>
      </nav>
    </div>
  </header>
)
  //   <div
  //     className={cn(
  //       "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border rounded-full",
  //       className
  //     )}
  //   >
  //     <Menu setActive={setActive}>
  //       <Link href={"/"}>
  //         <MenuItem
  //           setActive={setActive}
  //           active={active}
  //           item="Home"
  //         ></MenuItem>
  //       </Link>
  //       <Link href="https://github.com/devansh-kc">
  //         <MenuItem
  //           setActive={setActive}
  //           active={active}
  //           item="Github"
  //         ></MenuItem>
  //       </Link>
  //       <Link href="https://twitter.com/devanshkc26">
  //         <MenuItem
  //           setActive={setActive}
  //           active={active}
  //           item="Twitter"
  //         ></MenuItem>
  //       </Link>
  //       <Link href="https://www.linkedin.com/in/devansh-karamchandani-32a083243/">
  //         <MenuItem
  //           setActive={setActive}
  //           active={active}
  //           item="Linkedin"
  //         ></MenuItem>
  //       </Link>
  //     </Menu>
  //   </div>
  
}

export default Navbar;
