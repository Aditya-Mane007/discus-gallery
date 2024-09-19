"use client";
import { productGrid } from "@/lib/constants";
import Link from "next/link";
import React from "react";

function GridBox({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="w-full h-32 bg-[#ededed] dark:bg-[#313338] text-center flex justify-center items-center rounded-xl tracking-widest">
      <Link href={link}>
        <div className="title my-2 text-2xl max-md:text-xl">{title}</div>
        <div className="description text-xs text-gray-500">{description}</div>
      </Link>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {productGrid.map((product) => (
        <GridBox
          key={product.id}
          title={product.title}
          description={product.description}
          link={product.link}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
