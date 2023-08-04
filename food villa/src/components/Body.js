import { restaurantList } from "../contants";

import RestrantCard from "./RestrantCard";

import { useEffect, useState } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //optional channing
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter data
            const data = filterData(searchInput, restaurants);

            //update data

            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants?.map((restaurant) => {
          return <RestrantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
