import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import moment from "moment";

export default function Review({
  review,
  totalVotes,
}: {
  review: {
    username: string;
    createdAt: Date;
    review: string;
    rating: number;
    yesVotes: string[];
    noVotes: string[];
  };
  totalVotes: number;
}) {
  return (
    <Stack
      component="div"
      direction="row"
      display="flex"
      gap={{ xs: "10px", lg: "30px" }}
      flexWrap="wrap"
    >
      <Box component="div" flex="1 1 200px">
        <Typography component="p">{review.username}</Typography>

        <Typography component="p" fontSize="14px">
          Votes{" "}
          <Typography component="span" fontSize="14px" fontWeight="600">
            · {totalVotes}
          </Typography>
        </Typography>
      </Box>
      <Box component="div" flex="1 1 75%">
        <Stack direction="row" alignItems="center" gap="10px" pb={1}>
          <Rating readOnly value={review.rating} size="small" />
          <Typography component="span" fontSize="14px">
            · {moment(review.createdAt).fromNow()}
          </Typography>
        </Stack>
        <Typography component="p" pb={2}>
          {review.review}
        </Typography>
        <Stack direction="row" component="div" alignItems="center" gap="10px">
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
            Yes · {review.yesVotes.length}
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
            No · {review.noVotes.length}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
