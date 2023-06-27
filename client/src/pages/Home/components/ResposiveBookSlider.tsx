import { Books } from "@/Types/Books";
import SingleBook from "@/components/SingleBook";
import { Container } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ResposiveBookSlider({
  books,
}: {
  books: Partial<Books>[];
}) {
  return (
    <Container
      sx={{
        px: { xs: 0, md: 0 },
        pb: { xs: 0, md: "2.3rem" },
        pt: "2.3rem",
        display: { xs: "block", md: "none" },
      }}
    >
      <Swiper
        effect="coverflow"
        speed={1000}
        style={{ userSelect: "none" }}
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
          770: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <SingleBook book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
