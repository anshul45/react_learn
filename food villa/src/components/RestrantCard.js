import { IMAGE_CDN } from "../contants";
const RestrantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-56 p-2 m-2 overflow-hidden shadow-lg bg-pink-50">
      <img src={IMAGE_CDN + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrantCard;
