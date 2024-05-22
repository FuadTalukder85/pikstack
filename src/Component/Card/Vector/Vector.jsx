import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import VectorCard from "./VectorCard";
import { useEffect } from "react";

const Vector = () => {
  const { data, refetch } = useGetAssetsQuery(undefined);
  const vector = data?.filter((item) => item.category === "Vector");
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);
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
