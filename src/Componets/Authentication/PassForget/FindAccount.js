import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { useForm } from 'react-hook-form';
import { TiArrowRightOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { backendApi } from '../../BackendApi/BackendApi';


const FindAccount = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [account, setAccount] = useState('');

    const onSubmit = data => {
        fetch(`${backendApi}/auth/findAccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.message) {
                    setAccount(result?.message)
                }
                console.log(result);
                if (result?.success) {
                    toast.success(result?.message);
                    setAccount('')
                    reset();
                    localStorage.setItem('userId', result?.userId)
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
                <div className="login-right">
                    <Zoom>
                        <div className="login-form shadow-2xl rounded-xl p-4 mx-auto ssm:w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] xxl:w-[50%]">
                            <h2 className='text-slate-950 dark:text-gray-500 text-[20px] font-semibold text-center'>পাসওয়ার্ড পুনরুদ্ধার করুন  </h2>
                            <h2 className='text-red-500 text-[17px] font-semibold text-center'>{account}</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="login-details">
                                    <div className="login-form1 my-4">
                                        <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার ইমেইল দিন  </h3>
                                        <input {...register("email", { required: true })} type='email' placeholder="ইমেইল এড্রেস" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                        {errors.email && <span className='text-red-500 pb-2'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
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

export default FindAccount;