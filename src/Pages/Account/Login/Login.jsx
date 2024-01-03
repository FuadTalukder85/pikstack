import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Pikstack || Loginnn</title>
      </Helmet>
      ;
      <div className="hero bg-base-200">
        <div className="hero-content w-full flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-[#F1696A]">
              Login Pikstack...
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100 font-semibold">
            <form className="card-body  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control mt-6">
                  <button className="btn bg-[#F1696A]">Login</button>
                </div>
                <label className="pt-3">
                  <div className="text-center">
                    <div>
                      <a
                        href="#"
                        className="label-text-alt link link-hover text-[15px] text-[#F1696A]"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div>
                      <p className="label-text-alt text-[15px] text-[#F1696A]">
                        <span>Dont have an account?</span>
                        <a href="" className="ps-3 link">
                          <Link to="/signup">Create Account</Link>
                        </a>
                        <p className="mt-2">Or Sign Up with</p>
                        <div className="flex flex-col items-center mt-5 text-2xl link">
                          <FaGoogle />
                        </div>
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
