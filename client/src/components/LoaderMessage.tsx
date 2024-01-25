import { Box, Typography } from "@mui/material";

export default function LoaderMessage() {
  // const [countDown, setCountDown] = useState(10);

  // if (countDown > 0) {
  //   setTimeout(() => {
  //     setCountDown(countDown - 1);
  //   }, 1000);
  // }

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: 102312931239,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "white",
        padding: 4,
      }}
    >
      <Typography component="h2" fontSize="18px" textAlign="center">
        We are currently using a free server; therefore, it takes a little bit
        of time to start the server for the backend.
      </Typography>
      {/* <Typography
        component="h2"
        fontSize="18px"
        textAlign="center"
        fontWeight={500}
        my={2}
      >
        {countDown}
      </Typography> */}
      <Typography component="h2" fontSize="18px" textAlign="center">
        Instead of using a dummy book image, we are using colored blocks.
      </Typography>
    </Box>
  );
}
