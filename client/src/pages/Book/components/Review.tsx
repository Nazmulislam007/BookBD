import { UserType } from "@/Types/Books";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useIsUsefullReview } from "@/hooks/useBooks";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useQueryClient } from "react-query";

export default function Review({
  review,
  totalVotes,
  _id,
}: {
  _id: string | undefined;
  review: {
    username: string;
    createdAt: Date;
    review: string;
    rating: number;
    yesVotes: string[];
    noVotes: string[];
    userId: string;
  };
  totalVotes: number;
}) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useIsUsefullReview();
  const { user } = useAuth();

  const handleClick = (vote: string) => {
    const data = {
      _id,
      isUseFull: vote,
      userId: review.userId,
      participant: (user.user as UserType).userId,
    };

    mutate(data as any, {
      onSuccess: () => {
        queryClient.setQueryData([_id], (prev: any) => {
          const isExistedYesVotes = prev.book.reviews.find(
            (review: any) =>
              review.userId !== data.userId &&
              review._id === _id &&
              review.yesVotes?.find((r: any) => r === data.participant)
          );

          const isExistedNoVotes = prev.book.reviews.find(
            (review: any) =>
              review.userId !== data.userId &&
              review._id === _id &&
              review.noVotes?.find((r: any) => r === data.participant)
          );

          const modifiedReview = prev.book.reviews.map((review: any) => {
            if (review.userId !== data.userId && review._id === _id) {
              if (!isExistedYesVotes && vote === "YES") {
                return {
                  ...review,
                  yesVotes: [...review.yesVotes, data.participant],
                };
              }
              if (!isExistedNoVotes && vote === "NO") {
                return {
                  ...review,
                  noVotes: [...review.noVotes, data.participant],
                };
              }

              if (isExistedYesVotes && vote === "YES") {
                return {
                  ...review,
                  yesVotes: review.yesVotes.filter(
                    (vote: string) => vote !== data.participant
                  ),
                };
              }
              if (isExistedNoVotes && vote === "NO") {
                return {
                  ...review,
                  noVotes: review.noVotes.filter(
                    (vote: string) => vote !== data.participant
                  ),
                };
              }
            }
            return review;
          });

          return {
            ...prev,
            book: {
              ...prev.book,
              reviews: modifiedReview,
            },
          };
        });
      },
    });
  };

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
            onClick={() => handleClick("YES")}
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
            onClick={() => handleClick("NO")}
          >
            No · {review.noVotes.length}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
