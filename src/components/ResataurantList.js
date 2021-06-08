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
    },[])



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

                   {
                   restaurant.map(restaurant => {
                       return (
                           <tr key={restaurant.id}>
                               <td>{restaurant.name}</td>
                               <td>{restaurant.location}</td>
                               <td>{"$".repeat(restaurant.price)}</td>
                               <td>review</td>
                               <td><button className="btn btn-warning"> Update</button></td>
                               <td><button className="btn btn-danger"> Delete</button></td>
                           </tr>
                       )
                   })
                   }
                   {/* <tr>
                       <td>mac donald</td>
                       <td>New York</td>
                       <td>$$</td>
                       <td>rating</td>
                       <td>
                           <button className="btn btn-warning"> Update</button>
                       </td>
                       <td>
                           <button className="btn btn-danger"> Delete</button>
                       </td>
                   </tr>

                   <tr>
                       <td>mac donald</td>
                       <td>New York</td>
                       <td>$$</td>
                       <td>rating</td>
                       <td>
                           <button className="btn btn-warning"> Update</button>
                       </td>
                       <td>
                           <button className="btn btn-danger"> Delete</button>
                       </td>
                   </tr> */}
               </tbody>
            </table>
        </div>
    )
}

export default ResataurantList
