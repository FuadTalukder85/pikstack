import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PsdCard from "./PsdCard";

const Psd = () => {
  const { data } = useGetAssetsQuery(undefined);
  const psd = data?.filter((item) => item.category === "PSD");
  return (
    <div className="px-28 mt-28">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
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
