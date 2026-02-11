import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo_container">
          <h2>Sky<span>DO</span></h2>
          <img src="vite.svg" alt="Logo" className="logo" />  
        </div>
        
        <button
          className="btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
