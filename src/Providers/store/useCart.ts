import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ProductCardPropsType } from '~/shared/types/Catalog.types'

export interface ICart extends Omit<ProductCardPropsType, 'images' | 'slug'> {
   images: string
   quantity: number
}

export interface IUseCartStore {
   cart: ICart[]
   totalPrice: number
   toggleCartItem: (item: ICart) => void
   minus: ({
      id,
      colorId,
      categoryId
   }: {
      id: string
      categoryId: string
      colorId: string
   }) => void
   plus: ({
      id,
      colorId,
      categoryId
   }: {
      id: string
      categoryId: string
      colorId: string
   }) => void
   resetCart: () => void
}

const useCartStore = create<IUseCartStore>()(
   persist(
      (set, get) => ({
         cart: [],
         totalPrice: 0,
         toggleCartItem: item =>
            set(state => {
               const index = state.cart?.findIndex(
                  cartItem =>
                     cartItem.id === item.id &&
                     cartItem.categoryId === item.categoryId &&
                     cartItem.colorId === item.colorId
               )

               if (index === undefined || index === -1) {
                  state.cart?.push(item)
                  state.totalPrice += item.price
               } else {
                  state.cart?.splice(index, 1)
                  state.totalPrice -= item.price
               }

               return { cart: [...state.cart], totalPrice: state.totalPrice }
            }),
         plus: ({
            id,
            colorId,
            categoryId
         }: {
            id: string
            categoryId: string
            colorId: string
         }) => {
            const cart = get().cart
            let allPrice = get().totalPrice
            const index = cart.findIndex(
               cartItem =>
                  cartItem.id === id &&
                  cartItem.categoryId === categoryId &&
                  cartItem.colorId === colorId
            )
            cart[index].quantity -= 1
            allPrice -= cart[index].price
            set({ cart: [...cart], totalPrice: allPrice })
         },
         minus: ({
            id,
            colorId,
            categoryId
         }: {
            id: string
            categoryId: string
            colorId: string
         }) => {
            const cart = get().cart
            let allPrice = get().totalPrice
            const index = cart.findIndex(
               cartItem =>
                  cartItem.id === id &&
                  cartItem.categoryId === categoryId &&
                  cartItem.colorId === colorId
            )
            cart[index].quantity += 1
            allPrice += cart[index].price
            set({ cart: [...cart], totalPrice: allPrice })
         },

         resetCart: async () => set({ cart: [], totalPrice: 0 })
      }),
      {
         version: 0,
         name: 'cart',
         storage: createJSONStorage(() => localStorage)
      }
   )
)

export default useCartStore
