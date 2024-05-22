import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import IllustrationCard from "./IllustrationCard";
import { useEffect } from "react";

const Illustration = () => {
  const { data, refetch } = useGetAssetsQuery(undefined);
  const illustration = data?.filter((item) => item.category === "Illustrator");
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
          {illustration?.map((illustration) => (
            <IllustrationCard
              key={illustration._id}
              illustration={illustration}
            ></IllustrationCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Illustration;
