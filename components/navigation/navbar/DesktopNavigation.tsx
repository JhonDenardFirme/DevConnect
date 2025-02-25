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
  

const DesktopNavigation = () => {
  return (
    <div className='fixed flex h-screen w-72 flex-col gap-4 shadow-sm bg-neutral-50 dark:bg-neutral-950  px-8 pt-[16vh] hidden md:flex'>

        <NavLinks></NavLinks>


        <div className="flex flex-col gap-4 mt-6">
            <div className="h-[1px] w-full bg-slate-950/10 dark:bg-slate-50/10 mb-4"></div>

            <Link href={ROUTES.SIGN_IN}>
                <Button className="w-full">
                    
                    Log In
                </Button>
            </Link>

        </div>
    </div>
  );
};

export default DesktopNavigation;