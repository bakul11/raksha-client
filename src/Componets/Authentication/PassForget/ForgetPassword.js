import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useForm } from 'react-hook-form';
import { TiArrowRightOutline } from 'react-icons/ti';
import { backendApi } from '../../BackendApi/BackendApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const id = localStorage.getItem('userId');
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch(`${backendApi}/auth/resetPassword/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                    navigate('/login')
                } else {
                    toast.error(result?.message)
                }
            })
    }


    return (
        <section className='login-section overflow-hidden'>
            <div className="container mx-auto px-5 my-24">
                <div className="forget-password">
                    <Zoom>
                        <div className="login-form shadow-2xl rounded-xl p-4 mx-auto ssm:w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] xxl:w-[50%]">
                            <h2 className='text-slate-950 dark:text-gray-500 text-[20px] font-semibold text-center'>নতুন পাসওয়ার্ড সেট করুন</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="login-details">
                                    <div className="login-form1 my-4">
                                        <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>নতুন পাসওয়ার্ড দিন  </h3>
                                        <input {...register("password", { required: true })} type='password' placeholder="নতুন পাসওয়ার্ড দিন" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                        {errors.password && <span className='text-red-500 pb-2'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                    </div>
                                    <div className="login-form1 my-4">
                                        <button className='bg-pink-500 hover:bg-red-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>সাবমিট করুন</h2> <TiArrowRightOutline /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;