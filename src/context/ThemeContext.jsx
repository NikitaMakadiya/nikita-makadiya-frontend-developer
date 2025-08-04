import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = ["minimalist", "dark", "colorful"];

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("app-theme");
    return themes.includes(saved) ? saved : "minimalist";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
