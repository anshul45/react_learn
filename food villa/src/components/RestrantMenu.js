import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestrantMenu = () => {
  const { id } = useParams();

  const { restaurant, restaurantMenu } = useRestaurant(id);

  return !restaurant && !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMAGE_CDN + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage} stars</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantMenu).map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrantMenu;
