import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔐 Decode user from token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      className={`navbar px-4 d-flex justify-content-between ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <h4 className={`m-0 ${theme === "dark" ? "text-white" : "text-dark"}`}>
        PasteHub
      </h4>

      {user && (
        <div className="d-flex align-items-center gap-3">
          {/* 🌗 Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className={`btn btn-sm ${
              theme === "dark"
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* 👤 Profile Image */}
          <img
            src={user?.picture}
            alt="profile"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/40";
            }}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          {/* 👤 User Name */}
          <span
            className={
              theme === "dark" ? "text-white" : "text-dark"
            }
          >
            {user.name}
          </span>

          {/* 🚪 Logout */}
          <button
            onClick={handleLogout}
            className={`btn btn-sm ${
              theme === "dark"
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;