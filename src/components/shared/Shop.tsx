/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import MobileFilter from "./MobileFilter";
import Link from "next/link";
import axios from "axios";

function Shop() {
  const [foodProducts, setFoodProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3000/food");

    const data = await res.data;

    setFoodProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!foodProducts || foodProducts.length < 0 || foodProducts == null) {
    return <h1>Products are not available</h1>;
  }
  return (
    <div className="">
      <div className="w-full h-10 flex justify-between items-center">
        <div className="h-full title text-xl font-bold flex justify-center items-center">
          Shop Now
        </div>
        <div className="max-lg:flex hidden">
          <MobileFilter />
        </div>
      </div>
      <div className="w-full h-auto flex">
        <div className="w-[20%] max-lg:hidden mr-14">
          <Filter />
        </div>
        <div className="w-[80%] my-3 max-lg:w-full">
          <div className="w-full h-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            {foodProducts &&
              foodProducts.map((product, index) => {
                return (
                  <Link href={`/shop/food/${index}`}>
                    <div
                      className="w-2rem h-auto bg-white dark:bg-[#313338] mb-4 mx-2 rounded-xl flex flex-col justify-center items-center cursor-pointer"
                      key={index}
                    >
                      <h1>{product.name}</h1>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-auto"
                      />
                    </div>
                  </Link>
                );
              })}
            {/* {foodProducts.length > 0 &&
              foodProducts.forEach((product, index) => (
                <Link key={index} href={`/shop/food/${index}`}>
                  <div className="w-2rem h-60 bg-white dark:bg-[#313338] mb-4 mx-2 rounded-xl flex justify-center items-center">
                    <h2>{product.name}</h2>
                    <h3>{product.description}</h3>
                  </div>
                </Link>
              ))} */}
            {/* {foodProducts &&
              foodProducts.map((food) => (
                <Link key={food.id} href={`/shop/food/${food.id}`}>
                  <div
                    className="w-2rem h-60 bg-white dark:bg-[#313338] mb-4 mx-2 rounded-xl flex justify-center items-center"
                    key={food.id}
                  >
                    {food}
                  </div>
                </Link>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

// grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-4 max-md:grid-cols-2 max-md:justify-between
