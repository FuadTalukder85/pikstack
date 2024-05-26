// import bannerImg01 from "../../../image/banner_img/banner-img01.jpg";
import { IoSearch } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div className="hero-banner w-[100%] slider-container bg-[#ffffff] mt-[-136px] pb-16 pt-32 md:py-32">
      <div className="">
        {/* <img src={bannerImg01} className="mx-auto" alt="" /> */}
        <div className=" text-white items-center w-full h-full flex justify-center">
          <div className="text-center md:w-[50%]">
            <h1 className="text-xl md:text-5xl font-bold pt-10">
              Discover something creative from a small business at Pikstack
              Marketplace!
            </h1>
            <div className="relative form-control z-0 pb-5 lg:w-[900px] mx-auto flex items-center justify-center mt-10">
              <div className="">
                <input
                  type="text"
                  placeholder="Find your Images. Search by keywords..."
                  className="input lg:w-[900px] md:w-auto bg-white text-black pe-40 py-6 rounded-sm"
                />
              </div>
              <button className="absolute right-9 md:right-0 p-2 px-3 font-semibold text-lg text-white bg-[#EE4023] mr-1 rounded-sm flex items-center gap-3">
                <IoSearch /> Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
