import { Link } from "react-router-dom";
import { useAuth } from "../contexts/UserAuth";
import Button from "./Button";

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between h-20 items-center sticky top-0 w-screen bg-indigo-100 z-50 ">
      <div className="ml-12 flex items-center justify-between w-1/4">
        <div className="text-indigo-500  text-4xl transition-colors duration-300 ease-in-out hover:text-indigo-700 ">
          <Link to="/app">
            <span className="font-pacifico">Formaker</span>
          </Link>
        </div>
        {user.isAuthenticated && (
          <>
            <Link to="/dashboard">
              <span className="flex items-center text-indigo-500  justify-center gap-2 text-2xl ml-8 cursor-pointer font-bold hover:text-indigo-700 transition-all ease-in-out duration-300 ">
                Dashboard
              </span>
            </Link>

            <Link to="/newForm">
              <span className="flex items-center justify-center gap-2 text-2xl ml-8 cursor-pointer text-indigo-500 font-bold hover:text-indigo-700 transition-all ease-in-out duration-300 ">
                New Form
              </span>
            </Link>
          </>
        )}
      </div>

      <div className="flex justify-between mr-16  gap-4">
        {user.isAuthenticated ? (
          <Button type={"action"} onClick={logout}>
            Log Out
          </Button>
        ) : (
          <>
            <Button type={"Link"} to={"/login"}>
              Log In
            </Button>
            <Button type={"Link"} to={"/signUp"}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
