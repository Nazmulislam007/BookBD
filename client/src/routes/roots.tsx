import BodyWrapper from "@/Layouts/BodyWrapper";
import Book from "@/pages/Book";
import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import Subjects from "@/pages/Subjects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <BodyWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/s/:subject",
        element: <Subjects />,
      },
      {
        path: "/b/:id",
        element: <Book />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);
