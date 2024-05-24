import photo from "../../../assets/img/category/photo.jpg";
import vector from "../../../assets/img/category/vector.jpg";
import pattern from "../../../assets/img/category/pattern.jpg";
import illustration from "../../../assets/img/category/illustration.jpg";
import { Link } from "react-router-dom";
import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
const Category = () => {
  const { data } = useGetAssetsQuery(undefined);

  // total image
  const totalImg = data?.filter((img) => img.category == "Photo");
  const totalImgLength = totalImg?.length;

  // total vertor
  const totalVector = data?.filter((vector) => vector.category == "Vector");
  const totalVectorLength = totalVector?.length;

  // total pattern
  const totalPattern = data?.filter((pattern) => pattern.category == "Pattern");
  const totalPatternLength = totalPattern?.length;

  // total Illustrator
  const totalIllustration = data?.filter(
    (illustration) => illustration.category == "Illustrator"
  );
  const totalIllustrationLength = totalIllustration?.length;

  // total psd
  const totalPsd = data?.filter((psd) => psd.category == "PSD");
  const totalPsdLength = totalPsd?.length;

  return (
    <div className="px-56">
      <h1 className="text-4xl font-bold text-center text-[#271F23] mt-8">
        Browse by Content Type
      </h1>
      <div className="grid grid-cols-5 justify-items-center gap-5 mt-11">
        {/* photos */}
        <div className="card w-76 overflow-hidden rounded-lg">
          <div className="relative">
            <Link to="/photos">
              <figure>
                <img
                  className="hover:scale-105 transition-all"
                  src={photo}
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-tr-lg">
              <h3 className="text-xl text-white">{totalImgLength}</h3>
              <h3 className="text-xl text-white">photos</h3>
            </div>
          </div>
        </div>
        {/* vector */}
        <div className="card w-76 shadow-xl overflow-hidden rounded-lg">
          <div className="relative">
            <Link to="/vector">
              <figure>
                <img
                  className="hover:scale-105 transition-all"
                  src={vector}
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-tr-lg">
              <h3 className="text-xl text-white">{totalVectorLength}</h3>
              <h3 className="text-xl text-white">vector</h3>
            </div>
          </div>
        </div>

        {/* pattern */}
        <div className="card w-76 shadow-xl overflow-hidden rounded-lg">
          <div className="relative">
            <Link to="/pattern">
              <figure>
                <img
                  className="hover:scale-105 transition-all"
                  src={pattern}
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-tr-lg">
              <h3 className="text-xl text-white">{totalPatternLength}</h3>
              <h3 className="text-xl text-white">pattern</h3>
            </div>
          </div>
        </div>

        {/* illustration */}
        <div className="card w-76 shadow-xl overflow-hidden rounded-lg">
          <div className="relative">
            <Link to="/illustration">
              <figure>
                <img
                  className="hover:scale-105 transition-all"
                  src={illustration}
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-tr-lg">
              <h3 className="text-xl text-white">{totalIllustrationLength}</h3>
              <h3 className="text-xl text-white">illustration</h3>
            </div>
          </div>
        </div>

        {/* psd */}
        <div className="card w-76 shadow-xl overflow-hidden rounded-lg">
          <div className="relative">
            <Link to="/psd">
              <figure>
                <img
                  className="hover:scale-105 transition-all"
                  src={photo}
                  alt="Shoes"
                />
              </figure>
            </Link>
          </div>
          <div className="absolute top-0 right-0">
            <div className="card-actions flex items-center justify-start bg-[#271f23a1] px-3 py-1 rounded-tr-lg">
              <h3 className="text-xl text-white">{totalPsdLength}</h3>
              <h3 className="text-xl text-white">psd</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
