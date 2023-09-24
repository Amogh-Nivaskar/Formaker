import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/UserAuth";
import { useEffect } from "react";

function Protected({ children, key }) {
  const { user, authUser } = useAuth();

  useEffect(() => {
    async function checkAuth() {
      await authUser();
    }

    checkAuth();
  }, [authUser, key]);

  if (!user.isAuthenticated) {
    // console.log("not authenticated");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default Protected;
