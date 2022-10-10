import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const reviews = useLoaderData();
    const smallReview = reviews.slice(0, 3)
    console.log(smallReview)
    return (
        <div className='w-100 h-max mt-10 mb-4 mx-4'>
            <h2 className='text-4xl font-semibold font-serif text-amber-700'>Personal Product Review</h2>
            <div className='md:flex md:mx-24 mt-12'>
                <div>
                    <img className='w-3/4' src="headphone.png" alt="" />
                </div>
                <div className='mt-8 md:mt-48'>
                    <h4 className='text-4xl text-green-600 font-serif'>MX Headphone</h4>
                    <p className='font-serif'>Quality music. Best Experience with bit-box and high base song.Smooth sound quality.</p>
                    <button className='px-8 py-2 rounded bg-indigo-700 text-white fond-bold'>Explore Now </button>
                </div>
            </div>
            <h3 className='text-3xl text-green-600'>Reviews</h3>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    smallReview.map(review => <div className='border-2 border-green-600 p-4'>
                        <div>
                            <h4 className='text-lg font-mono font-semibold'>{review.name}</h4>
                            <p>{review.review
                            }</p>
                            <h5 className='font-semibold text-green-600'>Rating:{review.ratings}</h5>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;