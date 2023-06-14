import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Menu from "../Layout/Pages/Menu/Menu/Menu"
import Order from "../Order/Order";
import Login from "../Layout/Pages/Login/Login";
import SignUp from "../Layout/Sign up/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Layout/Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Dashboard pages/MyCart";
import AllUsers from "../Dashboard pages/AllUsers";
import AddItems from "../Dashboard pages/AddItems";
import AdminHome from "../Dashboard pages/AdminHome";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Dashboard pages/ManageItems";
import Payment from "../Dashboard pages/Customer Page/Payment";
import PaymentHistory from "../Dashboard pages/Customer Page/PaymentHistory";
import Reservation from "../Dashboard pages/Customer Page/Reservation";
import UserHome from "../Dashboard pages/Customer Page/UserHome";

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
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "userhome",
        element:<UserHome></UserHome>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

