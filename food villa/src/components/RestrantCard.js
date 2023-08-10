import { IMAGE_CDN } from "../contants";
const RestrantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMAGE_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrantCard;
