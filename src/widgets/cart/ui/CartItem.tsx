import { Trash } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EntityProductCart } from "~/entities/entitycandles/Carts";
import useCartStore, { ICart } from "~/Providers/store/useCart";
import { cn, priceFormat } from "~/shared/lib/utils";
import { Button } from "~/shared/ui";

const CartItem = ({
  id,
  title,
  images,
  price,
  version,
  categoryId,
  colorId,
  quantity,
}: ICart) => {
  const theme = useTheme();
  const toggleItem = useCartStore((state) => state.toggleCartItem);
  return (
    <EntityProductCart
      key={id}
      className={cn(
        "h-auto flex flex-col gap-2 p-5 flex flex-col gap-10  border-b-[1px] border-opacity-25 border-black w-full",
        theme.theme === "dark" && "border-b-white "
      )}
    >
      <Link href={`/catalog/${id}`}>
        <Image src={images} alt={title} width={400} height={400} />
      </Link>
      <div className={cn("flex flex-col gap-5 w-full")}>
        <div className="flex gap-5">
          <h5>{title}</h5>
          <h5>{price}</h5>
        </div>
        <div className="">
          <Button
            className=""
            variant={"default"}
            onClick={() =>
              toggleItem({
                id,
                title,
                images,
                price,
                quantity,
                version,
                colorId,
                categoryId,
              })
            }
          >
            <Trash />
          </Button>
        </div>
      </div>
    </EntityProductCart>
  );
};

export default CartItem;
