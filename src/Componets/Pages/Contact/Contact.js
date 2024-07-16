import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import { BsFillEnvelopeCheckFill, BsTelephoneOutbound, BsWhatsapp } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { TiArrowRightOutline } from 'react-icons/ti';
import { backendApi } from '../../BackendApi/BackendApi';
import { toast } from 'react-toastify';
import { useState } from 'react';



const courseData = [
    {
        title: 'raksha@gmail.com',
        disc: ' আপনি চাইলে আমারদের কাছে সরাসরি ইমেইল করতে পারেন।',
        logo: <BsFillEnvelopeCheckFill />
    },
    {
        title: '01722-806059',
        disc: 'যেকোনো প্রয়োজনে কল করুন',
        logo: <BsTelephoneOutbound />
    },
    {
        title: '01943-312159',
        disc: 'সরাসরি ট্রেইনারকে মেসেজ করুন',
        logo: <BsWhatsapp />
    }
]

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const time = new Date().toDateString();
    const [email, setEmail] = useState('');

    //send Data in Database 
    const onSubmit = data => {
        const sendData = {
            email: data?.email,
            mobile: data?.mobile,
            subject: data?.subject,
            fullName: data?.fullName,
            time: time
        }

        fetch(`${backendApi}/contact/postContact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.error?.includes('E11000 duplicate key error collection')) {
                    setEmail('আপনি ইতিমধ্যে এই ইমেল ব্যবহার করেছেন');
                }
                console.log(result);
                if (result?.success) {
                    toast.success(result?.message);
                    reset();
                    setEmail('');
                } else {
                    if (result?.error) {
                        toast.error(result?.message)
                    }
                }
            })
    }

    return (
        <section className='contact-sec overflow-hidden'>
            <div className='container mx-auto my-[130px]'>
                <div className="contact-title text-center mb-14">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের <span className='text-rose-500'>সাথে যোগাযোগ</span> করুন</h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>সার্বক্ষণিক সহায়তার জন্য থাকছে সরাসরি কথা বলার সুযোগ </h2>
                    </RubberBand>
                </div>

                <div className="contact-main grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5">

                    <div className="contact-left">
                        <Slide right>
                            {
                                courseData?.map((course, index) => {
                                    const { title, disc, logo } = course;
                                    return (
                                        <div className="flex items-center gap-5 shadow-2xl my-5 rounded-2xl p-2 hover:cursor-pointer  dark:bg-slate-800 transition duration-700 ease-in-out hover:bg-slate-400 dark:hover:bg-slate-900" key={index}>
                                            <div className="contact-sub-logo">
                                                <h2 className='w-14 h-14 rounded-full bg-gray-300 mx-autotext-rose-400 text-[30px] dark:bg-slate-900 flex items-center dark:text-green-300 justify-center  my-4'>{logo}</h2>
                                            </div>
                                            <div className="contact-sub-title">
                                                <h2 className='text-[#1F2937] dark:text-white font-semibold text-[18px]'>{title}</h2>
                                                <h2 className=' text-[#1F2937]  dark:text-gray-400 font-meduim text-[17px]'>{disc}</h2>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </Slide>
                    </div>
                    <div className="contact-right">
                        <Slide left>
                            <div className="contact-form shadow-2xl rounded-xl p-4">
                                <h2 className='text-slate-950 dark:text-gray-500 text-[18px] font-semibold'>ফরমটি পূরণ করুন </h2>
                                <h2 className='text-red-500 text-[17px] font-semibold text-center'>{email}</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-4">
                                        <div className="contact-form1">
                                            <h3 className='text-slate-950 dark:text-gray-400 text-medium'>আপনার সম্পূর্ণ নাম </h3>
                                            <input {...register("fullName", { required: true })} id='ee' placeholder="আপনার নাম" type='text' className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                            {errors.fullName && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className="contact-form1">
                                            <h3 className='text-slate-950 dark:text-gray-400 text-medium'>আপনার ইমেইল </h3>
                                            <input {...register("email", { required: true })} type='email' placeholder="ইমেইল এড্রেস" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                            {errors.email && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xxl:grid-cols-1 gap-4 my-4">
                                        <div className="contact-form1">
                                            <h3 className='text-slate-950 dark:text-gray-400 text-medium'>মোবাইল</h3>
                                            <input {...register("mobile",{ required: true })} type='number' placeholder="মোবাইল নম্বর লিখুন" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                            {errors.mobile && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xxl:grid-cols-1 gap-4 my-4">
                                        <div className="contact-form1">
                                            <h3 className='text-slate-950 dark:text-gray-400 text-medium'>বিস্তারিত লিখুন</h3>
                                            <textarea {...register("subject", { required: true })} type='text' rows='3' placeholder=" যা জানতে চান লিখুন......" className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' />
                                            {errors.subject && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xxl:grid-cols-1 gap-4">
                                        <div className="contact-form1">
                                            <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>মেসেজ পাঠান</h2> <TiArrowRightOutline /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </Slide>
                    </div>
                </div>
                {/* Google Map added  */}
                <div className="map my-24">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.00096316209!2d89.2208455053332!3d25.749909963634327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1680953420368!5m2!1sen!2sbd" className='w-full h-[300px] rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
    );
};

export default Contact;