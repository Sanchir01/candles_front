"use client";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { CandlesSortEnum } from "~/shared/graphql/gql/graphql";
import { candlesService } from "~/shared/service/candles";

import SliderDesktop from "~/shared/ui/sliders";

const RecommendedSlider: FC = () => {
  const { data, isLoading } = useQuery({
    ...candlesService.AllCandlesQueryOptions({
      sort: CandlesSortEnum.CreatedAtAsc,
      categoryId: null,
      colorId: null,
    }),
  });
  return isLoading ? (
    <></>
  ) : (
    data && (
      <SliderDesktop>
        {data.__typename === "AllCandlesOk" ? (
          data.candles.map((item) => (
            <SwiperSlide key={item.id} className="">
              {item.title}
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </SliderDesktop>
    )
  );
};

export default RecommendedSlider;
