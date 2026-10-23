import { useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg";

const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact",
];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] =
    useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between gap-4">
      <a href="#" aria-label="Nike homepage">
        <img
          src={NikeLogo}
          alt="Nike logo"
          className="h-14 w-14 object-contain dark:invert"
        />
      </a>

      <button
        type="button"
        onClick={() => setIsMobileMenuShown((shown) => !shown)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuShown}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${isMobileMenuShown ? "block" : "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          {ROUTES.map((route, index) => (
            <li
              key={route}
              className={`cursor-pointer rounded px-3 py-2 ${
                index === 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100 lg:dark:hover:bg-transparent"
              }`}
            >
              <a href={`#${route.toLowerCase()}`}>{route}</a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onClickShoppingBtn}
        aria-label="Open shopping bag"
        className="btn-press-anim dark:bg-night-50 fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md lg:static lg:mr-8 dark:text-white"
      >
        <TbShoppingBag size={22} />
      </button>
    </nav>
  );
}
