/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import "./Navbar.css";
import userDefaultPic from "@/assets/user.png";
import { FaSun, FaMoon, FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "@/assets/keyboard-zone-logo-react.svg";

const Navbar2 = () => {
  // const { user, logOut } = useAuth();
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e: { target: { checked: any } }) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);

  // const navLinks = (
  //   <div className="flex gap-0 justify-start border">
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="/register">Register</NavLink>
  //     <NavLink to="/add-product">Add Product</NavLink>
  //     <NavLink to="/my-cart">My Cart</NavLink>
  //   </div>
  // );

  // const handleLogOut = () => {
  //     logOut().then(() => {
  //         // Sign-out successful.
  //         console.log('LogOut successfully');
  //     }).catch((error) => {
  //         // An error happened.
  //         console.error(error);
  //     });

  // }
  return (
    <div id="nav" className="navbar bg-base-100">
      <div className="navbar-start">
        {/* menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/add-product">Add Product</NavLink>
            <NavLink to="/my-cart">My Cart</NavLink>
          </ul>
        </div>
        {/* logo and title */}
        <div className="navbar-start flex-1">
          <div className="flex flex-col md:flex-row justify-start items-center gap-2 border">
            <img
              className="rounded-full bg-white w-12 border"
              src={logo}
              width={64}
              alt="logo"
            />
            <div className="">
              <a className="hidden md:block btn btn-ghost normal-case text-xl px-0 content-center">
                <h3>Keyboard Zone</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* menu-lg */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/add-product">Add Product</NavLink>
          <NavLink to="/my-cart">My Cart</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {/* theme-mode */}
        <div className="flex-grow-0">
          {/* Toggle button here */}
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              {/* light theme sun image */}
              <FaSun className="w-8 h-8 swap-on" />
              {/* dark theme moon image */}
              <FaMoon className="w-8 h-8 swap-off" />
            </label>
          </button>
        </div>

        {/* profile */}
        <div className="navbar-end flex flex-col flex-wrap-reverse items-center flex-grow-0">
          <Link to={`/profile`}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userDefaultPic} />
              </div>
            </label>
          </Link>

          {/* <span className="hidden md:hidden lg:inline">Email</span>
          <a className="btn btn-sm">Log Out</a>

          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link> */}
        </div>
        <FaCartPlus className="w-8 h-8 swap-off" />
      </div>
    </div>
  );
};

export default Navbar2;

// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   // NavigationMenuLink,
//   NavigationMenuList,
//   // navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// // import { Link } from "@radix-ui/react-navigation-menu";
// // import { Clapperboard } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "@/assets/keyboard-zone-logo-react.svg";

// export default function Navbar() {
//   return (
//     <div className="mx-auto container  ">
//       <div className="flex  items-center justify-between border-b-2 py-3 ">
//         <Link to="/" className="flex items-center">
//           <div className="flex gap-2">
//             <img
//               src={logo}
//               alt="logo"
//               className="rounded-full bg-white w-12 border"
//             />
//             <h3 className="font-extrabold p-1 rounded-md">Keyboard Zone </h3>{" "}
//           </div>
//           {/* <Clapperboard className="mx-3 " /> */}
//         </Link>
//         <NavigationMenu className="">
//           <NavigationMenuList>
//             <div className="flex justify-end">
//               <NavigationMenuItem>
//                 {/* <Link to="/products">
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Products
//                   </NavigationMenuLink>
//                 </Link> */}
//               </NavigationMenuItem>
//             </div>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </div>
//     </div>
//   );
// }
