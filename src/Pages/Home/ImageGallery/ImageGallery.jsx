import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const ImageGallery = () => {
  const [galleryImg, setGalleryImg] = useState([]);
  fetch("imageGallery.json")
    .then((res) => res.json())
    .then((data) => setGalleryImg(data));
  //   const images = [
  //     "https://picsum.photos/200/300?image=1050",
  //     "https://picsum.photos/300/300?image=206",
  //     "https://picsum.photos/300/300?image=206",
  //     "https://picsum.photos/200/300?image=1050",
  //     "https://picsum.photos/300/300?image=206",
  //     "https://picsum.photos/200/300?image=1050",
  //     "https://picsum.photos/300/300?image=206",
  //     "https://picsum.photos/200/300?image=1050",
  //     "https://picsum.photos/200/300?image=1050",
  //   ];
  return (
    <div className="mt-28">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }}>
        <Masonry columnsCount={3} gutter="10px">
          {galleryImg.map((image, i) => (
            <img
              key={i}
              src={image.url}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
