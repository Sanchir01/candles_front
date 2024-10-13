'use client'
import React from 'react'
import { useAllCandles } from '~/shared/hooks/useAllCandles'
import { Container, Title } from '~/shared/ui'
import { ProductCart } from '~/widgets/productcart'
export default function () {
   const { data, isLoading, isSuccess } = useAllCandles()
   console.log(data)
   return (
      <div className={'mt-10'}>
         <Container>
            <Title text={'All candles'} size='lg' />
            <div className=''>
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
