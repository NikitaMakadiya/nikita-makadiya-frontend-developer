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

  const handleThemeSelect = (themeName, path) => {
    setTheme(themeName);
    navigate(path);
    setMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <img
          src="/logo.png"
          alt="MyApp Logo"
          className="w-10 h-10 md:h-25 md:w-25"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            !link.submenu ? (
              <li key={link.name}>
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
              <li key={link.name} className="relative group">
                <span className="cursor-pointer flex items-center gap-1">
                  <span className=" capitalize ">{theme}</span> ▼
                </span>
                {/* Dropdown for desktop */}
                <ul className="absolute left-0 top-full mt-2 opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 transition-opacity bg-white text-gray-800 rounded-md shadow-lg z-50 min-w-[200px]">
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
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoMdClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 py-8">
          <ul className="space-y-2">
            {navLinks.map((link) =>
              !link.submenu ? (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="block hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ) : (
                <li key={link.name}>
                  <div
                    className="flex justify-between cursor-pointer"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
