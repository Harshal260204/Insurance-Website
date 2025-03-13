import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = () => {
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ProtectedRoute: user =", user);
    console.log("ProtectedRoute: token =", token);

    // Simulate loading time while checking auth
    const timeout = setTimeout(() => setLoading(false), 500);
    
    return () => clearTimeout(timeout);
  }, [user, token]);

  if (loading) return <div>Loading...</div>; // Prevents redirecting too early

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
