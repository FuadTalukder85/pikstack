import bannerImg01 from "../../../image/banner_img/banner-img01.jpg";
import bannerImg02 from "../../../image/banner_img/banner-img02.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../Banner/Banner.css";

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
    <div className="slider-container bg-[#ffffff]">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={bannerImg01} className="mx-auto" alt="" />
            <h5>Banner img</h5>
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg02} className="mx-auto" alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={bannerImg01} className="mx-auto" alt="" />
          </h3>
        </div>
        {/* <div>
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
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
