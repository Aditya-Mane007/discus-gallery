"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function page() {
  const [product, setProduct] = useState();
  const params = useParams();

  const fetchProduct = async () => {
    const res = await axios.get(`http://localhost:3000/food/${params.id}`);

    const data = await res.data;

    console.log(data);

    setProduct(data);
  };

  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="w-full flex gap-4">
      <div className="w-[50%] h-52 bg-gray-700">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {product &&
              product?.images?.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={image}
                          width={500}
                          height={500}
                          alt={product.name}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-[50%]">
        <h1>Name</h1>
        <p>Description</p>
      </div>
    </div>
  );
}

export default page;
