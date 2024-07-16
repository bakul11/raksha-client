import React from 'react';
import { TiArrowRightOutline } from 'react-icons/ti';
import { backendApi } from '../../../BackendApi/BackendApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from '../../../../images/14.png';
import useActiveUser from '../../../../Hooks/useActiveUser';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [user] = useActiveUser();
    const userName = user?.userName;
    const photo = user?.profile;



    const onSubmit = data => {
        const sendData = {
            name: userName,
            photo: photo,
            rating: data?.rating,
            disc: data?.disc
        }
        fetch(`${backendApi}/review/postReview`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                    navigate('/story')
                } else {
                    toast.error(result?.message)
                }
            })
    }
    return (
        <section className='review-add-section overflow-hidden'>
            <div className="container mx-auto px-5 my-24">
                <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5 items-center">
                    <div className="add-review-left">
                        <img src={logo} alt="logo" className='mx-auto h-[400px]' />
                    </div>
                    <div className="add-review-right">
                        <div className="login-form shadow-2xl rounded-xl p-4 mx-auto">
                            <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> আমাদের  <span className='text-rose-500'>সম্পর্কে রিভিউ</span> দিন</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="login-details">
                                    <div className="login-form1 my-4">
                                        <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>রিভিউ লিখুন</h3>
                                        <textarea {...register("disc", { required: true })} type='text' placeholder="আমাদের কোর্স সম্পর্কে লিখুন..." rows='4' className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                        {errors.disc && <span className='text-red-500 pb-2'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                    </div>
                                    <div className="login-form1 my-4">
                                        <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>রেটিং দিন</h3>
                                        <select {...register("rating")} className=' focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full'>
                                            <option value="1">1 Star</option>
                                            <option value="2">2 Star</option>
                                            <option value="3">3 Star</option>
                                            <option value="4">4 Star</option>
                                            <option value="5">5 Star</option>
                                        </select>
                                    </div>
                                    <div className="login-form1 my-4">
                                        <button className='bg-pink-500 hover:bg-red-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>সাবমিট করুন</h2> <TiArrowRightOutline /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddReview;