import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "~/shared/lib/utils";
export type FooterColumContentType = {
  title: string;
  href: string;
  type: string;
};
export type FooterColumnType = {
  title: string;
  content: FooterColumContentType[] | ReactNode[];
  column: boolean;
};
const FooterColumn = ({ title, content, column }: FooterColumnType) => {
  return (
    <div className="">
      <h4>{title}</h4>
      <div className={cn("flex gap-5", column ? "flex-col" : "")}>
        {content.map((item, i) => {
          if (typeof item === "object" && "title" in item && "href" in item) {
            const typedItem = item as FooterColumContentType; // Явное приведение типа
            return (
              <Link
                href={typedItem.href}
                key={i}
                className="text-blue-500 hover:underline"
              >
                {typedItem.title}
              </Link>
            );
          }

          return <div key={i}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default FooterColumn;
