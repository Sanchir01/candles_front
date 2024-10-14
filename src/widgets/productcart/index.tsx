import { ProductCartActions } from '~/widgets/productcart/ui/Actions'
import { ProductCartImage } from '~/widgets/productcart/ui/Image'
import { ProductCartLayout } from '~/widgets/productcart/ui/ProductCartLayout'

export interface ProductCartProps {
   id: string
   image: string
   title: string
}
export const ProductCart = ({ image, title, id }: ProductCartProps) => {
   return (
      <ProductCartLayout
         image={<ProductCartImage image={image} id={id} />}
         children={<></>}
         title={title}
         actions={<ProductCartActions />}
      />
   )
}
