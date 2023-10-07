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

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
};
export const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  description,
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
        <CardContent className=""></CardContent>
      </Card>
    </div>
  );
};
