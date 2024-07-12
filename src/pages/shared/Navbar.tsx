import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { Link } from "@radix-ui/react-navigation-menu";
// import { Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/keyboard-zone-logo-react.svg";

export default function Navbar() {
  return (
    <div className="mx-auto container  ">
      <div className="flex  items-center justify-between border-b-2 py-3 ">
        <Link to="/" className="flex items-center">
          <div className="flex gap-2">
            <img
              src={logo}
              alt="logo"
              className="rounded-full bg-white w-12 border"
            />
            <h3 className="font-extrabold p-1 rounded-md">Keyboard Zone </h3>{" "}
          </div>
          {/* <Clapperboard className="mx-3 " /> */}
        </Link>
        <NavigationMenu className="">
          <NavigationMenuList>
            <div className="flex justify-end">
              <NavigationMenuItem>
                {/* <Link to="/products">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Products
                  </NavigationMenuLink>
                </Link> */}
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
