import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";

const Pattern = () => {
  const { data } = useGetAssetsQuery(undefined);
  console.log(data);
  return (
    <div className="mt-16">
      <h1>This is Pattern</h1>
    </div>
  );
};

export default Pattern;
