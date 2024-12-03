import React from "react";
import { cn } from "~/shared/lib/utils";

type EntityProductCartItemType = {
  className?: string;
  children?: React.ReactNode;
};

const EntityProductCartItem = ({
  className,
  children,
}: EntityProductCartItemType) => {
  return (
    <div className={cn("grid grid-cols-4  w-full", className)}>{children}</div>
  );
};

export default EntityProductCartItem;
