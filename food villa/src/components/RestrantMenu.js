import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { image } from "../contants";
import Shimmer from "./Shimmer";
const RestrantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id
    );
    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    setTest(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards[2].card.info
    );
  }

  return !restaurant && !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={image + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage} stars</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantMenu).map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestrantMenu;
