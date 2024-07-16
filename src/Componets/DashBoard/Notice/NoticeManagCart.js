import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';
import { backendApi } from '../../BackendApi/BackendApi';
import { toast } from 'react-toastify';

const NoticeManagCart = ({ singleNotice, index }) => {
    const { title, date, _id, photo, name } = singleNotice;

    const handleRemoveNotice = (id) => {
        const review = window.confirm('আপনি এই  নোটিশ   ডিলিট করতে চাচ্ছেন?');

        if (review) {
            fetch(`${backendApi}/notice/removeNotice/${id}`, {
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
        <div className="rounded-2xl shadow-xl p-1 dark:bg-slate-800">
            <Zoom>
                <div className="flex gap-x-3">
                    <div className="notice-logo">
                        <h2 className='w-[60px] h-[60px] rounded-full mx-auto bg-gradient-to-r from-orange-400 to-pink-400 text-[50px] font-bold flex justify-center items-center text-white'>{index + 1} </h2>
                    </div>
                    <div className="box">
                        <h2 className='font-semibold text-slate-950 dark:text-white text-[20px]'>{title}</h2>
                        <h2 className='flex items-center ga-x-2'><img src={photo} alt="profile" className='w-[30px] h-[30px] rounded-full' /><span className='text-gray-500 dark:text-gray-400 capitalize pl-2'>{name}</span></h2>
                        <h4 className='flex items-center gap-x-2 text-gray-500 dark:text-gray-400 my-2'><AiOutlineFieldTime />{date}</h4>
                        <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 rounded-lg gap-x-2 p-2 text-white  text-[12px] selection:my-2" onClick={() => handleRemoveNotice(_id)}> <FaRegTrashAlt />নোটিশ  ডিলিট করুন </button>
                    </div>
                </div>
            </Zoom>
        </div>
    )
};

export default NoticeManagCart;