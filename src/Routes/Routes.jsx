import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../component/Login/Login";
import Signup from "../component/signup/Signup";
import Home from "../component/Home/Home";
import TaskAdd from "../component/TaskAdd/TaskAdd";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'addTask',
        element:<PrivateRoute><TaskAdd /></PrivateRoute>,
      }
    ],
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
