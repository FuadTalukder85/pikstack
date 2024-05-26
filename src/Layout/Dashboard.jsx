import { Link, Outlet } from "react-router-dom";
import logo from "../image/logo/pikstack-logo.png";
import { FaHome } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";
import { HiTemplate } from "react-icons/hi";
import { FaUsersGear } from "react-icons/fa6";
import { TbLockAccessOff } from "react-icons/tb";
const Dashboard = () => {
  return (
    <div className="md:px-28">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-[#271F23] text-white font-semibold">
            <Link to="/">
              <li>
                <img className="w-60" src={logo} alt="" />
              </li>
            </Link>
            <li className="bg-[#EE4023]"></li>

            {/* Sidebar content here */}
            <li className="mt-11 text-3xl">
              <Link to="/dashboard/admin">
                <FaHome className=""></FaHome>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="admin">
                <FaHome className=""></FaHome>
                Admin Home
              </Link>
            </li>
            <li>
              <a>
                <TbLockAccessOff></TbLockAccessOff>Dashboard Access
              </a>
            </li>
            <li>
              <Link to="additem">
                <BiSolidCartAdd></BiSolidCartAdd>Add an item
              </Link>
            </li>
            <li>
              <Link to="manageitems">
                <HiTemplate></HiTemplate>Manage Items
              </Link>
            </li>
            <li>
              <Link to="manageusers">
                <FaUsersGear></FaUsersGear>Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
