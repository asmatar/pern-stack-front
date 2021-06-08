import React, { useEffect } from 'react';
import RestaurantFinder from '../api/RestaurantFinder';

const ResataurantList = () => {

    useEffect( ()=> {
        const fetchData = async() => {
            try {
                const response = await RestaurantFinder.get('/');
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    },[])



    return (
        <div className='list-group'>
            <table class="table table-hover table-dark">
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
                   </tr>
               </tbody>
            </table>
        </div>
    )
}

export default ResataurantList
