import BodyContainer from "@/Layouts/BodyContainer";
import { Books } from "@/Types/Books";
import Image from "@/components/Image";
import { useBooks } from "@/hooks/data/useBooks";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import ResposiveBookSlider from "./ResposiveBookSlider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  width: "fit-content",
}));

export default function BooksWeLove() {
  const { data, isLoading, isError } = useBooks();

  const newData: Partial<Books>[] = data;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: </span>;
  }

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
            <Link to={`/book/${newData[0]?.id}`}>
              <Image src={newData[0].imageLinks?.thumbnail || ""} />
            </Link>
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
              {newData[0].title}
            </Typography>
            <Typography
              component="p"
              lineHeight="1.7"
              pb={2}
              sx={{ textDecoration: "underline" }}
            >
              {newData[0]?.authors?.slice(0, 1)}
            </Typography>
            <Typography
              component="p"
              color="GrayText"
              className="multiline-ellipsis"
            >
              {newData[0].description}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} display={{ xs: "none", md: "flex" }}>
          {newData?.map(({ authors, id, title, imageLinks, saleInfo }) => (
            <Grid item md={4} lg={3} key={id}>
              <Link to={`/b/${id}`}>
                <Item>
                  <Image src={imageLinks?.thumbnail || ""} />
                  <Box px={1}>
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
                      lineHeight="1.7"
                      sx={{ textDecoration: "underline" }}
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
              </Link>
            </Grid>
          ))}
        </Grid>
        <ResposiveBookSlider />
      </Box>
    </BodyContainer>
  );
}
