import { useEffect, useState } from "react";

import { useAuth } from "../contexts/UserAuth";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { BsExclamationCircle } from "react-icons/bs";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasIncorrectCredentials, setHasIncorrectCredentials] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    if (email && password) {
      setIsEmailEmpty(false);
      setIsPasswordEmpty(false);
      const res = await login(email, password);
      if (res.status !== 200) {
        setHasIncorrectCredentials(true);
        setServerErrorMessage(res.data.message);
      }
    } else {
      if (!email) setIsEmailEmpty(true);
      if (!password) setIsPasswordEmpty(true);
    }
  }

  useEffect(() => {
    if (user.isAuthenticated) navigate("/dashboard", { replace: true });
  }, [user.isAuthenticated, navigate]);

  useEffect(() => {
    if (isEmailEmpty && email) setIsEmailEmpty(false);
    if (isPasswordEmpty && password) setIsPasswordEmpty(false);
  }, [email, isEmailEmpty, password, isPasswordEmpty]);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className={`flex flex-col gap-6 border-2 p-8 ${
          hasIncorrectCredentials ? "border-rose-500" : "border-indigo-200"
        }  rounded-md bg-white shadow`}
      >
        <h2 className="text-lg text-indigo-500  font-semibold">Log In </h2>
        <form className="flex flex-col gap-8" onSubmit={handleLoginSubmit}>
          <TextInput
            use={"Login/SignUp"}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter User Email ID"
            alarmCondition={isEmailEmpty}
            alarmStatement={"Please Enter Email"}
          />
          <TextInput
            use={"Login/SignUp"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type={"password"}
            alarmCondition={isPasswordEmpty}
            alarmStatement={"Please Enter Password"}
          />

          <Button type="FormButton">Log In</Button>
        </form>
        {hasIncorrectCredentials && (
          <div className="flex items-center justify-center overflow-hidden text-rose-500 ml-6 ">
            <span className="text-lg">
              <BsExclamationCircle />
            </span>
            <span className="ml-2 text-lg whitespace-normal">
              {serverErrorMessage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
