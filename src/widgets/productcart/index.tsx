import { UUID } from 'crypto'
import AddToCart from '~/features/AddToCart/addToCart'
import { ProductCartActions } from '~/widgets/productcart/ui/Actions'
import { ProductCartImage } from '~/widgets/productcart/ui/Image'
import { ProductCartLayout } from '~/widgets/productcart/ui/ProductCartLayout'

export type ProductCardPropsType = {
   quantity: boolean
   id: UUID
   image: string
   title: string
   price: number
   version: number
   slug: string
   images: string[]
   colorId: UUID
   categoryId: UUID
}
export const ProductCart = ({
   image,
   title,
   id,
   categoryId,
   colorId,
   images,
   price,
   slug,
   version
}: ProductCardPropsType) => {
   return (
      <ProductCartLayout
         image={<ProductCartImage image={image} id={id} />}
         children={<></>}
         title={title}
         actions={
            <>
               <ProductCartActions />
               <AddToCart
                  cart={{
                     id,
                     image,
                     title,
                     price,
                     categoryId,
                     slug,
                     colorId,
                     quantity: 1,
                     productColorId: 0
                  }}
                  text={''}
               />
            </>
         }
      />
   )
}
