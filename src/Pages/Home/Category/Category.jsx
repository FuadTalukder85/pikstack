import { useEffect, useState } from "react";
const Category = () => {
  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);
  return (
    <div className="grid grid-cols-5 justify-items-center gap-10 mt-11 mb-11 bg-white ps-28 pe-28">
      {allcategory.map((category) => (
        <div className="card w-76 bg-base-100 shadow-xl" key={category.id}>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {category.title}!<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{category.category}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
