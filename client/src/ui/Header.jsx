import { Link } from "react-router-dom";
import { useAuth } from "../contexts/UserAuth";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between h-20 items-center sticky top-0 w-screen bg-indigo-100 z-50 ">
      <span className="ml-12 text-indigo-500  text-4xl transition-colors duration-300 ease-in-out hover:text-indigo-700 ">
        <Link to="/app">
          <span className="font-pacifico">Formaker</span>
        </Link>
      </span>
      <div className="flex justify-between mr-16  gap-4">
        {user.isAuthenticated ? (
          <>
            <Button type={"Link"} to={"/newForm"}>
              <div className="flex justify-between items-center">
                <span>New Form</span>
                <span className="pl-2">
                  <AiOutlinePlus fontSize={"1.5rem"} />
                </span>
              </div>
            </Button>
            <Button type={"action"} onClick={logout}>
              Log Out
            </Button>
          </>
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
