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
import LandingPage from "./Pages/LandingPage";

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
          <Route path="app" element={<LandingPage />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Protected render={"a"}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="formDetails/:formId"
            element={
              <Protected render={"b"}>
                <ViewFormDetails />
              </Protected>
            }
          >
            <Route
              path="submissions"
              element={
                <Protected render={"c"}>
                  <PerPersonSubmissions />
                </Protected>
              }
            />
            <Route
              path="stats"
              element={
                <Protected render={"d"}>
                  <PerQuestionStats />
                </Protected>
              }
            />

            <Route
              path="sendByEmail"
              element={
                <Protected render={"e"}>
                  <SendByEmail />
                </Protected>
              }
            />
          </Route>

          <Route
            path="newForm"
            element={
              <Protected render={"f"}>
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
