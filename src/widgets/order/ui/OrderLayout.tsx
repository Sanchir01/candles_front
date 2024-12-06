"use client";
import Link from "next/link";
import { FC } from "react";
import useCartStore from "~/Providers/store/useCart";
import { useStoreZustand } from "~/shared/hooks/useStoreZustand";
import { cn } from "~/shared/lib/utils";
import styles from "~/shared/styles/Order.module.scss";
import { Button, Container } from "~/shared/ui";
import Content from "./Content";
import { OrderForm } from "./OrderForm";
import RecommendedSlider from "./RecomendedSlider";
const OrderLayout: FC = () => {
  const cart = useStoreZustand(useCartStore, (state) => state.cart);

  if (cart !== undefined && cart.length !== 0) {
    return (
      <Container>
        <div className={cn(styles.order__wrapper)}>
          <Content />
          <OrderForm />
        </div>
      </Container>
    );
  }
  return (
    <section className={styles.order}>
      <div className="flex flex-col justify-end items-center gap-5">
        <div className="">Корзина Пуста</div>
        <Link href={"./catalog"}>
          <Button>Перейти в каталог</Button>
        </Link>
      </div>
      <div className="">
        <RecommendedSlider />
      </div>
    </section>
  );
};

export default OrderLayout;
