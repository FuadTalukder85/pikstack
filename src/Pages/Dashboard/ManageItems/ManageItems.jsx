import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import img from "../../../image/blogImg/blogImg.png";
import img2 from "../../../image/banner_img/banner-img01.jpg";
import { Link } from "react-router-dom";
const ManageItems = () => {
  return (
    <div className="overflow-x-auto shadow-xl">
      <table className="table w-[900px]">
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
          {/* row 1 */}
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>1.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
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
          {/* row 2 */}
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
          <tr className="text-[#271F23]">
            <th className="text-center">
              <h1>2.</h1>
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
                  <img src={img2} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
            <td className="text-center">Purple</td>
            <th className="text-center">
              <button className=" text-[#EE4023] text-4xl">
                <FaRegEdit></FaRegEdit>
              </button>
            </th>
            <th className="text-center">
              <button className="btn btn-ghost btn-xs text-[#EE4023] text-4xl">
                <MdDeleteSweep></MdDeleteSweep>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
