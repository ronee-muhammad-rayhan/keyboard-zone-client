import MainLayout from "@/components/Layouts/MainLayouts";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/Products/ProductDetails";
import Products from "@/pages/Products/Products";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
