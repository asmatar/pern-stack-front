 import React, { createContext, useState } from 'react';


 export const RestaurantContext = createContext();

 export const RestaurantContextProvider = props => {
    const [restaurant, setRestaurant] = useState ([])

    return(
        <RestaurantContext.Provider value={{restaurant: restaurant, setRestaurant}}>
            {props.children}
        </RestaurantContext.Provider>
    )
 }
 