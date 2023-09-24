import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/UserAuth";
import { useEffect } from "react";

function Protected({ children, render }) {
  const { user, authUser } = useAuth();

  useEffect(() => {
    async function checkAuth() {
      await authUser();
    }

    checkAuth();
  }, [render]);

  if (!user.isAuthenticated) {
    // console.log("not authenticated");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default Protected;
