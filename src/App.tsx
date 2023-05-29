import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";
// import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";
import Book from "./pages/Book";
// import Subjects from "./pages/Subjects";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      {/* <Home /> */}
      {/* <Subjects /> */}
      <Book />
      <Footer />
    </>
  );
}

export default App;
