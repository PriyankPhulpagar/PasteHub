// src/pages/AuthSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // 1️⃣ Store token
      localStorage.setItem("jwt", token);

      // 2️⃣ Redirect to homepage
      navigate("/"); 
    } else {
      // fallback if token missing
      navigate("/login");
    }
  }, [navigate]);

  return <div>Logging you in...</div>;
}

export default AuthSuccess;