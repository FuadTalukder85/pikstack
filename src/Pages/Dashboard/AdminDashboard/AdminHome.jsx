import { MdProductionQuantityLimits } from "react-icons/md";
import adminImg from "../../../image/profileImg/profile.jpg";
const AdminHome = () => {
  return (
    <div className="px-11">
      <div>
        <div className="md:flex items-center justify-between text-3xl font-semibold">
          <h1 className="text-[#271F23]">
            Welcome back <span className="text-[#EE4023] font-bold">Fuad</span>
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <div>
              <img src={adminImg} className="w-14 rounded-lg" alt="" />
            </div>
            <div className="text-[#EE4023] font-semibold text-xl">
              <h3>Fuad Talukder</h3>
              <h3>Admin</h3>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between px-16 w-[1100px]">
          {/* Category */}
          <div className="md:grid grid-cols-2 gap-2">
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Photos</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Vector</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Pattern</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">
                  Total Illustration
                </h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total PSD</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="md:grid grid-cols-2 gap-2">
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Items</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Download</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">
                  Total Contributor
                </h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">571</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdProductionQuantityLimits className="text-[#EE4023] text-4xl"></MdProductionQuantityLimits>
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total User</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
