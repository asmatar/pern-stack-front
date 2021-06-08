import React from 'react'

const ResataurantList = () => {
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
