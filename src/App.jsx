import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useContext } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className=" top-0 left-0 w-full fixed z-50">
        {theme === "dark" ? <Sidebar /> : <Navbar />}
      </div>
      <div className="min-h-[70vh] mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
