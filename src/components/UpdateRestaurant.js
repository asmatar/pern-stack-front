import React, { useState } from 'react';
import { useParams } from 'react-router';

const UpdateRestaurant = (props) => {
    
    const {id} = useParams()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('Price range')

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' className='form-control' 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' className='form-control'
                      value={location}
                      onChange={event => setLocation(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id='price' className='form-control' 
                      value={price}
                      onChange={event => setPrice(event.target.value)}
                    />
                </div>

                <button className='btn btn-primary'> enregistrer</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant
