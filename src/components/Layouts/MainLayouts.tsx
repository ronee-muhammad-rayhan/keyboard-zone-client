import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../Container";

const MainLayout = () => {
  return (
    <Container>
      <div className="">
        <Navbar />
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </Container>
  );
};
export default MainLayout;
