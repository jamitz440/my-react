"use client";
import React, { FC } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import items from "src/assets/data/database.json";

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
          />
        ))}
      </div>
    </>
  );
}

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
};

const ProductCard: FC<ProductCardProps> = ({ title, image, description }) => {
  console.log(image);
  return (
    <div>
      <Card className="max-w-[500px] md:max-w-[350px] hover:scale-105 transition-all duration-300">
        <Image
          src={image}
          alt="Frog"
          width={500}
          height={500}
          className="overflow-hidden rounded-t-lg "
        />
        <CardHeader>
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className=""></CardContent>
      </Card>
    </div>
  );
};

const Navbar = () => {
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

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
