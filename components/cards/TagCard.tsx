import Link from "next/link";
import React from "react";

import { getDeviconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount }: TagCardProps) => {
  const iconClass = getDeviconClassName(name);

  return (
    <Link href={`/tag/${_id}`} className=" flex justify-between gap-2">
      <Badge className=" subtle-medium text-light400_light500 background-light800_dark300 rounded-md border-none px-2 py-4 uppercase  ">
        <span className=" flex-center space-x-3">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </span>
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
