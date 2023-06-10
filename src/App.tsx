import "swiper/css";
import "swiper/css/navigation";

import { RouterProvider } from "react-router-dom";
import BooksProvider from "./context/BooksProvider/BooksProvider";
import { router } from "./routes/roots";

function App() {
  return (
    <BooksProvider>
      <h1>helo</h1>
      <RouterProvider router={router} />
    </BooksProvider>
  );
}

export default App;
