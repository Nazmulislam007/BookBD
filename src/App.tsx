import "swiper/css";
import "swiper/css/navigation";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/roots";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
