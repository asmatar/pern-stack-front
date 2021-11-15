import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import RestaurantFinder from '../api/RestaurantFinder';

const UpdateRestaurant = (props) => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('Price range')
    const history = useHistory()
    
    const handleSubmit = async (event) => {
            event.preventDefault()
            try {
                const updateRestaurant = await RestaurantFinder.put(`/${id}`, {name, location, price});
                console.log(updateRestaurant)
             } catch (error) {
                 console.log(error)
             }
             history.push('/')
    }
    
    useEffect(() => {
       const fetchData = async() => {
           const response = await RestaurantFinder.get(`/${id}`)
           setName(response.data.data.restaurants.name)
           setLocation(response.data.data.restaurants.location)
           setPrice(response.data.data.restaurants.price)
       }
       fetchData()
    }, [])


    return (
        <div>

            <form action="">
                <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' className='form-control' 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className="form-group my-2">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' className='form-control'
                      value={location}
                      onChange={event => setLocation(event.target.value)}
                    />
                </div>

                <div className="form-group my-2">
                    <label htmlFor="price">Price</label>
                    <input type="number" id='price' className='form-control' 
                      value={price}
                      onChange={event => setPrice(event.target.value)}
                    />
                </div>

                <button className='btn btn-outline-primary my-1 '
                onClick={handleSubmit}
                > enregistrer</button>
                <button onClick={()=>history.push('/')} className='btn btn-outline-success my-1 mx-1'> Retour</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant
