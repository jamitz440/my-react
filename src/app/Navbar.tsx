"use client";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo w-screen h-auto flex items-center bg-primary-foreground p-1">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={128}
          height={77}
          className="m-auto dark:invert"
        />
        <ModeToggle />
      </div>
    </nav>
  );
};
