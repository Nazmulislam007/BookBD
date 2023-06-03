import "swiper/css";
import "swiper/css/navigation";
// import CreateAccount from "./Layouts/CreateAccount";
import Footer from "./Layouts/Footer";
// import OpenModal from "./Layouts/OpenModal";
import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/roots";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      <RouterProvider router={router} />
      {/* <OpenModal>
        <CreateAccount />
      </OpenModal> */}
      <Footer />
    </>
  );
}

export default App;
