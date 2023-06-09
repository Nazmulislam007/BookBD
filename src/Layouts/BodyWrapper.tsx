import ResponsiveAppBar from "@/components/Navbar";
import SubNav from "@/components/Navbar/SubNavbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function BodyWrapper() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      <Outlet />
      {/* <OpenModal>
        <CreateAccount />
      </OpenModal> */}
      <Footer />
    </>
  );
}
