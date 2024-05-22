import { Link } from "react-router-dom";
import logo from "../../../../image/logo/pikstack-logo.png";
// import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[#000000] bg-opacity-20 text-white z-10 relative">
      <div className="navbar justify-between ps-28 pe-28">
        {/*  */}
        <div className="flex-none w-40">
          <img src={logo} alt="" />
        </div>
        {/*  */}
        <div>
          <ul className="flex gap-11 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/vector">Vector</Link>
            </li>
            <li>
              <Link to="/pattern">Pattern</Link>
            </li>
            <li>
              <Link to="/illustration">Illustration</Link>
            </li>
            <li>
              <Link to="/psd">PSD</Link>
            </li>
            <li>
              <Link to="/checkRoute">checkRoute</Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="flex-none">
          <div>
            <ul className="flex gap-11 font-semibold pr-6">
              <li>Contributor</li>
              <li>
                <Link to="/dashboard/admin">Dashboard</Link>
              </li>
              <li>
                {user ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className="ps-7">
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">88</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      {/* search */}
      {/* <div className="form-control z-10 pb-5 lg:w-[900px] mx-auto relative flex items-center justify-center">
        <div>
          <input
            type="text"
            placeholder="Find your Images. Search by keywords..."
            className="input lg:w-[900px] md:w-auto bg-white text-black px-28 py-6 rounded-sm"
          />
        </div>
        <button className="absolute right-0 p-2 px-3 font-semibold text-lg text-white bg-[#EE4023] mr-1 rounded-sm flex items-center justify-between gap-3">
          <IoSearch /> Search
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
