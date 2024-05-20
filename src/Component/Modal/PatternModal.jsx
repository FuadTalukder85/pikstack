import React from "react";

const PatternModal = () => {
  return (
    <div>
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

export default PatternModal;
