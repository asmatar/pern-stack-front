import React, { useState } from 'react'
import RestaurantFinder from '../api/RestaurantFinder'

const AddRestaurant = () => {
    
        const [name, setName] = useState('')
        const [location, setLocation] = useState('')
        const [price, setPrice] = useState('Price range')

        const handleAddRestaurant = async(event) =>{
            event.preventDefault();
                try {
                   const response = await RestaurantFinder.post('/', {name, location, price});
                   console.log(response.data.data.restaurant)
                } catch (error) {
                    console.log(error)
                }
                setName('')
                setLocation('')
                setPrice('Price range')
        }
    return (
        <div className='mb-4'>
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={event =>setName(event.target.value) } type="text" className='form-control my-2' placeholder='name'/>
                    </div>
                    <div className="col ">
                        <input 
                        value={location} onChange={event =>setLocation(event.target.value) }
                        type="text" className='form-control' placeholder='location'/>
                    </div>
                    <div className="col ">
                        <select
                        value={price} onChange={event =>setPrice(event.target.value) }
                        className=' my-2 mr-sm-2 btn btn-outline-primary dropdown-toggle' >
                            <option disabled className='text-danger'> Price range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button 
                    onClick={handleAddRestaurant}
                    type='submit'className='btn btn-outline-primary'> add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
