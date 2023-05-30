import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";
// import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";
// import Book from "./pages/Book";
// import Subjects from "./pages/Subjects";
import "swiper/css";
import "swiper/css/navigation";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      {/* <Home /> */}
      {/* <Subjects /> */}
      {/* <Book /> */}
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default App;
