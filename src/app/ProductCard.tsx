"use client";
import React, { FC } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
  id: string;
};
export const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  description,
  id,
}) => {
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
        <CardContent className="">
          <Link href={`/products/${id}`}>Go to item</Link>{" "}
        </CardContent>
      </Card>
    </div>
  );
};
