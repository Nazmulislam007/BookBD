import { banner } from "@/assets";
import ActionButton from "@/components/ActionButton";
import Image from "@/components/Image";
import { Box, Container, Stack, Typography } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Bannner() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${banner})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "5rem 9%",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <Box flex="1 1 420px">
          <Typography
            component="h2"
            fontSize="2.7rem"
            fontWeight="900"
            color="#444444"
            mb={1}
          >
            Upto 75% Off
          </Typography>
          <Typography component="p" mb={3} fontSize="0.9rem">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Maxime Nam
            Quidem Obcaecati Vero Atque Quos Aperiam, Corrupti Blanditiis Ex!
            Sit?
          </Typography>
          <ActionButton />
        </Box>
        <Swiper
          style={{ flex: "1 1 480px" }}
          spaceBetween={5}
          slidesPerView={3}
          effect="coverflow"
          speed={1000}
        >
          <SwiperSlide>
            <Image
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              alt="book"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Stack>
  );
}
