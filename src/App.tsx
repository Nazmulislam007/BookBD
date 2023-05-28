import ResponsiveAppBar from "@/components/Navbar";
import SubNav from "@/components/Navbar/SubNavbar";
import Home from "@/pages/Home";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
