import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import LoaderMessage from "./components/LoaderMessage";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import BooksProvider from "./context/BooksProvider/BooksProvider";
import { router } from "./routes/roots";

function App() {
  const [preLoader, setPreLoader] = useState(true);

  window.onload = () => {
    setTimeout(() => {
      // setPreLoader(false);
    }, 300);
  };

  return (
    <AuthProvider>
      <BooksProvider>
        {preLoader && <LoaderMessage />}
        <RouterProvider router={router} />
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
