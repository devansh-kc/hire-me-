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
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Work"
          ></MenuItem>
        </Link>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Connect With Me"
          ></MenuItem>
        </Link>
       
      </Menu>
    </div>
  );
}

export default Navbar;
