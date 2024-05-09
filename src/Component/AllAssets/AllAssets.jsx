import { useGetAssetsQuery } from "../../Redux/Features/AssetsApi/AssetsApi";
import Pattern from "../Card/Pattern/Pattern";

const AllAssets = () => {
  const { data } = useGetAssetsQuery(undefined);
  const pattern = data?.filter((item) => item.category === "Pattern");
  console.log(pattern);
  return (
    <div>
      <Pattern patterns={pattern}></Pattern>
    </div>
  );
};

export default AllAssets;
