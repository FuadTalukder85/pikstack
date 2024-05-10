import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import VectorCard from "./VectorCard";

const Vector = () => {
  const { data } = useGetAssetsQuery(undefined);
  const vector = data?.filter((item) => item.category === "Vector");
  return (
    <div className="px-28 mt-28">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px">
          {vector?.map((vector) => (
            <VectorCard key={vector._id} vector={vector}></VectorCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Vector;
