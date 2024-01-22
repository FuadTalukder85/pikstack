import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token);

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    // Send data to imgbb
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { category, title, description } = data;
          const addData = { category, title, description, image: imgUrl };
          console.log(addData);

          // Send data to backend
          fetch("http://localhost:5100/additem", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(addData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });

    // console.log(data);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-4xl font-bold text-[#EE4023] pb-11">
            Add an item
          </h1>
        </div>
        <div className="card shrink-0 w-full shadow-xl border border-[#EE4023] rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <div className="flex justify-end">
                <select
                  defaultValue="Category"
                  className="select  bg-[#EE4023] text-white tracking-widest font-bold"
                  {...register("category", { required: true })}
                >
                  <option disabled>Category</option>
                  <option>Photo</option>
                  <option>Vector</option>
                  <option>Pattern</option>
                  <option>Illustrator</option>
                  <option>PSD</option>
                </select>
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
                {...register("title", { required: true })}
                required
              />
              {errors.title?.type === "required" && (
                <p role="alert" className="mt-1 text-[#F1696A]">
                  Title is required
                </p>
              )}
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
                {...register("description", { required: true })}
                required
              />
              {errors.description?.type === "required" && (
                <p role="alert" className="mt-1 text-[#F1696A]">
                  Description is required
                </p>
              )}
            </div>
            <div>
              <input
                type="file"
                className="text-[#EE4023] font-bold pt-7"
                {...register("image", { required: true })}
              />
            </div>
            <div className="form-control w-24 mt-6">
              <button className="bg-[#EE4023] text-white tracking-widest font-bold py-1 rounded">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
