"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { LoadingProductCard } from "./LoadingProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 m-4">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((id: any) => (
          <LoadingProductCard key={id} />
        ))}
      </div>
      <Link href="/about">About</Link>
      <Link href="/product">product</Link>
    </>
  );
}
