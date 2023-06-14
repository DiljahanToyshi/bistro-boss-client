import {
  FaBook,
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import userAdmin from "../hooks/userAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = userAdmin();
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>Add Items
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/dashboard/manage">
                    <FaBook></FaBook>Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers>All Users
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu">
                    <FaHamburger></FaHamburger>Our Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order/salad">
                    <FaHome></FaHome>Order Food
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt></FaCalendarAlt>Reservation
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu">
                    <FaHamburger></FaHamburger>Our Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order/salad">
                    <FaHome></FaHome>Order Food
                  </NavLink>
                </li>
              </>
            )}
            {/* <!-- Sidebar content here --> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
