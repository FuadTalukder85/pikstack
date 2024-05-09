import { Link } from "react-router-dom";

const PatternCard = ({ pattern }) => {
  return (
    <div>
      <Link to={`/assets/${pattern._id}`}>
        {" "}
        <img src={pattern.image} alt="" />
      </Link>
    </div>
  );
};

export default PatternCard;
