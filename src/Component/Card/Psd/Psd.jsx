import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PsdCard from "./PsdCard";
import { useEffect } from "react";

const Psd = () => {
  const { data, refetch } = useGetAssetsQuery(undefined);
  const psd = data?.filter((item) => item.category === "PSD");
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(interval);
  }, [refetch]);
  return (
    <div className="p-4 md:p-0 md:px-28 md:mt-28">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px">
          {psd?.map((psd) => (
            <PsdCard key={psd._id} psd={psd}></PsdCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Psd;
