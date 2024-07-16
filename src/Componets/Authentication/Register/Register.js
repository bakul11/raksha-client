import React from 'react';
import logo from '../../../images/logsign.png'
import Slide from 'react-reveal/Slide';
import { useForm } from 'react-hook-form';
import { TiArrowRightOutline } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { backendApi } from '../../BackendApi/BackendApi';
import { useState } from 'react';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch(`${backendApi}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.error?.includes('E11000 duplicate key error collection')) {
                    setEmail('আপনি ইতিমধ্যে এই ইমেল ব্যবহার করেছেন');
                }
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                    setEmail('');
                    navigate('/login')
                } else {
                    if (result?.error) {
                        toast.error(result?.message)
                    }
                }
            })
    }

    return (
        <section className='login-section overflow-hidden'>
            <div className="container mx-auto px-5 my-24">
                <div className="login-main">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5">
                        <div className="login-left">
                            <Slide left>
                                <img src={logo} alt="logo" className='mx-auto' />
                            </Slide>
                        </div>
                        <div className="login-right">
                            <Slide right>
                                <div className="login-form shadow-2xl dark:bg-slate-800 rounded-xl p-4 mx-auto ssm:w-full sm:w-full md:w-[70%] lg:w-[70%] xl:w-[70%] xxl:w-[70%]">
                                    <h2 className='text-slate-950 dark:text-white text-[20px] font-semibold text-center'>রেজিস্টার করুন </h2>
                                    <h2 className='text-red-500 text-[17px] font-semibold text-center'>{email}</h2>

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="login-details">
                                            <div className="login-form1 my-4">
                                                <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার পুরো নাম   </h3>
                                                <input {...register("userName", { required: true })} type='text' placeholder="আপনার নাম লিখুন   " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                                {errors.userName && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                            </div>
                                            <div className="login-form1 my-4">
                                                <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার ইমেইল এড্রেস  </h3>
                                                <input {...register("email", { required: true })} type='email' placeholder="ইমেইল এড্রেস" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                                {errors.email && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                            </div>
                                            <div className="login-form1 my-2">
                                                <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার পাসওয়ার্ড দিন  </h3>
                                                <input {...register("password", { required: true })} type='password' placeholder="শক্তিশালী পাসওয়ার্ড দিন" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                                {errors.password && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                                            </div>
                                            <div className="login-form1 my-4">
                                                <button className='bg-pink-500 hover:bg-red-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>রেজিস্টার করুন</h2> <TiArrowRightOutline /></button>
                                            </div>
                                        </div>
                                    </form>
                                    <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px] text-center'>আপনার অলরেডি অ্যাকাউন্ট আছে ?  <Link to='/login' className='text-red-500 font-medium'>
                                        লগইন করুন
                                    </Link>  </h3>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;