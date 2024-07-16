import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom'


const StoryCart = ({ singleReview }) => {
    const { name, photo, rating, disc } = singleReview;
    const [show, setShow] = useState(false)

    return (
        <Zoom>


            <div className='feedback-items relative shadow-xl hover:cursor-pointer  rounded-xl dark:bg-slate-800 dark:rounded-lg transition duration-700 ease-in-out p-5 hover:bg-slate-400 dark:hover:bg-slate-900'>
                <img src={photo} alt="review photo" className='h-16 w-16 rounded-full mx-auto' />

                <h2 className='text-center text-[#1F2937] dark:text-white  font-semibold dark:font-medium pt-2 pb-1 capitalize'>{name}</h2>
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
                <h2 className='text-center text-[#1F2937] dark:text-gray-400'>
                    {
                        show ? disc.slice(0, 220) : disc
                    }
                    <button onClick={() => setShow(!show)} className='text-rose-500 ml-1'>{show ? 'Show less' : 'Read More'}</button>
                </h2>
            </div >
        </Zoom>
    );
};

export default StoryCart;