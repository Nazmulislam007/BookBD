import { Books } from "@/Types/Books";
import StarIcon from "@mui/icons-material/Star";
import { Box, Rating, Stack, Typography, styled } from "@mui/material";
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

import Review from "./Review";
import WriteAReview from "./WriteAReview";

export default function Reviews({
  book,
  avgRating,
}: {
  book: Partial<Books>;
  avgRating: number;
}) {
  return (
    <>
      <Box pb={4}>
        <WriteAReview id={book._id} />
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
              <Rating readOnly defaultValue={avgRating || 0} size="small" />
              <Typography component="span">{avgRating}</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Stack direction="column" gap="30px" component="div">
        {book.reviews?.map((review, i) => {
          const totalVotes = review.noVotes.length + review.yesVotes.length;
          return <Review review={review} totalVotes={totalVotes} key={i} />;
        })}
      </Stack>
    </>
  );
}
