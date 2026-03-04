import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/";   // 👈 IMPORTANT (force reload)
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return <div>Logging in...</div>;
}

export default AuthSuccess;