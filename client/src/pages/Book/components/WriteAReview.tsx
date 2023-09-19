import ActionButton from "@/components/ActionButton";
import {
  FormControl,
  FormLabel,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useCreateReview } from "@/hooks/useBooks";
import Modal from "@mui/material/Modal";
import { useQueryClient } from "react-query";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  width: "100%",
  minWidth: 300,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

const formStyle = {
  pt: "5px",
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "10px 10px",
  },
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
};

export default function WriteAReview({ id }: { id: string | undefined }) {
  const [value, setValue] = React.useState<number | null>(0);
  const [review, setReview] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useCreateReview();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (user?.userId && id) {
      const reviewData = {
        _id: id,
        userId: user.userId,
        username: user.username,
        rating: value,
        review,
      };
      mutate(reviewData as any, {
        onSuccess: () => {
          queryClient.setQueryData([id], (prev: any) => {
            const isExistedReview = prev.book.reviews.find(
              (review: any) =>
                review.userId === reviewData.userId &&
                review._id === reviewData._id
            );
            const modifiedReview = prev.book.reviews.map((review: any) => {
              if (
                review.userId === reviewData.userId &&
                review._id === reviewData._id
              ) {
                return {
                  ...review,
                  rating: reviewData.rating,
                  review: reviewData.review,
                };
              }
              return review;
            });

            return {
              ...prev,
              book: {
                ...prev.book,
                reviews: isExistedReview
                  ? modifiedReview
                  : [...prev.book.reviews, reviewData],
              },
            };
          });
        },
      });
    }
  };

  return (
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
      <ActionButton title="Write a review" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} gap="5px" component="form" onSubmit={handleSubmit}>
          <Typography sx={{ fontStyle: "italic", fontSize: "12px" }}>
            *if you already write a comment it will be replaced*
          </Typography>
          <FormControl sx={{ maxWidth: "min-content" }}>
            <FormLabel>Give a review</FormLabel>
            <Rating
              size="large"
              value={value}
              onChange={(_event, newValue) => {
                setValue(newValue);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Write a review</FormLabel>
            <TextField
              value={review}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setReview(e.target.value)
              }
              sx={formStyle}
              name="review"
              type="text"
            />
          </FormControl>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            pt={2}
          >
            <ActionButton title="Submit" type="submit" />
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}
