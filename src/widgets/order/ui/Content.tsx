import useCartStore from "~/Providers/store/useCart";


import { useStoreZustand } from "~/shared/hooks/useStoreZustand";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FC } from "react";
import CartItem from '~/widgets/cart/ui/CartItem'

const Content: FC = () => {
  const cart = useStoreZustand(useCartStore, (state) => state.cart);
  const [parent] = useAutoAnimate({ duration: 500, easing: "ease-in-out" });
  return (
    <div ref={parent} className="flex flex-col ">
      {cart?.map((item) => (
        <CartItem key={item.id} images={''} quantity={0} version={0} id={''} colorId={''} categoryId={''} title={''} price={0} >

         
        </CartItem>
      ))}
    </div>
  );
};

export default Content;
