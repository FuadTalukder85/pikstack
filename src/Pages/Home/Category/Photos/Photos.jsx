import { useEffect } from "react";
import { useState } from "react";

const Photos = () => {
  const [categoryImg, setCategoryImg] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategoryImg(data));
  }, []);
  //   console.log(categoryImg);
  return (
    <div className="grid grid-cols-5 justify-items-center gap-10">
      {categoryImg.map((ctgImg) => (
        //   console.log(ctgImg),
        <div className="card w-76 bg-base-100 shadow-xl" key={ctgImg.id}>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {ctgImg.title}!<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div> */}
      <button className="btn btn-primary">View more</button>
    </div>
  );
};

export default Photos;
