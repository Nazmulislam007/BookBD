import ActionButton from "@/components/ActionButton";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import useLogin from "@/hooks/useAuth";
import {
  Box,
  FormControl,
  FormLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

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

type LoginType = {
  email: string;
  password: string;
};

export default function LoginUser() {
  const { setUser } = useAuth();
  const { setOpenRegister } = useBooks();
  const { mutate, error, isError, isLoading, isSuccess, data } = useLogin();
  const [login, setLogin] = useState<LoginType>({
    email: "",
    password: "",
  });

  const errors = isError && (error as any).response.data.errors;

  useEffect(() => {
    if (!isError && isSuccess) {
      setLogin({
        email: "",
        password: "",
      });
      setOpenRegister(false);
      setUser({
        ...(data as any)?.data?.user,
        status: (data as any)?.data?.status
          ? (data as any)?.data?.status
          : false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(login as any);
  };

  return (
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
        Login
      </Typography>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          sx={style}
          name="email"
          type="email"
          value={login.email}
          onChange={handleChange}
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
          name="password"
          value={login.password}
          onChange={handleChange}
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
        justifyContent="space-between"
        alignItems="center"
        pt={2}
      >
        <ActionButton title="Sign In" type="submit" disabled={isLoading} />
        <Typography fontSize="sm" color="#1565c0">
          <Link href="/login/forget" color="#63422d">
            Forgot Password?
          </Link>
        </Typography>
      </Stack>
      {isSuccess && (
        <Typography fontSize="12px" fontWeight={500} color="green">
          {(data as any)?.data?.msg}
        </Typography>
      )}
    </Box>
  );
}
