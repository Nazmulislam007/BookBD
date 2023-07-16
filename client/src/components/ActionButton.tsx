import { Button } from "@mui/material";

type ActionButtonType = {
  title: string;
  [rest: string]: any;
};

export default function ActionButton({ title, ...rest }: ActionButtonType) {
  return (
    <Button
      sx={{
        bgcolor: "#63422d",
        "&:hover": {
          bgcolor: "#63422d",
        },
      }}
      variant="contained"
      {...rest}
    >
      {title}
    </Button>
  );
}
