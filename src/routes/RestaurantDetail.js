import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { RestaurantContext } from '../context/restaurantContext';

const RestaurantDetail = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(
        RestaurantContext
      );

      useEffect(() => {
          const fetchData = async () => {
              try {
                   const response = await RestaurantFinder.get(`/restaurants/${id}`)
                   setSelectedRestaurant(response.data.data)
                   console.log(setSelectedRestaurant)
              } catch (error) {
                  console.log(error)
              }
            }
               fetchData()
      }, [selectedRestaurant])

      return (
          <div>
            { selectedRestaurant &&
            (
                <>
                <h1 className='text-center'>{selectedRestaurant.restaurants.name}</h1>
                <div className="text-center">
                    <StarRating rating={selectedRestaurant.restaurants.average_rating} />
                </div>
                <div className="mt-3">
                   { console.log('selected ',selectedRestaurant)}
                    <Reviews reviews={selectedRestaurant} />
                    <span className='text-warning ml-1'>
                        {/* {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : '(0)'} */}
                        {/* {selectedRestaurant.restaurants.count
                ? `(${selectedRestaurant.restaurants.count})`
                : "(0)"} */}
                    </span>
                </div>
                <AddReview />
                </>
            )
        }
        </div>
        
    )
}

export default RestaurantDetail
