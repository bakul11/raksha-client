import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import { BsSearch } from 'react-icons/bs'
import ReviewCart from './ReviewCart';

const Review = () => {
    const [review, setReview] = useState([])
    const [search, setSearch] = useState('')

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/review/getAllReview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review])






    return (
        <section className='review-section overflow-hidden'>
            <div className="container mx-auto px-4">
                {
                    review?.length === 0 ?
                        <>
                            <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'> এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>

                        </>
                        :

                        <div className='my-24'>
                            <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> সমস্ত  <span className='text-rose-500'>রিভিউ</span> তালিকাঃ</h1>
                            {/* Search Box  */}
                            <div className="search-box relative flex items-center my-12">
                                <input type="text" placeholder='সার্চ করুন' className='rounded-sm p-1 bg-slate-400 dark:bg-slate-700 relative placeholder-slate-950 dark:placeholder-gray-400' onChange={(e) => setSearch(e.target.value)} />
                                <BsSearch className='absolute left-[150px] text-slate-700 dark:text-gray-400' />
                            </div>

                            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                                {
                                    review?.filter(item => {
                                        return item?.name?.toLowerCase().includes(search)
                                    }).map((singleReview, index) => <ReviewCart singleReview={singleReview} key={index} />)
                                }
                            </div>
                        </div>
                }
            </div>
        </section >
    );
};

export default Review;