import photo from "../../../assets/img/category/photo.jpg";
import vector from "../../../assets/img/category/vector.jpg";
import pattern from "../../../assets/img/category/pattern.jpg";
import illustration from "../../../assets/img/category/illustration.jpg";
import { Link } from "react-router-dom";
import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
const Category = () => {
  const { data } = useGetAssetsQuery(undefined);
  console.log(data);
  const totalImg = data?.filter((img) => img.category == "Photo");
  const totalImgLength = totalImg?.length;
  console.log("total img =>", totalImgLength);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#271F23] mt-8">
        Browse by Content Type
      </h1>
      <div className="grid grid-cols-5 justify-items-center gap-10 mt-11 ps-28 pe-28">
        {/* photos */}
        <div className="card w-76 shadow-xl">
          <div className="relative">
            <Link to="/photos">
              <figure>
                <img src={photo} alt="Shoes" />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-b-s">
              <h3 className="text-xl text-white">{totalImgLength}</h3>
              <h3 className="text-xl text-white">photos</h3>
            </div>
          </div>
        </div>
        {/* vector */}
        <div className="card w-76 bg-[#271F23] shadow-xl">
          <Link to="/photo">
            <figure>
              <img src={vector} alt="Shoes" />
            </figure>
          </Link>
          <div className="p-3">
            <div className="card-actions justify-start text-white">
              <h3 className="text-2xl font-bold text-white">Vector</h3>
            </div>
          </div>
        </div>
        {/* pattern */}
        <div className="card w-76 bg-[#271F23] shadow-xl">
          <Link to="/photo">
            <figure>
              <img src={pattern} alt="Shoes" />
            </figure>
          </Link>
          <div className="p-3">
            <div className="card-actions justify-start text-white">
              <h3 className="text-2xl font-bold text-white">Pattern</h3>
            </div>
          </div>
        </div>
        {/* illustration */}
        <div className="card w-76 bg-[#271F23] shadow-xl">
          <Link to="/photo">
            <figure>
              <img src={illustration} alt="Shoes" />
            </figure>
          </Link>
          <div className="p-3">
            <div className="card-actions justify-start text-white">
              <h3 className="text-2xl font-bold text-white">Illustration</h3>
            </div>
          </div>
        </div>
        {/* psd */}
        <div className="card w-76 bg-[#271F23] shadow-xl">
          <Link to="/photo">
            <figure>
              <img src={photo} alt="Shoes" />
            </figure>
          </Link>
          <div className="p-3">
            <div className="card-actions justify-start text-white">
              <h3 className="text-2xl font-bold text-white">PSD</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
