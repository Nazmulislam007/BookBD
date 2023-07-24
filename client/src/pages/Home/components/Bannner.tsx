import { Books } from "@/Types/Books";
import { banner } from "@/assets";
import ActionButton from "@/components/ActionButton";
import Loading from "@/components/Loading";
import SingleBook from "@/components/SingleBook";
import { useBannarBooks } from "@/hooks/useBooks";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Bannner() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, isError, data } = useBannarBooks();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: </span>;
  }

  return (
    <Stack
      sx={{
        backgroundImage: `url(${banner})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { md: "5rem 9%", xs: "2rem 3%" },
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
            fontSize="3rem"
            fontWeight="900"
            color="#444444"
            mb={1}
          >
            Upto 75% Off
          </Typography>
          <Typography component="p" mb={3} fontSize="0.88rem" fontWeight={400}>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Maxime Nam
            Quidem Obcaecati Vero Atque Quos Aperiam, Corrupti Blanditiis Ex!
            Sit?
          </Typography>
          <Link to={`/s/${encodeURIComponent("upto-75%-off")}`}>
            <ActionButton title="Order Now" />
          </Link>
        </Box>
        <Swiper
          style={{ flex: "1 1 480px" }}
          spaceBetween={1}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 120,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          effect="coverflow"
          speed={1000}
        >
          {(data as Partial<Books>[]).map((book) => (
            <SwiperSlide key={book._id}>
              <SingleBook book={book} rM />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Stack>
  );
}
