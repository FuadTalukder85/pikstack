import { useGetAssetsQuery } from "../../../Redux/Features/AssetsApi/AssetsApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotosCard from "./PotosCard";
import { useEffect } from "react";

const Photos = () => {
  const { data, refetch } = useGetAssetsQuery(undefined);
  const photos = data?.filter((item) => item.category === "Photo");
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
          {photos?.map((photo) => (
            <PhotosCard key={photo._id} photo={photo}></PhotosCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Photos;
