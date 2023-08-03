import { restaurantList } from "../contants";

import RestrantCard from "./RestrantCard";





const Body = () => {
    return(
            <div className='restaurant-list'>
                  {
                    restaurantList.map((restaurant) =>{
                            return <RestrantCard key={restaurant.info.resId} {...restaurant.info} />;
                    })
                  }  
                   
            </div>
    )
}

export default Body;