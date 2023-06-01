import BodyContainer from "@/Layouts/BodyContainer";
import Image from "@/components/Image";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  width: "fit-content",
}));

export default function BooksWeLove() {
  return (
    <BodyContainer heading="Books We Love">
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "flex-start", gap: "1.3rem" }}
        py={5}
      >
        <Box component="div" flex="1 1 400px">
          <Box component="div">
            <Link to="/book">
              <Image
                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0063251922&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
                style={{ display: "block", margin: "auto" }}
              />
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
              Building a story brand story brand
            </Typography>
            <Typography
              component="p"
              lineHeight="1.7"
              pb={2}
              sx={{ textDecoration: "underline" }}
            >
              Donald miller
            </Typography>
            <Typography component="p" color="GrayText">
              A spellbinding debut novel. Two estranged half-sisters tasked with
              guarding a secret library of magical books must work together to
              unravel a deadly secret at the heart of their collection—a tale of
              familial loyalty and betrayal, and the pursuit of magic and power.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400217644&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0718033329&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
          <Grid item xs={6} md={3}>
            <Item>
              <Image src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US" />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize="1rem"
                  fontWeight="600"
                  pb="5px"
                >
                  Building a story brand story brand
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
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
      </Box>
    </BodyContainer>
  );
}
