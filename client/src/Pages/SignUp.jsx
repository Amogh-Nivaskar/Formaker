import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserAuth";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasIncorrectCredentials, setHasIncorrectCredentials] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  async function handleSignupSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);

    if (name && email && password) {
      const res = await signUp(name, email, password);
      if (res.status === 200) {
        navigate("/dashboard");
      } else {
        setHasIncorrectCredentials(true);
        setServerErrorMessage(res.data.message);
      }
    } else {
      if (!name) setIsNameEmpty(true);
      if (!email) setIsEmailEmpty(true);
      if (!password) setIsPasswordEmpty(true);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`flex flex-col gap-10 border-2 p-9 ${
          hasIncorrectCredentials ? "border-rose-500" : "border-indigo-200"
        } rounded-md bg-white shadow`}
      >
        <h2 className="text-xl text-indigo-500  font-semibold">Sign Up</h2>
        <form className="flex flex-col gap-10" onSubmit={handleSignupSubmit}>
          <TextInput
            use={"Login/SignUp"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter User Name"
            alarmCondition={isNameEmpty}
            alarmStatement={"Please Enter Name"}
          />
          <TextInput
            use={"Login/SignUp"}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter User Email"
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
          <Button type="FormButton">Submit</Button>
        </form>
        {hasIncorrectCredentials && (
          <p className="text-rose-500">{serverErrorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default SignUp;
