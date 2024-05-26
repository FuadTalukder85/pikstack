import { Link } from "react-router-dom";
import logo from "../../../../image/logo/pikstack-logo.png";
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
      <div className="navbar md:px-56">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52 z-1"
            >
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
          <div className="flex-none w-40">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
        <div className="navbar-end">
          <div className="flex items-center">
            <div>
              <ul className="flex gap-11 pr-6">
                <li>
                  <Link to="/dashboard/admin">Dashboard</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Login" src={user?.photoURL} />
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <ul>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
