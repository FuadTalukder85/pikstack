import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Account/Login/Login";
import Signup from "../Pages/Account/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import RouteCheck from "../Pages/RouteCheck/RouteCheck";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkRoute",
        element: (
          <PrivateRoute>
            {" "}
            <RouteCheck></RouteCheck>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
