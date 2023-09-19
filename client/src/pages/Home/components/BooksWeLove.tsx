import BodyContainer from "@/Layouts/BodyContainer";
import { Books } from "@/Types/Books";
import { Item } from "@/assets/theme/Grid";
import Image from "@/components/Image";
import SingleBook from "@/components/SingleBook";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ResposiveBookSlider from "./ResposiveBookSlider";

export default function BooksWeLove({ books }: { books: Partial<Books>[] }) {
  const navigate = useNavigate();

  return (
    <BodyContainer heading="Books We Love" hidden>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1.3rem",
          flexDirection: { xs: "column", md: "row" },
        }}
        pt={5}
        pb={{ xs: 0, md: 5 }}
      >
        <Box component="div" flex="1 1 400px">
          <Box component="div">
            <div onClick={() => navigate(`/b/${books[0]?._id}`)}>
              <Image
                bookId={books[0]?._id || ""}
                author={(books[0]?.authors && books[0]?.authors[0]) || ""}
                price={books[0]?.saleInfo?.discountPrice || 0}
                title={books[0]?.title || ""}
                src={books[0].imageLinks?.thumbnail || ""}
              />
            </div>
          </Box>

          <Box component="div">
            <Typography
              component="p"
              lineHeight="1.6"
              fontSize="1.1rem"
              fontWeight="600"
              pt={2}
              pb={1}
            >
              {books[0].title}
            </Typography>
            <Typography
              component="p"
              lineHeight="1.7"
              pb={2}
              sx={{ textDecoration: "underline" }}
            >
              {books[0]?.authors?.slice(0, 1)}
            </Typography>
            <Typography
              component="p"
              color="GrayText"
              className="multiline-ellipsis"
            >
              {books[0].description}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} display={{ xs: "none", md: "flex" }}>
          {books?.slice(1).map((book) => {
            const { authors, _id, title, saleInfo } = book;
            return (
              <Grid item md={4} lg={3} key={_id}>
                <Item>
                  <SingleBook book={book} />
                  <Box px={1} mt={1}>
                    <Typography
                      component="p"
                      lineHeight="1.5"
                      fontSize="1rem"
                      fontWeight="600"
                      pb="5px"
                      className="ellipsis"
                    >
                      {title}
                    </Typography>
                    <Typography
                      component="p"
                      lineHeight="1.4"
                      sx={{ textDecoration: "underline", fontSize: "13px" }}
                      pb="5px"
                    >
                      {authors?.slice(0, 1)}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      gap={2}
                      mt={0.5}
                    >
                      <Typography
                        component="p"
                        sx={{ textDecoration: "line-through" }}
                        color="GrayText"
                      >
                        ${saleInfo?.price}
                      </Typography>
                      <Typography
                        component="p"
                        color="#63422d"
                        fontWeight="600"
                      >
                        ${saleInfo?.discountPrice}
                      </Typography>
                    </Stack>
                  </Box>
                </Item>
              </Grid>
            );
          })}
        </Grid>
        <ResposiveBookSlider books={books} />
      </Box>
    </BodyContainer>
  );
}
