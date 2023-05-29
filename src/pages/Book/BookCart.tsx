import ActionButton from "@/components/ActionButton";
import HoverRating from "@/components/Ratting";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Stack, Typography } from "@mui/material";

export default function BookCart() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        flex: "1 1 70%",
      }}
    >
      <Box component="div" sx={{ width: { md: "auto", xs: "100%" } }}>
        <Box
          sx={{
            border: "1px solid #dfdfdf",
            p: 2,
            width: "fit-content",
            margin: "auto",
          }}
        >
          <img
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
            style={{ display: "block" }}
          />
        </Box>
      </Box>

      <Stack component="header" flex="1 1 60%" pb={2}>
        <Typography component="h4" fontSize="2rem">
          The 7 habits of highly effective people
        </Typography>
        <Typography component="p" fontSize=".8rem">
          by{" "}
          <Typography
            component="a"
            fontSize=".8rem"
            sx={{ textDecoration: "underline" }}
          >
            Steven R. Convey
          </Typography>
        </Typography>
        <HoverRating />
        <Typography component="p" mt={1}>
          Bonus material: Interspersed throughout are three comic books that are
          featured in the story—all created by Tom Hanks himself—including the
          comic book that becomes the official tie-in to this novel’s "major
          motion picture masterpiece."
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="baseline"
          gap={2}
          mt={1}
        >
          <Typography
            component="p"
            sx={{ textDecoration: "line-through" }}
            color="GrayText"
            fontSize="1.7rem"
          >
            $10
          </Typography>
          <Typography
            component="p"
            color="#63422d"
            fontWeight="600"
            fontSize="1.7rem"
          >
            $8
          </Typography>
          <Typography component="p" color="gray" fontSize="1rem">
            You Save $2 (25%)
          </Typography>
        </Stack>
        <Box
          component="div"
          sx={{ display: "flex", gap: "7px", alignItems: "center", mt: 1 }}
        >
          <CheckCircleIcon sx={{ color: "green" }} />
          <Typography sx={{ color: "gray", fontSize: "1rem" }}>
            In Stock (28 copies available)
          </Typography>
        </Box>
        <Box component="div" mt={3}>
          <ActionButton />
        </Box>
      </Stack>
    </Box>
  );
}
