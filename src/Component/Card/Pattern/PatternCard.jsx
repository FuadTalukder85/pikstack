import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatternCard = ({ pattern }) => {
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
    <div>
      <button onClick={() => handleOpenModal(pattern.image)}>
        <img src={pattern.image} alt="Pattern Thumbnail" />
      </button>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            {selectedImage && (
              <Link to={`/assets/${pattern._id}`}>
                <img src={selectedImage} alt="Pattern" />
              </Link>
            )}
            <p>{pattern.title}</p>
          </div>
          <form
            method="dialog"
            className="modal-backdrop"
            onClick={handleCloseModal}
          >
            <button type="button">Close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default PatternCard;
