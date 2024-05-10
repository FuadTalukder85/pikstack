import { Link } from "react-router-dom";

const PsdCard = ({ psd }) => {
  return (
    <div>
      <Link to={`/assets/${psd._id}`}>
        {" "}
        <img src={psd.image} alt="" />
      </Link>
    </div>
  );
};

export default PsdCard;
