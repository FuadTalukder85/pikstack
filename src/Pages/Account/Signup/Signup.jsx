import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content w-full flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-[#F1696A]">
              Signup Pikstack...
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100 font-semibold">
            <form className="card-body  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <button className="btn bg-[#F1696A]">Sign Up</button>
                </div>
                <label className="pt-3">
                  <div className="text-center">
                    <div>
                      <a
                        href="#"
                        className="label-text-alt text-[15px] text-[#F1696A]"
                      >
                        Have an account?
                        <a href="" className="ps-3 link">
                          <Link to="/login">Login</Link>
                        </a>
                      </a>
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

export default Signup;
