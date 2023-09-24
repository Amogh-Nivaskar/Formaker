import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Root from "./ui/Root";
import NewForm from "./Pages/NewForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthProvider, useAuth } from "./contexts/UserAuth";
import Protected from "./Components/Protected";
import { useEffect } from "react";
import axios from "axios";
import AnsForm from "./Pages/AnsForm";
import Submitted from "./Pages/Submitted";
import ViewFormDetails from "./Pages/ViewFormDetails";
import ViewSubmissions from "./Pages/PerPersonSubmissions";
import PerPersonSubmissions from "./Pages/PerPersonSubmissions";
import PerQuestionStats from "./Pages/PerQuestionStats";
import SendByEmail from "./Pages/SendByEmail";

axios.defaults.withCredentials = true;

function App() {
  const { user, authUser } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAuthenticated) authUser();
  }, [authUser, user.isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <Protected key={"a"}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="formDetails/:formId"
            element={
              <Protected key={"b"}>
                <ViewFormDetails />
              </Protected>
            }
          >
            <Route
              path="submissions"
              element={
                <Protected key={"c"}>
                  <PerPersonSubmissions />
                </Protected>
              }
            />
            <Route
              path="stats"
              element={
                <Protected key={"d"}>
                  <PerQuestionStats />
                </Protected>
              }
            />

            <Route
              path="sendByEmail"
              element={
                <Protected key={"e"}>
                  <SendByEmail />
                </Protected>
              }
            />
          </Route>

          <Route
            path="newForm"
            element={
              <Protected key={"f"}>
                <NewForm />
              </Protected>
            }
          />
        </Route>
        <Route path="ansForm/:formId" element={<AnsForm />} />
        <Route path="ansForm/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
