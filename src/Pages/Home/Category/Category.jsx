import { useEffect, useState } from "react";
const Category = () => {
  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, []);
  return (
    <div className="grid grid-cols-5 justify-items-center gap-10 mt-11 mb-28 ps-28 pe-28">
      {allcategory.map((category) => (
        <div className="card w-76 bg-[#271F23] shadow-xl" key={category.id}>
          <figure>
            <img src={category.imageUrl} alt="Shoes" />
          </figure>
          <div className="p-3">
            <div className="card-actions justify-start text-white">
              <h3 className="text-2xl font-bold text-white">
                {category.category}
              </h3>
              <h5>{category.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
