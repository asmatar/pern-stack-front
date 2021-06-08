import React, { useState } from 'react'

const AddReview = () => {

    const [name,setName] = useState('')
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')

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
                    <div className="form-group col-4">
                        <label htmlFor="rating">rating</label>
                        <select name="" id="rating" className='custom-select'
                        value={rating}
                        onChange={event => setRating(event.target.value)}>
                            <option disabled>rating</option>
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
                <button className='btn btn-primary'> submit</button>
            </form>
        </div>
    )
}

export default AddReview
