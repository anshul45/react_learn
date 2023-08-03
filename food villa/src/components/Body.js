import { restaurantList } from "../contants";

import RestrantCard from "./RestrantCard";

import { useState } from "react";

function filterData(searchInput) {
  const filterData = restaurantList.filter((restaurant) =>
  restaurant.info.name.toLowerCase().includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("KFC");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput( e.target.value.toLowerCase())}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter data
            const data = filterData(searchInput);

            //update data

            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants?.map((restaurant) => {
          return (
            <RestrantCard key={restaurant.info.resId} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
