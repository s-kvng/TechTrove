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
  remove?: boolean;
  handleRemove?: () => void;
  isButton?: boolean;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
}: TagCardProps) => {
  const iconClass = getDeviconClassName(name);

  const Content = (
    <>
      <Badge className=" subtle-medium text-light400_light500 background-light800_dark300 rounded-md border-none px-2 py-4 uppercase  ">
        <span className=" flex-center space-x-3">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </span>
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button className="flex items-center justify-between gap-2">
        {Content}
      </button>
    ) : (
      <Link href={`/tag/${_id}`} className=" flex justify-between gap-2">
        {Content}
      </Link>
    );
  }
};

export default TagCard;
