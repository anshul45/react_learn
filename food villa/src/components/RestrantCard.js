import { image } from "../contants";
const RestrantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={image + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrantCard;
