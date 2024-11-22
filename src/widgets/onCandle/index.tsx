import Form from './ui/Form'
import OndeCandleImageGallery from './ui/OndeCandleImageGallery'
import OneCandleLayout from './ui/OneCandleLayout'
import SimilarColorSlider from './ui/SimilarColorSlider'
import SimilarCategorySlider from './ui/SimilarCategorySlider'

type OneCandleType = {
   id: string
   title: string
   slug: string
   price: number
   weight: number
   color_id: string
   category_id: string
   version: number
   images: string[]
}

const OneCandle = ({
   id,
   title,
   slug,
   price,
   weight,
   color_id,
   category_id,
   version,
   images
}: OneCandleType) => {
   return (
      <OneCandleLayout
         imageGallery={<OndeCandleImageGallery images={images} id={id} />}
         form={
            <Form
               title={title}
               slug={slug}
               price={price}
               weight={weight}
               color_id={color_id}
               category_id={category_id}
               version={version}
               images={images}
               id={id}
            />
         }
         similarCategorySlider={
            <SimilarCategorySlider categoryId={category_id} />
         }
         similarColorSlider={<SimilarColorSlider colorId={color_id} />}
      />
   )
}

export default OneCandle
