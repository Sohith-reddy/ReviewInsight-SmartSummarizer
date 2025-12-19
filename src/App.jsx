// import "./App.css";
// import Example from "./components/Home";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pricing from "./components/pricing";
// import Features from "./components/Features";
// import Login from "./components/Login";
// import Signup from "./components/Signupp";
// import ForgotPassword from "./components/ForgotPassword";
// import { useState, useEffect } from "react";

// function App() {
//   const [theme, setTheme] = useState(() => {
//     const stored = localStorage.getItem("theme");
//     return stored === "dark" ? "dark" : "light";
//   });

//   useEffect(() => {
//     const root = document.documentElement;

//     if (theme === "dark") {
//       root.classList.add("dark");
//       document.body.style.backgroundColor = "#111827";
//     } else {
//       root.classList.remove("dark");
//       document.body.style.backgroundColor = "#ffffff";
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//   return (
//     <>
//       <Router>
//         <Navbar theme={theme} toggleTheme={toggleTheme} />
//         <Routes>
//           <Route path="/" element={<Example />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Example from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import { useState, useEffect } from "react";
import NotFound from "./components/NotFound";

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;