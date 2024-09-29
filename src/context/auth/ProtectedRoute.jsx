import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import { auth } from "@/firebase";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  if (loading) {
    return <PageLoader text="Loading..." />; // Optional loading spinner or message
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
