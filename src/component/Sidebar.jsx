import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  {
    name: "Theme",
    submenu: true,
    sublinks: [{ name: "minimalist" }, { name: "dark" }, { name: "colorful" }],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleThemeSelect = (themeName) => {
    setTheme(themeName);
    setMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <div className="flex">
      <div
        className={` navbar w-20 md:w-64 h-screen duration-300 ${
          menuOpen ? "w-64 " : "w-20 mr-10"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img
            src="/logo.png"
            alt="MyApp Logo"
            className={`w-15 h-15  md:block ${menuOpen ? "block" : "hidden"}`}
          />
          <button
            className="md:hidden block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose size={26} /> : <IoMenu size={26} />}
          </button>
        </div>

        <nav className="mt-4 ">
          <ul className="mx-auto flex flex-col items-center">
            {navLinks.map((link) =>
              !link.submenu ? (
                <li
                  key={link.name}
                  className={`p-4 cursor-pointer ${
                    menuOpen ? "block" : "hidden"
                  } md:block`}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-offset-6 decoration-2"
                        : "hover:underline hover:underline-offset-6 decoration-2"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ) : (
                <li
                  key={link.name}
                  className={`p-4 cursor-pointer ${
                    menuOpen ? "block" : "hidden"
                  } md:block`}
                >
                  <div
                    className="flex justify-center gap-5 cursor-pointer"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  >
                    <span>{link.name}</span>
                    <span>{mobileSubmenuOpen ? "▲" : "▼"}</span>
                  </div>
                  {mobileSubmenuOpen && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.name}>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-indigo-100"
                            onClick={() => handleThemeSelect(sublink.name)}
                          >
                            {sublink.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
