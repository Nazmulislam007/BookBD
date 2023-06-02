import { Box } from "@mui/material";

export default function Image({
  src,
  ...rest
}: {
  src: string;
  [rest: string]: unknown;
}) {
  return (
    <Box
      component="button"
      sx={{
        width: { md: "fit-content", xs: "150px" },
        height: { xs: "230px" },
        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: `"Add To Cart"`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          height: "34px",
          bottom: "-50px",
          left: "5px",
          width: "calc(100% - 10px)",
          color: "#444444",
          background: "white",
          border: "1px solid silver",
          fontSize: "14px",
          fontWeight: "600",
          outlineStyle: "solid",
          outlineColor: "white",
          outlineWidth: "6px",
        },

        "&:hover::before": {
          bottom: "5px",
          transition: "0.3s ease-in-out",
        },

        "&:not(:hover)::before": {
          transition: "0.3s ease-in-out",
        },
      }}
    >
      <img
        src={src}
        {...rest}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </Box>
  );
}
