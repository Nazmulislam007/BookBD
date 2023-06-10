import "swiper/css";
import "swiper/css/navigation";

import { RouterProvider } from "react-router-dom";
import BooksProvider from "./context/BooksProvider/BooksProvider";
import { router } from "./routes/roots";

function App() {
  return (
    <BooksProvider>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
      <RouterProvider router={router} />
    </BooksProvider>
  );
}

export default App;
