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
                    ? data.candles.map(
                         ({
                            title,
                            images,
                            id,
                            slug,
                            price,
                            color_id,
                            category_id,
                            version
                         }) => (
                            <ProductCart
                               key={id}
                               images={images}
                               title={title}
                               id={id}
                               price={price}
                               version={version}
                               slug={slug}
                               colorId={color_id}
                               categoryId={category_id}
                            />
                         )
                      )
                    : 'ошибка при загрузке данных'}
            </div>
         </Container>
      </div>
   )
}
