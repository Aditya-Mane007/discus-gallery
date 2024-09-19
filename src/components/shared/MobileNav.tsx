import React from "react";

// icons
import { AlignRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

function MobileNav() {
  const { isSignedIn } = useAuth();
  return (
    <div className="md:hidden flex justify-around items-center">
      <div className="mx-4">
        <ModeToggle />
      </div>
      {isSignedIn ? (
        <UserButton afterSwitchSessionUrl="/" />
      ) : (
        <Link href="/sign-in">login/register</Link>
      )}

      <Sheet>
        <SheetTrigger>
          <AlignRight className="cursor-pointer ml-5" />
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-[#313338] w-[50%]">
          <ul className=" w-full h-full flex flex-col">
            <li className="w-auto h-auto my-4">
              <Link href="/blogs">Blogs</Link>
            </li>
            {isSignedIn && (
              <>
                <li className="w-auto h-auto my-4">
                  <Link href="/cart">Cart</Link>
                </li>
                <li className="w-auto h-auto my-4">
                  <Link href="/profile">Profile</Link>
                </li>
              </>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
