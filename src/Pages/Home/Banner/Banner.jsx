import bannerImg from "../../../image/banner_img/pikstack-logo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Banner/Banner.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container pt-24 pb-24">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg} className="mx-auto" alt="" />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
