import RestrantCard from "./RestrantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser } = useContext(UserContext);

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

  const isOnline = useOnline;

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }
  //conditional rendering

  if (!allrestaurants) return null;

  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />
        <button
          className="p-1 m-2 bg-purple-800  text-white rounded-md"
          onClick={() => {
            //filter data
            const data = filterData(searchInput, allrestaurants);

            //update data

            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: `${e.target.value}@gmail.com`,
            })
          }
        ></input>
      </div>

      <div className="flex flex-wrap px-3 justify-between">
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
