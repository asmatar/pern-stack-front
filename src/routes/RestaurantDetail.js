import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import { RestaurantContext } from '../context/restaurantContext';

const RestaurantDetail = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(
        RestaurantContext
      );

      useEffect(() => {
          const fetchData = async () => {
              try {
                   const response = await RestaurantFinder.get(`/${id}`)
                   setSelectedRestaurant(response.data.data.restaurants)
              } catch (error) {
                  console.log(error)
              }
            }
               fetchData()
      }, [])
    return (
        <div>
            { selectedRestaurant &&
            (
                <>
                <div className="mt-3">
                    <Reviews />
                </div>
                <AddReview />
                </>
            )
            }
        </div>
    )
}

export default RestaurantDetail
