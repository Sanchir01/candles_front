import useCartStore from '~/Providers/store/useCart'
import { Button } from '~/shared/ui'

type Props = {}

const PushOrder = (props: Props) => {
   const cart = useCartStore(state => state.cart)
   return <Button onClick={() => console.log(cart)}>Оформить заказ</Button>
}

export default PushOrder
