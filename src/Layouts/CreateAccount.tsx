import ActionButton from "@/components/ActionButton";
import {
  Box,
  FormControl,
  FormLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const style = {
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

export default function CreateAccount() {
  return (
    <Stack direction={{ md: "row", xs: "column" }} gap={5}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: "1 1 50%",
        }}
      >
        <Typography
          component="p"
          sx={{ textTransform: "uppercase", fontSize: "20px" }}
        >
          Login
        </Typography>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField
            sx={style}
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <TextField
            sx={style}
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={2}
        >
          <ActionButton />
          <Typography fontSize="sm" color="#1565c0">
            <Link href="/login/forget" color="#63422d">
              Forgot Password?
            </Link>
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: "1 1 50%",
        }}
      >
        <Typography
          component="p"
          sx={{ textTransform: "uppercase", fontSize: "20px" }}
        >
          register
        </Typography>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <TextField
            sx={style}
            name="name"
            type="text"
            placeholder="John Doe"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField
            sx={style}
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <TextField
            sx={style}
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pt={2}
        >
          <ActionButton />
        </Stack>
      </Box>
    </Stack>
  );
}
