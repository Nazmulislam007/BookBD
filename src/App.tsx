import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";
// import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";
import Book from "./pages/Book";
// import Subjects from "./pages/Subjects";

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
