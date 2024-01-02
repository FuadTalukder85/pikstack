import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Password can not be less than 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Password can not be less than 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Password must be one lowercase one uppercase one special
                    character and one letter
                  </p>
                )}

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn bg-[#F1696A]"
                  />
                  {/* <button className="btn bg-[#F1696A]">Sign Up</button> */}
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
