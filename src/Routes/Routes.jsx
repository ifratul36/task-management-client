import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../component/Login/Login";
import Signup from "../component/signup/Signup";
import Home from "../component/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Todo from "../component/Todo";
import AddTask from "../component/AddTask/AddTask";
import AllTasks from "../component/AllTasks/AllTasks";
import EditTask from "../component/EditTask/EditTask";

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
        element:<PrivateRoute><AddTask /></PrivateRoute>,
      },
      {
        path:'allTask',
        element:<PrivateRoute><AllTasks /></PrivateRoute>,
      },
      {
        path:'editTask/:id',
        element:<PrivateRoute><EditTask /></PrivateRoute>,
      },
      {
        path:'todo',
        element:<PrivateRoute><Todo /></PrivateRoute>,
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
