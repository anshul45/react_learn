import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestrantMenu = () => {
  const { id } = useParams();

  const { restaurant, restaurantMenu } = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItems = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant && !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="flex gap-7">
      <div>
        <h1>restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img
          className="w-25 h-25"
          src={IMAGE_CDN + restaurant.cloudinaryImageId}
        />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage} stars</h3>
      </div>

      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantMenu).map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItems(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrantMenu;
