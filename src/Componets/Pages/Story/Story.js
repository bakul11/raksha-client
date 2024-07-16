import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import RubberBand from 'react-reveal/RubberBand'
import StoryCart from './StoryCart';
import loader from '../../../images/loader.gif';

const Story = () => {
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
            <div className="container mx-auto px-4 my-48">
                {
                    review?.length === 0 ?
                        <div className="loader my-32">
                            <h2 className='text-center text-[18px] font-semibold dark:text-white'>দয়া করে অপেক্ষা করুন ডেটা লোড হচ্ছে...</h2>
                            <img src={loader} alt="logo" className='text-center mt-2 mx-auto h-[150px]' />
                        </div>
                        :

                        <div className='story-main'>
                            <RubberBand>
                                <div className="my-24 text-center">
                                    <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের  <span className='text-rose-500'>স্টুডেন্টদের</span> মতামত</h1>
                                    <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>যাদের চাকরি প্রাপ্তিতে আমাদের কোর্স সাহায্য করেছে</h2>
                                </div>
                            </RubberBand>

                            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                                {
                                    review?.filter(item => {
                                        return item?.name?.toLowerCase().includes(search)
                                    }).map((singleReview, index) => <StoryCart singleReview={singleReview} key={index} />)
                                }
                            </div>
                        </div>
                }
            </div>
        </section >
    );
};

export default Story;