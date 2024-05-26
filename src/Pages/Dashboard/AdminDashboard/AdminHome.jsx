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
        <div className="md:flex justify-between md:px-16 md:w-[1100px]">
          {/* Category */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Photos</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">1</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Vector</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">2</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Pattern</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">3</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">
                  Total Illustration
                </h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">4</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total PSD</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">5</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Items</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">6</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total Download</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">7</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">
                  Total Contributor
                </h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">8</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <h3 className="text-[#271F23] font-semibold">Total User</h3>
                <h3 className="text-[#271F23] text-3xl font-semibold">9</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
