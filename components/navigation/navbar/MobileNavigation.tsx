import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/hamburger.svg"
          height={36}
          width={36}
          alt="Menu"
          className=" invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className=" background-light900_dark200 border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={20}
            height={20}
            alt="Logo"
          />

          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Tech<span className="text-primary-500">Trove</span>{" "}
          </p>
        </Link>

        <div className=" no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className=" flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav/>
            </section>
          </SheetClose>

          <div className=" flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className=" small-meduim btn-secondary min-h-[47px] w-full rounded-lg px-4">
                  <span className=" primary-text-gradient">Login</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
            <Link href={ROUTES.SIGN_UP}>
                <Button className=" small-meduim light-border-2 btn-tertiary text-dark400_light900 min-h-[47px] w-full rounded-lg border px-4 py-3 shadow-none">
                  Sign up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
