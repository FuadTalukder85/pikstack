import img1 from "../../../assets/img/popularImg/vector01.jpg";
import img2 from "../../../assets/img/popularImg/vector02.jpg";
import img3 from "../../../assets/img/popularImg/vector03.jpg";
import img4 from "../../../assets/img/popularImg/vector04.jpg";
import img5 from "../../../assets/img/popularImg/vector05.jpg";
import img6 from "../../../assets/img/popularImg/vector06.jpg";
import img7 from "../../../assets/img/popularImg/vector07.jpg";
import img8 from "../../../assets/img/popularImg/vector08.jpg";
import img9 from "../../../assets/img/popularImg/vector09.jpg";
const Popular = () => {
  return (
    <div className="mt-4 md:mt-16 md:mx-56">
      <h1 className="text-xl md:text-4xl font-bold text-center text-[#271F23]">
        Popular Vector Graphics and PSD
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4 md:mt-16 w-full p-5 md:p-0">
        <img className="hover:opacity-85 transition-all" src={img1} />
        <img className="hover:opacity-85 transition-all" src={img2} />
        <img className="hover:opacity-85 transition-all" src={img3} />
        <img className="hover:opacity-85 transition-all" src={img4} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-12 gap-5 mt-5 p-5 md:p-0">
        <div className="col-span-1 md:col-span-3 h-40 md:h-60">
          <img
            className="w-full h-full object-cover hover:opacity-85 transition-all"
            src={img5}
            alt="Image 5"
          />
        </div>
        <div className="col-span-1 md:col-span-2 h-40 md:h-60">
          <img
            className="w-full h-full object-cover hover:opacity-85 transition-all"
            src={img6}
            alt="Image 6"
          />
        </div>
        <div className="col-span-1 md:col-span-2 h-40 md:h-60">
          <img
            className="w-full h-full object-cover hover:opacity-85 transition-all"
            src={img7}
            alt="Image 7"
          />
        </div>
        <div className="col-span-1 md:col-span-2 h-40 md:h-60">
          <img
            className="w-full h-full object-cover hover:opacity-85 transition-all"
            src={img8}
            alt="Image 8"
          />
        </div>
        <div className="col-span-1 md:col-span-3 h-40 md:h-60">
          <img
            className="w-full h-full object-cover hover:opacity-85 transition-all"
            src={img9}
            alt="Image 9"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
