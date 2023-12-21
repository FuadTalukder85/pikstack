// import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg from "../../../image/banner_img/pikstack-logo.png";
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    // <Carousel className="ps-24 pe-24">
    //   <div>
    //     <img src={bannerImg} />
    //   </div>
    //   <div>
    //     <img src={bannerImg} />
    //   </div>
    //   <div>
    //     <img src={bannerImg} />
    //   </div>
    // </Carousel>
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
  );
};

export default Banner;
