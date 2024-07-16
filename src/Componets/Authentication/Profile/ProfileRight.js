import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { backendApi } from '../../BackendApi/BackendApi';
import { TiArrowRightOutline } from 'react-icons/ti';
import useActiveUser from '../../../Hooks/useActiveUser';


const ProfileRight = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useActiveUser();
    const id = user?._id;

    const onSubmit = data => {
        fetch(`${backendApi}/auth/updateProfile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                } else {
                    if (result?.error) {
                        toast.error(result?.message)
                    }
                }
            })
    }

    return (
        <div className="login-form shadow-inner box-border shadow-gray-400 rounded-xl p-4 mb-12 mx-auto dark:bg-slate-800">
            <h2 className='text-slate-950 dark:text-white text-[20px] font-medium mb-8'>প্রোফাইল আপডেট করুন </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="profileright-details">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-1 gap-y-2 ">
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার পুরো নাম  </h3>
                            <input {...register("userName", { required: true })} type='text' placeholder="আপনার নাম  " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.userName && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার ঠিকানা </h3>
                            <input {...register("address", { required: true })} type='text' placeholder="আপনার ঠিকানা  " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.address && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                    </div>
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-1 gap-y-2 my-4">
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>মোবাইল নম্বর </h3>
                            <input {...register("phone", { required: true })} type='number' placeholder="মোবাইল নম্বর/ফোন  " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.phone && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>সিটির নাম  </h3>
                            <input {...register("city", { required: true })} type='text' placeholder="সিটি নাম  " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.city && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                    </div>
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-1 gap-y-2 ">
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার জিপকোড </h3>
                            <input {...register("zipcode", { required: true })} type='number' placeholder="জিপকোড " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.zipcode && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                        <div className="profile-form">
                            <h3 className='text-slate-950 dark:text-gray-400 font-medium pb-1 text-[17px]'>আপনার পেশা  </h3>
                            <input {...register("occupation", { required: true })} type='text' placeholder="পেশা " className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                            {errors.occupation && <span className='text-red-500'>ঘরটি অবশ্যই পূরণ করতে হবে</span>}
                        </div>
                    </div>
                    <div className="profile-form my-4">
                        <button className='bg-pink-500 hover:bg-red-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>আপডেট সেভ করুন</h2> <TiArrowRightOutline /></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileRight;