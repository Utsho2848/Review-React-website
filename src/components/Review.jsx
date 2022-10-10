import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const reviews = useLoaderData();
    return (
        <>
            <h2 className='text-4xl my-4 text-green-600'>All Reviews</h2>
            <div className='mx-4 md:mx-16 grid md:grid-cols-3 gap-3'>

                {
                    reviews.map(review => <div className='border-2 border-green-600 p-4'>
                        <h4 className='text-lg font-mono font-semibold'>{review.name}</h4>
                        <p>{review.review}</p>
                        <h5 className='font-semibold text-green-600'>Rating:{review.ratings}</h5>
                    </div>)
                }
            </div>
        </>
    );
};

export default Review;