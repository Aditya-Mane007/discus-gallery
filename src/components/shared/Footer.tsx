import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
function Footer() {
  return (
    <div className="w-full h-auto bg-[#ededed] dark:bg-[#313338] py-10">
      <div className="container flex justify-center items-center max-lg:flex-col max-sm:h-auto">
        <div className="logo w-[30%] h-full">
          <Link href="/">
            <Image src={Logo} alt="Discus Gallery" width={150} height={150} />
          </Link>
        </div>
        <div className="w-full h-full flex justify-around max-sm:flex-col max-sm:justify-center">
          <div className="w-auto h-full max-sm:mt-5">
            <div className="title text-center capitalize font-bold text-xl">
              Connect with us
            </div>
            <ul className="max-sm:text-center">
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="max-sm:mt-5">
            <div className="title text-center capitalize font-bold text-xl ">
              socials
            </div>
            <ul className="max-sm:text-center">
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/adityamane.jsx"
                  className="flex justify-between text-left max-sm:justify-center"
                >
                  <Instagram className="mx-2" />
                  <p className="w-[100px]">Instagram</p>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100028164061333"
                  className="flex justify-between text-left max-sm:justify-center"
                >
                  <Facebook className="mx-2" />
                  <p className="w-[100px]">Facebook</p>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://twitter.com/AdityaM52821612"
                  className="flex justify-between text-left max-sm:justify-center"
                >
                  <Twitter className="mx-2" />
                  <p className="w-[100px]">Twitter</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-sm:mt-5">
            <div className="title text-center capitalize font-bold text-xl">
              sell on discus gallery
            </div>
            <ul className="max-sm:text-center">
              <li>
                <Link href="/become-seller">Become seller</Link>
              </li>
              <li>
                <Link href="/"></Link>Seller Login
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
