import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingProductCard = () => {
  return (
    <div>
      <Card className="max-w-[500px] md:max-w-[350px] hover:scale-105 transition-all duration-300">
        <Skeleton className=" h-56 w-[348px] rounded-lg" />
        <CardHeader>
          <CardTitle className="truncate">
            <Skeleton className=" h-8 w-64 rounded-lg" />
          </CardTitle>
          <CardDescription>
            <Skeleton className=" h-6 w-24 rounded-lg" />
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Skeleton className=" h-4 w-64 rounded-lg" />
        </CardContent>
      </Card>
    </div>
  );
};
