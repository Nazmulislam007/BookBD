import PaginationBtn from "@/components/PaginationBtn";
import SelectItem from "@/components/Select";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  width: "fit-content",
}));

export default function SubjectResult() {
  return (
    <Box component="div" flex="1 1 60%">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography component="p" fontSize="15px">
          21 - 40 of 100 results
        </Typography>

        <SelectItem />
      </Stack>
      <Grid container spacing={2} py={4}>
        <Grid component="a" href="#" item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                sx={{ textDecoration: "underline" }}
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item>
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
              className="responsive__img"
            />
            <Box px={1}>
              <Typography
                component="p"
                lineHeight="1.5"
                fontSize={{ xs: ".9rem", sm: "1rem" }}
                fontWeight="600"
                pb="5px"
              >
                Building a story brand story brand
              </Typography>
              <Typography
                component="p"
                lineHeight="1.7"
                fontSize={{ xs: ".95rem", sm: "1rem" }}
                sx={{ textDecoration: "underline" }}
                pb="5px"
              >
                Donald miller
              </Typography>
              <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                <Typography
                  component="p"
                  sx={{ textDecoration: "line-through" }}
                  color="GrayText"
                >
                  $10
                </Typography>
                <Typography component="p" color="#63422d" fontWeight="600">
                  $8
                </Typography>
              </Stack>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <PaginationBtn />
    </Box>
  );
}
