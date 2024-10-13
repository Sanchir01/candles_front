import React from 'react'
import { EntityProductCart } from '~/entities/entitycandles/cart'

export interface ProductCartLayoutProps {
   image: React.ReactNode
   title: React.ReactNode
   children: React.ReactNode
   actions: React.ReactNode
}

export const ProductCartLayout = ({
   children,
   title,
   image,
   actions
}: ProductCartLayoutProps) => {
   return (
      <EntityProductCart>
         {image}
         {title}
         {children}
         {actions}
      </EntityProductCart>
   )
}
