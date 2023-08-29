import { IMAGE_CDN } from "../contants";
const FoodItem = ({ name, description, price, imageId }) => {
  return (
    <div className="w-56 p-2 m-2 overflow-hidden shadow-lg bg-pink-50">
      <img src={IMAGE_CDN + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {Number(price) / 100}</h4>
    </div>
  );
};

export default FoodItem;
