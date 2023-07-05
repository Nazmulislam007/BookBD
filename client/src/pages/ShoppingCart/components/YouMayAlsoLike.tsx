import { Books } from "@/Types/Books";
import SingleBook from "@/components/SingleBook";
import useTop50Books from "@/hooks/useBooks";
import { Box, Typography } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function YouMayAlsoLike() {
  const { data, isError, isLoading } = useTop50Books();

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  return (
    <Box py={4}>
      <Typography
        component="h4"
        fontSize="1.8rem"
        fontWeight="600"
        color="#444444"
        mb="0.4rem"
        pb={1}
        borderBottom="1px solid #dfdfdf"
      >
        You May Also Like
      </Typography>
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
        {(data.books as Books[])?.map((book) => (
          <SwiperSlide key={book._id}>
            <SingleBook book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
