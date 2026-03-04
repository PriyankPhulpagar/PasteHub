// client/src/pages/AuthSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("jwt", token); // store JWT
      navigate("/"); // go to homepage
    } else {
      navigate("/login"); // fallback
    }
  }, [navigate]);

  return <div>Logging you in...</div>;
}

export default AuthSuccess;