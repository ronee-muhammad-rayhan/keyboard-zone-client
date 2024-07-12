import Footer from "@/pages/shared/Footer";
// import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../Container";
import Navbar2 from "@/pages/shared/Navbar";

const MainLayout = () => {
  return (
    <Container>
      <div className="">
        {/* <Navbar /> */}
        <Navbar2 />
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </Container>
  );
};
export default MainLayout;
