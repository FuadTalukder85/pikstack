const UpdateItem = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-4xl font-bold text-[#EE4023] pb-11">
            Update item
          </h1>
        </div>
        <div className="card shrink-0 w-full shadow-xl border border-[#EE4023] rounded-lg">
          <form className="card-body">
            <div className="form-control">
              <div className="flex justify-end">
                <div className="">
                  <select className="select w-full max-w-xs bg-[#EE4023] text-white tracking-widest font-bold">
                    <option disabled selected>
                      Category
                    </option>
                    <option>Photo</option>
                    <option>Vector</option>
                    <option>Patternd</option>
                    <option>Illustrator</option>
                    <option>PSD</option>
                  </select>
                </div>
              </div>
            </div>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#271F23] font-bold">
                  Title*
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter title here"
                className="input w-[600px] bg-white input-bordered"
                required
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#271F23] font-bold">
                  Description*
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter description here"
                className="input bg-white input-bordered"
                required
              />
            </div>
            <div>
              <input type="file" className="text-[#EE4023] font-bold pt-7" />
            </div>
            <div className="form-control w-24 mt-6">
              <button className="bg-[#EE4023] text-white tracking-widest font-bold rounded py-1">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
