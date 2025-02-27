import ROUTES from "@/constants/routes";
import React from "react";

import Link from "next/link";
import { getDeviconClassname } from "@/lib/utils";

interface Props {
    _id: string;
    name: string;
    questions?: number,
    showCount?: boolean,
    compact?: boolean
}

const TagCard = ({_id, name, questions, showCount, compact} : Props) => {
    const iconClass = getDeviconClassname(name);
  return (
    
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between items-center">
        <div className="py-1 px-4 bg2 rounded-md border border-slate-950/10 dark:border-slate-50/10">
            <div className="flex items-center gap-2">
                <i className={`${iconClass} text-sm`}></i>
                <p className="text-psm">{name}</p>
            </div>
        </div>

        {showCount && (
            <p className="text-pxs">{questions}</p>
        )}
    </Link>
  );
};

export default TagCard;