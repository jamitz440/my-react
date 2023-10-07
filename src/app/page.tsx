"use client";
import React from "react";
import Link from "next/link";

import items from "src/assets/data/database.json";
import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";

export default function Home() {
  console.log(items.items[0].image);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 m-4">
        {items.items.map((item: any) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
      <Link href="/about">About</Link>
      <Link href="/product">product</Link>
    </>
  );
}
