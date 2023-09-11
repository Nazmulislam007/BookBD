import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Dispatch, SetStateAction } from "react";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);

export default function PaymentBox({
  clientSecret,
  setClientSecret,
  cartBooks,
}: {
  clientSecret: string;
  setClientSecret: Dispatch<SetStateAction<string>>;
  cartBooks: any[];
}) {
  return (
    <>
      {clientSecret && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100000,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="button"
              sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                padding: "10px",
              }}
              onClick={() => setClientSecret("")}
            >
              <CloseIcon />
            </Box>
            <Elements
              options={{ clientSecret, appearance: { theme: "stripe" } }}
              stripe={stripePromise}
            >
              <CheckoutFrom clientSecret={clientSecret} cartBooks={cartBooks} />
            </Elements>
          </Box>
        </Box>
      )}
    </>
  );
}
