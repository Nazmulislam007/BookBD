import "swiper/css";
import "swiper/css/navigation";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import BooksProvider from "./context/BooksProvider/BooksProvider";
import { router } from "./routes/roots";

function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
