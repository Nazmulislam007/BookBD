import { CartBookType } from "@/Types/Books";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useDeleteCartBook } from "@/hooks/useAddtoCart";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function CheckoutFrom({
  clientSecret,
  cartBooks,
}: {
  clientSecret: string;
  cartBooks: CartBookType[];
}) {
  const queryClient = useQueryClient();
  const deleteCart = useDeleteCartBook();
  const navigate = useNavigate();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const [_email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  async function placeOrder() {
    if (user) {
      await fetch(`${import.meta.env.VITE_SERVER_URL}/order-confirmed`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartBooks.map(({ _id, quantity }) => ({
            id: _id,
            quantity,
          })),
          userId: user.userId,
        }),
      });

      deleteCart({ ordered: "true" } as any, {
        onSuccess: () => {
          queryClient.setQueryData(["cart-books"], (prev: any) =>
            prev.filter(() => null)
          );
        },
      });

      navigate("/order-completed");
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (clientSecret) {
      await stripe
        .retrievePaymentIntent(clientSecret)
        .then(({ paymentIntent }) => {
          switch (paymentIntent?.status) {
            case "succeeded":
              setMessage("Payment successed!");
              placeOrder();
              break;
            case "processing":
              setMessage("You payment is processing.");
              break;
            case "requires_payment_method":
              break;
            default:
              setMessage("Something went wrong.");
          }
        });
    }

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(`ERROR:: ${error.message}`);
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e.value.target)}
      />
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">{isLoading ? "Paying" : "Pay now"}</span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
