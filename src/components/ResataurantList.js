import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RestaurantFinder from '../api/RestaurantFinder';
import { RestaurantContext } from '../context/restaurantContext';
import StarRating from './StarRating';

const ResataurantList = (props) => {
    let history = useHistory();
    
    const handleUpdateRestaurant = ( id,event) => {
        event.stopPropagation();
        history.push(`/restaurants/${id}/update`)
    }

    const {restaurant, setRestaurant} = useContext(RestaurantContext)

    useEffect( ()=> {
        const fetchData = async() => {
            try {
                const response = await RestaurantFinder.get('/restaurants');
                setRestaurant(response.data.data.restaurants)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    },[restaurant])

    const handleDeleteRestaurant = async (id, event) => {
        event.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            console.log(response)
         } catch (error) {
             console.log(error)
         }
    }
    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`)
    }
    const renderRating = (restaurant) => {
console.log('renderrating',restaurant)
        if (!restaurant.count) {
            return <span className="text-warning">0 review</span>
        }
        return <> <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">{restaurant.count}</span>
        </>
    }
    
    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
               <thead>
                   <tr className="bg-primary">
                       <th scope='col'>Restaurant</th>
                       <th scope='col'>Location</th>
                       <th scope='col'>Price</th>
                       <th scope='col'>rating</th>
                       <th scope='col'>Edit</th>
                       <th scope='col'>Delete</th>
                   </tr>
               </thead>
               <tbody>

                   { restaurant &&
                   restaurant.map(restaurant => {
                    //    console.log('je suis dans le restau',restaurant.average_rating)
                       return (
                           <tr key={restaurant.id} onClick={() => handleRestaurantSelect(restaurant.id)}>
                               <td>{restaurant.name}</td>
                               <td>{restaurant.location}</td>
                               <td>{"$".repeat(restaurant.price)}</td>
                               <td>{renderRating(restaurant)}</td>
                               <td>
                                   <button 
                                   onClick={(event) => handleUpdateRestaurant(restaurant.id, event)}
                                   className="btn btn-outline-warning"> 
                                   Update
                                   </button>
                                   </td>
                               <td><button
                               onClick={(event) => handleDeleteRestaurant(restaurant.id, event)}
                               className="btn btn-outline-danger"> Delete</button></td>
                           </tr>
                       )
                   })
                   }
               </tbody>
            </table>
        </div>
    )
}

export default ResataurantList
