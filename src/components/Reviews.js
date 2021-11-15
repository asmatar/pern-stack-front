// import { TrashIcon } from '@heroicons/react/solid'
import React from 'react';
// import { useParams } from 'react-router';
import RestaurantFinder from '../api/RestaurantFinder';
import StarRating from './StarRating';
const Reviews = ({reviews}) => {
    // const {id} = useParams()
    console.log(reviews)
    const removeReview = async (id,event) => {
        console.log(id)
        event.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/review/${id}`);
            console.log(response)
         } catch (error) {
             console.log(error)
         }
    }
    return (
        <div className='row row-cols-3 mb-2'>
        {
            reviews.reviews.map((review) => {
                return(
                    <div key={review.id} className=" card text-white bg-primary mb-2 mx-1" style={{maxWidth: '30%'}}>
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.name}</span>
                            <span><StarRating rating={review.rating} /></span>
                        </div>
                        {console.log(reviews.restaurants.id)}
                        <div className="card-body d-flex justify-content-between">
                            <p className="card-text"> {review.review} </p>
                            {/* <TrashIcon className='w-3'/> */}
                            <i onClick={(event) =>removeReview(review.id, event)}class="fa fa-trash"></i>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Reviews
