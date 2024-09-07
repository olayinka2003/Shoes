import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export const Nav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="bg-gray-50 flex flex-col text-lg border border-gray-100 rounded-lg p-4 lg:flex-row lg:bg-transparent lg:border-none lg:space-x-8">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`py-2 px-3 lg:hover:bg-transparent lg:hover:text-blue-500 cursor-pointer rounded ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"
                } ${(i===3 || i===4) && "lg:text-white"}`}
                key={route}
              >
                <a href="#">{route}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="rounded-full bg-white shadow-md h-12 w-12 flex-center cursor-pointer btn-press-anim">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};
