import ActionButton from "@/components/ActionButton";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Rating, Stack, Typography, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: theme.palette.mode === "light" ? "#52906f" : "#52906f",
  },
}));

export default function Reviews() {
  return (
    <>
      <Box pb={4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="15px"
          pb={2}
        >
          <Typography
            component="p"
            sx={{ fontSize: "17px", textTransform: "uppercase" }}
          >
            Reviews
          </Typography>
          <ActionButton />
        </Stack>
        <Stack direction="row" display="flex" gap="30px" flexWrap="wrap">
          <Box component="div" flex="1 1 220px">
            <Box component="header" pb={1}>
              <Typography component="p" fontWeight="600">
                Rating Snapshot
              </Typography>
              <Typography component="p" fontSize="14px" color="GrayText">
                Select a row below to filter reviews
              </Typography>
            </Box>
            <Box component="div">
              {[5, 4, 3, 2, 1].map((num) => (
                <Stack
                  key={num}
                  component="div"
                  direction="row"
                  alignItems="center"
                  gap="5px"
                >
                  <Typography
                    component="span"
                    display="flex"
                    alignItems="center"
                    fontSize="15px"
                    gap="3px"
                  >
                    {num} <StarIcon sx={{ fontSize: "15px" }} />
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </Box>
                  <Typography component="span" fontSize="15px">
                    64
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
          <Box component="div" flex="1 1 58%">
            <Typography component="p" fontWeight="600" pb="3px">
              Average Customer Ratings
            </Typography>
            <Stack
              component="div"
              direction="row"
              alignItems="center"
              gap="10px"
            >
              <Typography component="p">Overall</Typography>
              <Rating defaultValue={4.8} size="small" />
              <Typography component="span">4.8</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Stack direction="column" gap="30px" component="div">
        {/* review 1 */}
        <Stack
          component="div"
          direction="row"
          display="flex"
          gap={{ xs: "10px", lg: "30px" }}
          flexWrap="wrap"
        >
          <Box component="div" flex="1 1 200px">
            <Typography component="p">Jaime_of_grayffindor</Typography>
            <Typography component="p" fontSize="14px">
              Votes{" "}
              <Typography component="span" fontSize="14px" fontWeight="600">
                6
              </Typography>
            </Typography>
          </Box>
          <Box component="div" flex="1 1 75%">
            <Stack direction="row" alignItems="center" gap="10px" pb={1}>
              <Rating defaultValue={4.8} size="small" />
              <Typography component="span" fontSize="14px">
                · a month ago
              </Typography>
            </Stack>
            <Typography
              component="p"
              fontSize="18px"
              fontWeight="600"
              sx={{ textDecoration: "underline" }}
              pb={1}
            >
              I Love It!
            </Typography>
            <Typography component="p" pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores exercitationem, quod blanditiis eum ratione sunt.
            </Typography>
            <Stack
              direction="row"
              component="div"
              alignItems="center"
              gap="10px"
            >
              <Typography component="span" fontSize="14px">
                Helpful?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#63422d",
                  fontSize: "12px",
                  "&:hover": {
                    bgcolor: "#63422d",
                  },
                }}
              >
                Yes · 5
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#63422d",
                  fontSize: "12px",
                  "&:hover": {
                    bgcolor: "#63422d",
                  },
                }}
              >
                No · 1
              </Button>
            </Stack>
          </Box>
        </Stack>
        {/* review 2 */}
        <Stack
          component="div"
          direction="row"
          display="flex"
          gap={{ xs: "10px", lg: "30px" }}
          flexWrap="wrap"
        >
          <Box component="div" flex="1 1 200px">
            <Typography component="p">Jaime_of_grayffindor</Typography>
            <Typography component="p" fontSize="14px">
              Votes{" "}
              <Typography component="span" fontSize="14px" fontWeight="600">
                6
              </Typography>
            </Typography>
          </Box>
          <Box component="div" flex="1 1 75%">
            <Stack direction="row" alignItems="center" gap="10px" pb={1}>
              <Rating defaultValue={4.8} size="small" />
              <Typography component="span" fontSize="14px">
                · a month ago
              </Typography>
            </Stack>
            <Typography
              component="p"
              fontSize="18px"
              fontWeight="600"
              sx={{ textDecoration: "underline" }}
              pb={1}
            >
              I Love It!
            </Typography>
            <Typography component="p" pb={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores exercitationem, quod blanditiis eum ratione sunt.
            </Typography>
            <Stack
              direction="row"
              component="div"
              alignItems="center"
              gap="10px"
            >
              <Typography component="span" fontSize="14px">
                Helpful?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#63422d",
                  fontSize: "12px",
                  "&:hover": {
                    bgcolor: "#63422d",
                  },
                }}
              >
                Yes · 5
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#63422d",
                  fontSize: "12px",
                  "&:hover": {
                    bgcolor: "#63422d",
                  },
                }}
              >
                No · 1
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
