import React, { useEffect, useState } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { backendApi } from '../../../BackendApi/BackendApi';
import FeedBackLoadding from './FeedBackLoadding';







const Feedback = () => {
    const [review, setReview] = useState([]);
    const [loadding, setLoadding] = useState(false);


    //load user api 
    useEffect(() => {
        setLoadding(true)
        fetch(`${backendApi}/review/getAllReview`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
                setLoadding(false)
            })
            .catch(err => {
                setLoadding(true)
            })
    }, [])


    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }
        ]
    };


    return (
        <section className='feedback-section overflow-hidden lg:px-24'>
            <div className='container mx-auto '>
                <div className="feedback-title text-center my-24">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের  <span className='text-rose-500'>স্টুডেন্টদের</span> মতামত</h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>যাদের চাকরি প্রাপ্তিতে আমাদের কোর্স সাহায্য করেছে</h2>
                    </RubberBand>
                </div>
                {/* setLoadding */}
                <div className="review-main  ">
                    {
                        loadding ?
                            <div className="setloadding">
                                <FeedBackLoadding />
                            </div>
                            :
                            <Slider {...settings} className='mb-24'>
                                {
                                    review && review?.map((review, index) => {
                                        const { name, photo, rating, disc } = review;
                                        return (
                                            <div key={index} className='feedback-items relative hover:cursor-pointer rounded-sm dark:rounded-xl transition duration-700 ease-in-out  hover:bg-slate-400 dark:hover:bg-slate-700'>
                                                <FaQuoteLeft className='text-2xl text-[#1F2937] dark:text-gray-400 absolute top-2 left-2' />
                                                <img src={photo} alt="review photo" className='h-16 w-16 rounded-full mx-auto' />

                                                <h2 className='text-center text-[#1F2937] dark:text-white  font-semibold dark:font-medium capitalize pt-2 pb-1'>{name}</h2>
                                                <h3 className='text-center text-[#1F2937] dark:text-gray-400 font-[400]'>স্টুডেন্ট</h3>
                                                <h3 className='text-center py-2'>
                                                    {
                                                        rating === 1 ?
                                                            <>
                                                                <div className="flex items-center justify-center">
                                                                    <AiFillStar className='text-yellow-600' />
                                                                    <AiOutlineStar className='text-yellow-600' />
                                                                    <AiOutlineStar className='text-yellow-600' />
                                                                    <AiOutlineStar className='text-yellow-600' />
                                                                    <AiOutlineStar className='text-yellow-600' />
                                                                </div>
                                                            </> : rating === 2 ?
                                                                <>
                                                                    <div className="flex items-center justify-center">
                                                                        <AiFillStar className='text-yellow-600' />
                                                                        <AiFillStar className='text-yellow-600' />
                                                                        <AiOutlineStar className='text-yellow-600' />
                                                                        <AiOutlineStar className='text-yellow-600' />
                                                                        <AiOutlineStar className='text-yellow-600' />

                                                                    </div>
                                                                </> : rating === 3 ?
                                                                    <>
                                                                        <div className="flex items-center justify-center">
                                                                            <AiFillStar className='text-yellow-600' />
                                                                            <AiFillStar className='text-yellow-600' />
                                                                            <AiFillStar className='text-yellow-600' />
                                                                            <AiOutlineStar className='text-yellow-600' />
                                                                            <AiOutlineStar className='text-yellow-600' />
                                                                        </div>
                                                                    </> : rating === 4 ?
                                                                        <>
                                                                            <div className="flex items-center justify-center">
                                                                                <AiFillStar className='text-yellow-600' />
                                                                                <AiFillStar className='text-yellow-600' />
                                                                                <AiFillStar className='text-yellow-600' />
                                                                                <AiFillStar className='text-yellow-600' />
                                                                                <AiOutlineStar className='text-yellow-600' />

                                                                            </div>
                                                                        </> : rating === 5 ?
                                                                            <>
                                                                                <div className="flex items-center justify-center">
                                                                                    <AiFillStar className='text-yellow-600' />
                                                                                    <AiFillStar className='text-yellow-600' />
                                                                                    <AiFillStar className='text-yellow-600' />
                                                                                    <AiFillStar className='text-yellow-600' />
                                                                                    <AiFillStar className='text-yellow-600' />
                                                                                </div>
                                                                            </> : ''
                                                    }
                                                </h3>
                                                <h2 className='text-center text-[#1F2937] dark:text-gray-400'>{disc?.length >= 100 ? <span>{disc.slice(0, 200)} <abbr title={disc} className='text-[20px]'>....</abbr></span> : disc}</h2>

                                            </div >

                                        )


                                    })
                                }
                            </Slider>
                    }
                </div>
            </div>
        </section >
    );
};

export default Feedback;