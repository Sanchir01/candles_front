'use client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import useCartStore from '~/Providers/store/useCart'
import { CreateOrderInput } from '~/shared/graphql/gql/graphql'
import { orderService } from '~/shared/service/orders'
import { Button, Loader } from '~/shared/ui'

const PushOrder = () => {
	const { mutateAsync, isPending } = useMutation({
		mutationKey: [orderService.createUserOrderKey],
		mutationFn: ({ items }: { items: CreateOrderInput }) =>
			orderService.crateOrder({ items })
	})
	const { replace } = useRouter()
	const cart = useCartStore(state => state.cart)
	const resetCart = useCartStore(state => state.resetCart)
	const orderValue: CreateOrderInput = {
		items: cart.map(item => ({
			price: item.price,
			quantity: item.quantity,
			productsId: item.id
		}))
	}
	const createOrder = async ({ items }: { items: CreateOrderInput }) => {
		const { toast } = await import('react-hot-toast')
		try {
			await mutateAsync({ items })
			console.log(items)
			toast.success('Заказ оформлен')
		} catch (e) {
			console.log(e)
		}
		resetCart()
		replace('/thanks')
	}

	return (
		<Button
			onClick={() => createOrder({ items: orderValue })}
			disabled={isPending}
		>
			{isPending ? <Loader /> : 'Оформить заказ'}
		</Button>
	)
}

export default PushOrder
