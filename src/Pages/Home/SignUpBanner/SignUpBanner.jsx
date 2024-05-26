import Signup from "../../Account/Signup/Signup";
import "./SignUpBanner.css";

const SignUpBanner = () => {
  return (
    <div className="bg-img mt-28 flex justify-center p-10">
      <div className="md:flex items-center gap-28 md:mx-28">
        <div>
          <h1 className="text-5xl font-bold text-center text-white">
            Create a Free Account
          </h1>
          <p className="text-white text-center text-xl mt-3 w-[400px] mx-auto">
            Explore thousands of free vectors, photos, images, and videos
            created by amazing artists all over the world!
          </p>
        </div>
        <div>
          <Signup></Signup>
        </div>
      </div>
    </div>
  );
};

export default SignUpBanner;
