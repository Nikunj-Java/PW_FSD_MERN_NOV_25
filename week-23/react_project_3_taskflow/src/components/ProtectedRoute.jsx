import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return auth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;