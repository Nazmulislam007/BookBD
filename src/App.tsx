import ResponsiveAppBar from "./components/Navbar";
import SubNav from "./components/Navbar/SubNavbar";
// import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";
import Subjects from "./pages/Subjects";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      {/* <Home /> */}
      <Subjects />
      <Footer />
    </>
  );
}

export default App;
