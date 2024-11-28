import Image from "next/image";
import candle from "~/shared/public/images/candle.webp";
import { Container } from "~/shared/ui";
const AboutBrand = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="max-w-[700px]">
          <h2 className="text-mySecondary text-4xl">О бренде</h2>
          <div className="flex flex-col gap-5 text-myDestructive mt-5 text-lg dark:text-black">
            <span className="">
              CANDLES- магазин свечей, где каждый момент наполняется теплом и
              уютом! Мы предлагаем широкий ассортимент свечей ручной работы,
              созданных с любовью и вниманием к деталям. В нашем каталоге вы
              найдете ароматические свечи, которые наполнят ваш дом нежными и
              гармоничными нотами, а также декоративные свечи, станут изысканным
              украшением вашего интерьера. Используя только натуральные
              ингредиенты и экологически чистые материалы, мы заботимся о вашем
              комфорте и окружающей среде
            </span>
            <span className="">
              Наши свечи — это не просто источник света, а настоящий символ уюта
              и гармонии. Будь то романтический вечер, расслабляющая ванна или
              особый подарок близким, мы поможем сделать ваш момент
              незабываемым. Каждый продукт уникален, создается вручную и несет в
              себе частичку тепла наших мастеров. Откройте для себя мир свечей,
              который вдохновляет и дарит особую атмосферу в каждом мгновении!
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-t-full max-h-[400px] max-w-[350px]">
          <Image
            src={candle}
            height={0}
            width={0}
            alt="canlde"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutBrand;
