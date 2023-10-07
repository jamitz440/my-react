"use client";
import Link from "next/link";
import React from "react";
import items from "src/assets/data/database.json";
import * as Navigation from "next/navigation";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  const parts = pathname.split("/"); // This will split the string into an array: ['', 'products', '1']
  const lastPart = parts[parts.length - 1];
  console.log(lastPart);
  const item = items.items.find((item: any) => item.id === Number(lastPart));
  console.log(item);

  return (
    <div>
      <h1>
        <Link href="/">Back Home</Link>
      </h1>
      <div>Your ID is: {lastPart}</div>
      <div>
        <img src={item.image} alt={item.title} />
        <div>{item.title}</div>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
