import React from "react";
import { cn } from "~/shared/lib/utils";

export const EntityProductCart = ({
  children,
  className,
  border = false,
}: {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}) => {
  return (
    <article
      className={cn("w-[250px] h-auto", border && "border border-black ")}
    >
      <div className={className}>{children}</div>
    </article>
  );
};
