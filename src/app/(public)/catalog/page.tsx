'use client'
import type React from 'react'
import { useAllCandles } from '~/shared/hooks/useAllCandles'
import st from '~/shared/styles/Catalog.module.scss'
import { Container, Title } from '~/shared/ui'
import { ProductCart } from '~/widgets/productcart'

export default function () {
   const { data, isLoading, isSuccess } = useAllCandles()
   console.log(data)
   return (
      <div className={st.catalog}>
         <Container>
            <Title text={'Все свечит'} size='lg' />
            <div className={st.catalog__content}>
               {isLoading
                  ? 'loading'
                  : isSuccess && data?.__typename === 'AllCandlesOk'
                    ? data.candles.map(({ title, images, id }) => (
                         <ProductCart
                            key={id}
                            image={images[0]}
                            title={title}
                            id={id}
                         />
                      ))
                    : 'ошибка при загрузке данных'}
            </div>
         </Container>
      </div>
   )
}
