import bannerImg01 from "../../../image/banner_img/banner-img01.jpg";
import bannerImg02 from "../../../image/banner_img/banner-img02.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner/Banner.css";

const Banner = () => {
  const PreViewBtn = ({ onClick }) => (
    <button
      className="absolute top-[50%] z-10 text-white bg-[#c0f1ff44] p-3 pr-6 text-3xl"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
  const NextBtn = ({ onClick }) => (
    <button
      className="absolute top-[50%] right-0 z-10 text-white bg-[#c0f1ff44] p-3 pr-6 text-3xl"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreViewBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className="w-[100%] slider-container bg-[#ffffff]">
      <Slider {...settings}>
        <div>
          <h3 className="relative">
            <img src={bannerImg01} className="mx-auto" alt="" />
            <div className="absolute top-0 text-white items-center w-full h-full flex justify-center">
              <div className="text-center w-[50%]">
                <h1 className="text-5xl font-bold">
                  Discover something creative from a small business at Pikstack
                  Marketplace!
                </h1>
                <h5 className="mt-3">
                  Effortlessly create, optimize, and innovate a wide variety of
                  content, from scripts to marketing materials and more!
                </h5>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 className="relative">
            <img src={bannerImg02} className="mx-auto" alt="" />
            <div className="absolute top-0 text-white items-center w-full h-full flex justify-center">
              <div className="text-center w-[50%]">
                <h1 className="text-5xl font-bold">
                  Discover something creative from a small business at Pikstack
                  Marketplace!
                </h1>
                <h5 className="mt-3">
                  Effortlessly create, optimize, and innovate a wide variety of
                  content, from scripts to marketing materials and more!
                </h5>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 className="relative">
            <img src={bannerImg01} className="mx-auto" alt="" />
            <div className="absolute top-0 text-white items-center w-full h-full flex justify-center">
              <div className="text-center w-[50%]">
                <h1 className="text-5xl font-bold">
                  Discover something creative from a small business at Pikstack
                  Marketplace!
                </h1>
                <h5 className="mt-3">
                  Effortlessly create, optimize, and innovate a wide variety of
                  content, from scripts to marketing materials and more!
                </h5>
              </div>
            </div>
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
