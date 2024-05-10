import { Link } from "react-router-dom";

const VectorCard = ({ vector }) => {
  return (
    <div>
      <Link to={`/assets/${vector._id}`}>
        {" "}
        <img src={vector.image} alt="" />
      </Link>
    </div>
  );
};

export default VectorCard;
