import { useParams } from "react-router-dom";
import { useGetAssetsByIdQuery } from "../../Redux/Features/AssetsApi/AssetsApi";
import { FaDownload } from "react-icons/fa6";

const AssetsDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAssetsByIdQuery(id);
  if (isLoading) {
    return <></>;
  }
  return (
    <div className="flex gap-16 items-center w-[1100px] border shadow-md p-10 mx-auto mt-10">
      <img className="w-full" src={data.image} alt="" />
      <div>
        <p className="text-2xl font-semibold text-[#271F23]">{data.title}</p>
        <a href={data.image} download="image.jpg">
          <button className="mt-5 flex gap-3 items-center bg-[#EE4023] hover:bg-[#d14343] transition-all text-white font-semibold text-lg tracking-wider rounded-md px-16 py-3">
            Download <FaDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default AssetsDetails;
