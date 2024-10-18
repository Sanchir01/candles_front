import { UUID } from 'crypto'
import AddToCart from '~/features/AddToCart/addToCart'
import { ProductCartActions } from '~/widgets/productcart/ui/Actions'
import { ProductCartImage } from '~/widgets/productcart/ui/Image'
import { ProductCartLayout } from '~/widgets/productcart/ui/ProductCartLayout'

export type ProductCardPropsType = {
   id: UUID
   title: string
   price: number
   version: number
   slug: string
   images: string[]
   colorId: UUID
   categoryId: UUID
}
export const ProductCart = ({
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
         image={<ProductCartImage image={images[0]} id={id} />}
         children={<></>}
         title={title}
         actions={
            <>
               <ProductCartActions
                  id={id}
                  title={title}
                  price={price}
                  version={version}
                  slug={slug}
                  images={images}
                  colorId={colorId}
                  categoryId={categoryId}
               />
            </>
         }
      />
   )
}
