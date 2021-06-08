import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../api/RestaurantFinder';
import { RestaurantContext } from '../context/restaurantContext';

const ResataurantList = (props) => {
    const {restaurant, setRestaurant} = useContext(RestaurantContext)
    useEffect( ()=> {
        const fetchData = async() => {
            try {
                const response = await RestaurantFinder.get('/');
                setRestaurant(response.data.data.restaurants)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    },[restaurant])

    const handleDeleteRestaurant = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            console.log(response.data.data.restaurant)
         } catch (error) {
             console.log(error)
         }
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
                       return (
                           <tr key={restaurant.id}>
                               <td>{restaurant.name}</td>
                               <td>{restaurant.location}</td>
                               <td>{"$".repeat(restaurant.price)}</td>
                               <td>review</td>
                               <td><button className="btn btn-warning"> Update</button></td>
                               <td><button
                               onClick={() => handleDeleteRestaurant(restaurant.id)}
                               className="btn btn-danger"> Delete</button></td>
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
