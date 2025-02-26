"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

const filters = [
    {name: "React", value: "react"},
    {name: "Javascript", value: "javascript"}
    //{name: "Newest", value: "newest"},
    //{name: "Popular", value: "popular"},
    //{name: "Unanswered", value: "unanswered"},
    //{name: "Recommended", value: "recommended"},
];

const HomeFilter = ({}) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const filterParams = searchParams.get("filter");
    const [active, setActive] = useState(filterParams || "");

    const handleTypeClick = (filter: string) => {

        let newUrl = "";

        // remove filter if same button is selected
        if (filter === active){

            setActive("");

            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["filter"],
            });

        // set filter url params logic
        } else {
            setActive(filter);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "filter",
                value: filter.toLowerCase()
            });
        }

        router.push(newUrl, {scroll: false});
    };

  return (
    <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
            <Button key={filter.name} className={cn(`!text-pxs`, active === filter.value ? "!text-orange-500" : "!bg-neutral-900" )} onClick={() => {handleTypeClick(filter.value)}}>
                {filter.name}
            </Button>
        ))}
    </div>
  );
};

export default HomeFilter;