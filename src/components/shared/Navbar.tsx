"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.png";
import { UserButton, useAuth } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { ModeToggle } from "@/components/mode-toggle";

function Navbar() {
  const { isSignedIn } = useAuth();
  return (
    <div className=" bg-[#ededed] dark:bg-[#313338]">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              alt="Discus Gallery"
              width={90}
              height={90}
              priority={true}
            />
          </Link>
        </div>
        <ul className="w-auto h-auto flex justify-between items-center text-lg max-md:hidden">
          <li className="mr-1">
            <ModeToggle />
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          {isSignedIn ? (
            <>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <UserButton afterSwitchSessionUrl="/" />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/sign-in">login/register</Link>
              </li>
            </>
          )}
        </ul>
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;
