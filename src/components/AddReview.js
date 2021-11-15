import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const AddReview = () => {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(id);
    
    const [name,setName] = useState('')
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('rating')

        const handleSubmitReview = async (event) => {
            event.preventDefault();
            try {
               const response = await RestaurantFinder.post(`/restaurants/${id}/addReview`, {name, review, rating});
               history.push("/");
               history.push(location.pathname);
            } catch (error) {
                console.log(error)
            }
            setName('')
            setReview('')
            setRating('')
        }
  
    
    return (
        <div className='mb-2'>
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='name' className='form-control' 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group col-4 my-2">
                        <label htmlFor="rating"></label>
                        <select name="" id="rating" className=' mr-sm-2 btn btn-outline-primary dropdown-toggle '
                        value={rating}
                        onChange={event => setRating(event.target.value)}>
                            <option disabled className='text-danger'>rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="review"></label>
                    <textarea id="review" className='form-control'
                    value={review}
                    onChange={event => setReview(event.target.value)}
                    ></textarea>
                </div>
                <button className='btn btn-outline-primary' type='submit'
                onClick={handleSubmitReview}> submit</button>
                <button onClick={()=>history.push('/')}className='btn btn-outline-success my-2 mx-1'> Retour</button>
            </form>
        </div>
    )
}

export default AddReview
