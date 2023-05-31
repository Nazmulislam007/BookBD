import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";
// import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";
// import Book from "./pages/Book";
// import Subjects from "./pages/Subjects";
import "swiper/css";
import "swiper/css/navigation";
import CreateAccount from "./Layouts/CreateAccount";
import OpenModal from "./Layouts/OpenModal";
// import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      {/* <Home /> */}
      {/* <Subjects /> */}
      {/* <Book /> */}
      {/* <ShoppingCart /> */}
      <OpenModal>
        <CreateAccount />
      </OpenModal>
      <Footer />
    </>
  );
}

export default App;
