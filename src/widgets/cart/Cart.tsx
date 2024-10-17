import { FC } from 'react'
import CartContent from './ui/Cart_Content'
import LayoutCart from './ui/Layout_cart'

export const ShoppingCart: FC = () => <LayoutCart content={<CartContent />} />
