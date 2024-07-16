import React from 'react';
import { FaQuoteLeft, FaRegTrashAlt } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Zoom } from 'react-reveal';
import { toast } from 'react-toastify';
import { backendApi } from '../../BackendApi/BackendApi';



const ReviewCart = ({ singleReview }) => {
    const { name, photo, rating, disc,_id} = singleReview;

    //Remove Single review
    const handleRemoveReview = (id) => {
        const review = window.confirm('আপনি এই  রিভিউ  ডিলিট করতে চাচ্ছেন?');

        if (review) {
            fetch(`${backendApi}/review/removeReview/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        toast.success(result?.message)
                    } else {
                        if (result?.error) {
                            toast.error(result?.message)
                        }
                    }
                })
        }
    }


    return (
        <div className='feedback-items relative  hover:cursor-pointer  rounded-lg dark:bg-slate-800 dark:rounded-lg transition duration-700 ease-in-out p-5 hover:bg-slate-400 dark:hover:bg-slate-900'>
            <FaQuoteLeft className='text-2xl text-[#1F2937] dark:text-gray-400 absolute top-2 left-2' />
            <img src={photo} alt="review photo" className='h-16 w-16 rounded-full mx-auto' />

            <h2 className='text-center text-[#1F2937] dark:text-white  font-semibold dark:font-medium pt-2 pb-1'>{name}</h2>
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
            <h2 className='text-center text-[#1F2937] dark:text-gray-400'>{disc}</h2>
            <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 rounded-lg gap-x-2 p-2 text-white justify-center text-[12px] mx-auto my-2" onClick={() => handleRemoveReview(_id)}> <FaRegTrashAlt />রিভিউ ডিলিট করুন </button>
        </div >
    );
};

export default ReviewCart;