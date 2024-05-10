import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User profile updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          logOut()
            .then()
            .catch((error) => console.log(error));
          navigate("/login");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content w-full flex-col ">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold text-center text-[#F1696A]">
              Signup Pikstack...
            </h1> */}
          </div>
          <div className="card shrink-0 bg-white shadow-xl font-semibold">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-[550px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#271F23]">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered w-full"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#271F23]">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL?.type === "required" && (
                  <p role="alert" className="mt-1 text-[#F1696A]">
                    photoURL is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#271F23]">Email</span>
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
                  <span className="label-text text-[#271F23]">Password</span>
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
                    className="btn bg-[#F1696A] text-white border-none"
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
