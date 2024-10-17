import { UUID } from 'crypto'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { IColors, ISize } from '~/shared/types/Slider.type'
import { ProductCardPropsType } from '~/widgets/productcart'
export interface ICart extends Omit<ProductCardPropsType, 'images'> {
   images: string
   quantityItems: number;
} 
  

export interface IUseCartStore {
   cart: ICart[] | null
   totalPrice: number
   toggleCartItem: (item: ICart) => void
   minus: (id: UUID, colorId: UUID, categoryId: UUID) => void
   plus: (id: UUID, colorId: UUID, categoryId: UUID) => void
   resetCart: () => void
}

const useCartStore = create<IUseCartStore>()(
   persist(
      (set, get) => ({
         cart: null,
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
         plus: (id: UUID, categoryId: UUID, colorId: UUID) =>
            set(state => {
               const index = state.cart?.findIndex(
                  cartItem =>
                     cartItem.id === id &&
                     cartItem.categoryId === categoryId &&
                     cartItem.colorId === colorId
               )

               state.cart?[index].quantityItems += 1
               state.totalPrice += state.cart?[index].price

               return { cart: [...state.cart], totalPrice: state.totalPrice }
            }),
         minus: (id: UUID, categoryId: UUID, colorId: UUID) =>
            set(state => {
                const index = state.cart?.findIndex(
                  cartItem =>
                     cartItem.id === id &&
                     cartItem.categoryId === categoryId &&
                     cartItem.colorId === colorId
               )

               state.cart[index].quantity -= 1
               state.totalPrice -= state.cart[index].price

               return { cart: [...state.cart], totalPrice: state.totalPrice }
            }),

         resetCart: () => set({ cart: [], totalPrice: 0 })
      }),
      {
         version: 0,
         name: 'cart',
         storage: createJSONStorage(() => localStorage)
      }
   )
)

export default useCartStore
