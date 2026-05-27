"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { ProductType } from "@/lib/productType/productType";
export function ProductCardComponent({
  uuid,
  thumbnail,
  priceOut,
  name,
  description,
}: ProductType) {
  return (
    <Card
      className="max-w-[300px]"
      renderImage={() => (
        <img className="w-full h-[250px] object-contain " src={thumbnail} alt={name} />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal line-clamp-2 text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        ${priceOut.toFixed(2)}
      </p>
    </Card>
  );
}
