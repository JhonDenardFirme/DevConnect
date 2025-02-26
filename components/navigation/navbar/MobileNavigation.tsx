import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
  

const MobileNavigation = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <Image src="/icons/hamburger.svg" width={36} height={36} alt="Menu" className="invert dark:invert-0 md:hidden"></Image>
  </SheetTrigger>
  <SheetContent side="left" className="">
    
      <SheetTitle className="hidden">Navigation</SheetTitle> 
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/DevConnectLogo.png" width={23} height={23} alt="Logo"></Image>
        <p className="h2-bold">
          <span>Dev</span>
          <span className="text-[#f0842b]">Connect</span>
        </p>
      </Link>

      <div className="flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto no-scrollbar">
        <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
                <NavLinks isMobileNav></NavLinks>
            </section>
        </SheetClose>

        

        <div className="flex flex-col gap-4 mt-6">
            <div className="h-[1px] w-full bg-slate-950/10 dark:bg-slate-50/10 mb-4"></div>

            <SheetClose asChild>
                <Link href={ROUTES.SIGN_IN}>
                    <Button className="w-full !bg2">
                    <Image src="/icons/account.svg" width={20} height={20} alt="Log In" className="object-contain"></Image>
                    <p className="text-psm">Log In</p>   
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