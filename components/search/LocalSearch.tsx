"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { useRouter } from "next/navigation";

interface Props {
    route: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
} 

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
  
    const [searchQuery, setSearchQuery] = useState(query);
  
    useEffect(() => {
      // Only sends queries when typing stops
      // Way to control how frequent a function works, reduces unnecessary load in the server
      const delayDebounceFn = setTimeout(() => {
        if (searchQuery) {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "query",
            value: searchQuery,
          });
  
          router.push(newUrl, { scroll: false });
        } else {
          if (pathname === route) {
            const newUrl = removeKeysFromUrlQuery({
              params: searchParams.toString(),
              keysToRemove: ["query"],
            });
  
            router.push(newUrl, { scroll: false });
          }
        }
      }, 300);
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, router, route, searchParams, pathname]);


  return (
    <div className={`flex w-full flex-row gap-2 rounded-lg bg-neutral-950 px-6 py-1 ${otherClasses}`}>
        <Image src={imgSrc} width={20} height={20} alt="Search" className="cursor-pointer object-contain"></Image>
        <Input type="text" placeholder={placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="text-psm border-none focus-visible:outline-none focus-visible:ring-0"></Input>
    </div>
  );
};

export default LocalSearch;