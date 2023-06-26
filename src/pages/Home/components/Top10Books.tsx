import BodyContainer from "@/Layouts/BodyContainer";
import { Books } from "@/Types/Books";
import SingleBook from "@/components/SingleBook";
import useTop10Books from "@/hooks/useBooks";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Top10Books() {
  const { isError, isLoading, data } = useTop10Books();

  const newData: Partial<Books>[] = data;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: </span>;
  }

  return (
    <BodyContainer heading="Top 10 Books">
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
        {newData?.map((book) => (
          <SwiperSlide key={book.id}>
            <SingleBook book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </BodyContainer>
  );
}
