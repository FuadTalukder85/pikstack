import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import img from "../../../image/blogImg/blogImg.png";
import { Link } from "react-router-dom";
import {
  useDeleteAssetsMutation,
  useGetAssetsQuery,
} from "../../../Redux/Features/AssetsApi/AssetsApi";
import Swal from "sweetalert2";
const ManageItems = () => {
  const { data: allAssets, refetch } = useGetAssetsQuery(undefined);
  console.log(allAssets);
  const [deleteAssets] = useDeleteAssetsMutation();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you want to delete this assets?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteAssets(_id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your assets has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting assets:", error);
        }
      }
    });
  };

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
                <button
                  onClick={() => handleDelete(allAsset._id)}
                  className="btn btn-ghost btn-xs text-[#EE4023] text-4xl"
                >
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
