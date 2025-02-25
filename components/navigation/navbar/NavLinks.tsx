"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";


const NavLinks = ( {isMobileNav = false} : {isMobileNav?: boolean}) => {

    const pathName = usePathname();
    const userId = 1;
  return (
    <>
    {
        sidebarLinks.map((item) => {
            const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;

            if(item.route === "/profile"){
                if(userId) item.route = `${item.route}/${userId}`;
            }

            const LinkComponent= (
                <Link href={item.route} key={item.label} className={cn(isActive ? "!bg-orange-500 rounded-lg text-psm" : "text-psm", "flex items-center justify-start gap-4 bg-transparent p-4 w-full")}>
                    <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({"invert dark:invert-0": !isActive})}></Image>
                    <p className={cn(isActive? "text-psm !font-semibold invert dark:invert-0" : "text-psm", !isMobileNav && "max-md:hidden")}>{item.label}</p>
                </Link>
            );

            return isMobileNav? 
            (
                <SheetClose asChild key={item.label}>
                    {LinkComponent}
                </SheetClose>
            ) : 
            
            (<div key={item.route}>{LinkComponent}</div>);
        })
    }
    </>
  );
};

export default NavLinks;