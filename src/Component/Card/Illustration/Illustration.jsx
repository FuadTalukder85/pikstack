import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import IllustrationCard from "./IllustrationCard";

const Illustration = () => {
  const { data } = useGetAssetsQuery(undefined);
  const illustration = data?.filter((item) => item.category === "Illustrator");
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
