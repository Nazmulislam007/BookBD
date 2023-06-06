import BodyContainer from "@/Layouts/BodyContainer";
import Image from "@/components/Image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Top10Books() {
  return (
    <BodyContainer heading="Top 100 Books">
      <Swiper
        effect="coverflow"
        speed={1000}
        style={{ flex: "1 1 480px", padding: "2.3rem 0", userSelect: "none" }}
        modules={[Navigation]}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: -100,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          810: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1667879200&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0802162177&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1649374046&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1667879200&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0802162177&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1649374046&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1667879200&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0802162177&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ display: "block", width: "100%", height: "270px" }}
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1649374046&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
          />
        </SwiperSlide>
      </Swiper>
    </BodyContainer>
  );
}
