import ResponsiveAppBar from "@/components/Navbar";
import SubNav from "@/components/Navbar/SubNavbar";
import { Outlet } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Footer from "./Footer";
import OpenModal from "./OpenModal";

export default function BodyWrapper() {
  return (
    <>
      <ResponsiveAppBar />
      <SubNav />
      <Outlet />
      <OpenModal>
        <CreateAccount />
      </OpenModal>
      <Footer />
    </>
  );
}
