import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ViewPaste from "../pages/ViewPaste";
import EditPaste from "../pages/EditPaste";
import AuthSuccess from "../pages/AuthSuccess";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth-success" element={<AuthSuccess />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/paste/:id"
        element={
          <ProtectedRoute>
            <ViewPaste />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditPaste />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;