"use client";
import React from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import "@dotlottie/react-player/dist/index.css";
import { Button } from "@/components/ui/button";

function Banner() {
  return (
    <div className="w-auto h-auto bg-[#ededed] dark:bg-[#313338] rounded-xl flex max-md:flex max-md:flex-col-reverse my-4 p-8">
      <div className="w-[50%] h-full max-md:w-full">
        <div className="w-full text-sky-500 font-semibold leading-relaxed text-5xl max-md:text-3xl max-xl:text-5xl ">
          One place to Buy-Sell fish food, accessories and many more.
        </div>
        <Button className="w-auto h-auto py-3 my-4 bg-sky-500 hover:bg-sky-400 text-white rounded-sm capitalize  max-sm:text-md">
          <Link href="/">view shop</Link>
        </Button>
      </div>
      <div className="w-[50%] h-96 max-md:w-full max-md:h-52">
        <DotLottieReact
          src="https://lottie.host/d8d84e6e-b5c3-4e5d-8a79-1ef5dbfb1ee0/oYz6GItVvt.json"
          autoplay
          loop
        ></DotLottieReact>
      </div>
    </div>
  );
}

export default Banner;
