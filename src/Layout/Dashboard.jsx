import { Outlet } from "react-router-dom";
import logo from "../image/logo/pikstack-logo.png";
import { FaHome } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";
import { HiTemplate } from "react-icons/hi";
import { FaUsersGear } from "react-icons/fa6";
import { TbLockAccessOff } from "react-icons/tb";
const Dashboard = () => {
  return (
    <div className="ps-28 pe-28">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <li>
              <img className="w-60" src={logo} alt="" />
            </li>
            <li className="bg-[#EE4023]"></li>

            {/* Sidebar content here */}
            <li className="mt-11">
              <a className="text-3xl">Dashboard</a>
            </li>
            <li>
              <a>
                <FaHome className=""></FaHome>
                Admin Home
              </a>
            </li>
            <li>
              <a>
                <TbLockAccessOff></TbLockAccessOff>Dashboard Access
              </a>
            </li>
            <li>
              <a>
                <BiSolidCartAdd></BiSolidCartAdd>Add an item
              </a>
            </li>
            <li>
              <a>
                <HiTemplate></HiTemplate>Manage Items
              </a>
            </li>
            <li>
              <a>
                <FaUsersGear></FaUsersGear>Manage Users
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
