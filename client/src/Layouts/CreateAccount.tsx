import { RegisterType } from "@/Types/Books";
import ActionButton from "@/components/ActionButton";
import { useRegister } from "@/hooks/useAuth";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import LoginUser from "./LoginUser";

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
  const { mutate, error, isError, isLoading, isSuccess, data } = useRegister();
  const [register, setRegister] = useState<RegisterType>({
    username: "",
    email: "",
    password: "",
  });

  const errors = isError && (error as any).response.data.errors;

  useEffect(() => {
    if (!isError && isSuccess) {
      setRegister({
        username: "",
        email: "",
        password: "",
      });
    }
  }, [isError, isSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(register as any);
  };

  return (
    <Stack direction={{ md: "row", xs: "column" }} gap={5}>
      <LoginUser />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: "1 1 50%",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography
          component="p"
          sx={{ textTransform: "uppercase", fontSize: "20px" }}
        >
          register
        </Typography>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField
            sx={style}
            name="username"
            type="text"
            value={register.username}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </FormControl>
        {isError && (
          <Typography fontSize="12px" fontWeight={500} color="#e11d48">
            {errors?.username?.msg}
          </Typography>
        )}
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField
            sx={style}
            value={register.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        {isError && (
          <Typography fontSize="12px" fontWeight={500} color="#e11d48">
            {errors?.email?.msg}
          </Typography>
        )}
        <FormControl>
          <FormLabel>Password</FormLabel>
          <TextField
            sx={style}
            value={register.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        {isError && (
          <Typography fontSize="12px" fontWeight={500} color="#e11d48">
            {errors?.password?.msg}
          </Typography>
        )}
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pt={2}
        >
          <ActionButton title="Sign Up" type="submit" disabled={isLoading} />
        </Stack>
        {isSuccess && (
          <Typography fontSize="12px" fontWeight={500} color="green">
            {(data as any)?.data?.msg}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
