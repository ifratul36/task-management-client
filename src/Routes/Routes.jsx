import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../component/Login/Login";
import Signup from "../component/signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
]);
