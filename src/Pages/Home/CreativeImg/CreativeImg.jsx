import img1 from "../../../assets/img/creativeImg/img1.jpg";
import img2 from "../../../assets/img/creativeImg/img2.jpg";
import img3 from "../../../assets/img/creativeImg/img3.jpg";
import img4 from "../../../assets/img/creativeImg/img4.jpg";
const CreativeImg = () => {
  return (
    <div className="mx-56 grid grid-cols-12 items-center gap-5 mt-16">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <div>
              <img className="rounded-lg" src={img1} alt="" />
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <img className="rounded-lg" src={img2} alt="" />
              </div>
              <div className="w-full">
                <img className="rounded-lg" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <img className="rounded-lg" src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <h1 className="text-4xl font-bold text-center text-[#271F23]">
          Best creative background image
        </h1>
        <p className="text-xl font-semibold text-center text-[#271F23] mt-5">
          Transform your background with our collection of eye-catching images
          Backdrop 890604 images
        </p>
      </div>
    </div>
  );
};

export default CreativeImg;
