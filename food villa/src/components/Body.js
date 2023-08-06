import RestrantCard from "./RestrantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, allrestaurants) {
  const filterData = allrestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
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

    //optional channing
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //conditional rendering

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchInput, allrestaurants);

            //update data

            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filterrestaurants?.length === 0 ? (
          <h1>No Restrant Match your filter</h1>
        ) : (
          filterrestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestrantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
