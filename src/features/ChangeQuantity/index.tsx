import { Minus, Plus } from "lucide-react";
import useCartStore from "~/Providers/store/useCart";
import { Button } from "~/shared/ui";

type ChangeQuantityItemType = {
  id: string;
  colorId: string;
  categoryId: string;
  quantity: number;
};

const ChangeQuantityItem = ({
  id,
  colorId,
  categoryId,
  quantity,
}: ChangeQuantityItemType) => {
  const plusQuantity = useCartStore((state) => state.plus);
  const minusQuantity = useCartStore((state) => state.minus);
  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => plusQuantity({ id, colorId, categoryId })}
        disabled={quantity <= 1}
        size={"sm"}
      >
        <Minus size={"sm"} />
      </Button>
      {quantity}
      <Button
        onClick={() => minusQuantity({ id, colorId, categoryId })}
        size={"sm"}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default ChangeQuantityItem;
