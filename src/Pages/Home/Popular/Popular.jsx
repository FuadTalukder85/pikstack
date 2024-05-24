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
    <div className="mt-16 mx-56">
      <h1 className="text-4xl font-bold text-center text-[#271F23]">
        Popular Vector Graphics and PSD
      </h1>
      <div className="flex gap-5 mt-16 w-full">
        <img className="hover:opacity-85 transition-all w-[320px]" src={img1} />
        <img className="hover:opacity-85 transition-all" src={img2} />
        <img className="hover:opacity-85 transition-all" src={img3} />
        <img className="hover:opacity-85 transition-all" src={img4} />
      </div>
      <div className="flex gap-5 mt-5">
        <img className="hover:opacity-85 transition-all" src={img5} />
        <img className="hover:opacity-85 transition-all" src={img6} />
        <img className="hover:opacity-85 transition-all w-[255px]" src={img7} />
        <img className="hover:opacity-85 transition-all" src={img8} />
        <img className="hover:opacity-85 transition-all" src={img9} />
      </div>
    </div>
  );
};

export default Popular;
