import { useState, useEffect } from "react";
import { FETCH_MENU } from "../contants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  //get data from api

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU + id);
    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards[2].card.info
    );
  }
  return { restaurant, restaurantMenu };
};

export default useRestaurant;
