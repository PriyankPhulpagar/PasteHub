import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;