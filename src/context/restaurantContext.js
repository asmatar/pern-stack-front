 import React, { createContext, useState } from 'react';


 export const RestaurantContext = createContext();

 export const RestaurantContextProvider = props => {
    const [restaurant, setRestaurant] = useState ([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)


    return(
        <RestaurantContext.Provider value={{restaurant: restaurant, setRestaurant
        , selectedRestaurant, setSelectedRestaurant}}>
            {props.children}
        </RestaurantContext.Provider>
    )
 }
 