"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [dark, setDark] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border rounded-full",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="https://github.com/devansh-kc">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Github"
          ></MenuItem>
        </Link>
        <Link href="https://twitter.com/devanshkc26">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Twitter"
          ></MenuItem>
        </Link>
        <Link href="https://www.linkedin.com/in/devansh-karamchandani-32a083243/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Linkedin"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
