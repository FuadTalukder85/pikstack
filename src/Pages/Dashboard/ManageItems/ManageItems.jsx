import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import img from "../../../image/blogImg/blogImg.png";
import { Link } from "react-router-dom";
import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
const ManageItems = () => {
  const { data: allAssets } = useGetAssetsQuery(undefined);
  console.log(allAssets);
  return (
    <div className="overflow-x-auto border border-red-500 ms-24 shadow-xl">
      <table className="table">
        {/* head */}
        <thead className="">
          <tr className="bg-[#EE4023] text-xl text-white text-center">
            <th>Item Id</th>
            <th>Owner</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allAssets?.map((allAsset, index) => (
            <tr key={index} className="text-[#271F23]">
              <th className="text-center">
                <h1>{index + 1}</h1>
              </th>
              <td>
                <div className="flex flex-col justify-center items-center">
                  <div className="">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={img} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="avatar flex justify-center items-center">
                  <div className=" mask w-32 h-16 rounded-md">
                    <img src={allAsset.image} alt="" />
                  </div>
                </div>
              </td>
              <td className="text-center truncate overflow-hidden max-w-[200px]">
                {allAsset.title}
              </td>
              <th className="text-center">
                {/* update */}
                <button className=" text-[#EE4023] text-4xl">
                  <Link to="updateitem">
                    <FaRegEdit></FaRegEdit>
                  </Link>
                </button>
              </th>
              <th className="text-center">
                {/* delete */}
                <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                  <MdDeleteSweep></MdDeleteSweep>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
