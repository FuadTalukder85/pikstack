import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PatternCard from "./PatternCard";

const Pattern = () => {
  const { data } = useGetAssetsQuery(undefined);
  const pattern = data?.filter((item) => item.category === "Pattern");
  return (
    <div className="px-28 mt-28">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry columnsCount={3} gutter="10px">
          {pattern?.map((pattern) => (
            <PatternCard key={pattern._id} pattern={pattern}></PatternCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Pattern;
