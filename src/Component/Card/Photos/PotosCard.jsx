import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const PhotosCard = ({ photo }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <button onClick={() => handleOpenModal(photo.image)}>
        <img src={photo.image} alt="photo Thumbnail" />
      </button>
      {isModalOpen && (
        <dialog
          id="my_modal_2"
          open
          className="modal fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="modal-box max-w-screen-lg w-full bg-white p-10 relative">
            {selectedImage && (
              <div className="flex flex-col lg:flex-row gap-16 items-center mx-auto mt-10">
                <img
                  className="w-full lg:w-1/2"
                  src={selectedImage}
                  alt="photo"
                />
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-2xl font-semibold text-[#271F23] mb-4">
                    {photo.title}
                  </p>
                  <p className="font-semibold text-[#271F23]">
                    {photo.description}
                  </p>
                  <a href={photo.image} download="image.jpg">
                    <button className="mt-5 flex gap-3 items-center bg-[#EE4023] hover:bg-[#d14343] transition-all text-white font-semibold text-lg tracking-wider rounded-md px-16 py-3">
                      Download <FaDownload />
                    </button>
                  </a>
                </div>
              </div>
            )}
            <button
              type="button"
              className="absolute top-5 right-5 text-lg"
              onClick={handleCloseModal}
            >
              <IoClose />
            </button>
          </div>
          <div
            className="modal-backdrop fixed inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
        </dialog>
      )}
    </div>
  );
};

export default PhotosCard;
