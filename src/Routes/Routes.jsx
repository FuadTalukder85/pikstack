import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Account/Login/Login";
import Signup from "../Pages/Account/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import RouteCheck from "../Pages/RouteCheck/RouteCheck";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Pattern from "../Component/Card/Pattern/Pattern";
import Vector from "../Component/Card/Vector/Vector";
import Psd from "../Component/Card/Psd/Psd";
import Photos from "../Component/Card/Photos/Photos";
import Illustration from "../Component/Card/Illustration/Illustration";

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
        path: "/photos",
        element: <Photos></Photos>,
      },
      {
        path: "/vector",
        element: <Vector></Vector>,
      },
      {
        path: "/pattern",
        element: <Pattern></Pattern>,
      },
      {
        path: "/illustration",
        element: <Illustration></Illustration>,
      },
      {
        path: "/psd",
        element: <Psd></Psd>,
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "additem",
        element: <AddItem></AddItem>,
      },
      {
        path: "manageitems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageitems/updateitem",
        element: <UpdateItem></UpdateItem>,
      },
    ],
  },
]);
