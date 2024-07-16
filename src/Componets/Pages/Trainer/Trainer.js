import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import trainer1 from '../../../images/6.jpg'
import trainer2 from '../../../images/5.jpg'
import trainer3 from '../../../images/7.jpg'
import trainer4 from '../../../images/8.jpg'


const Trainer = () => {
    return (
        <section className='trainer overflow-hidden'>
            <div className='container mx-auto px-12 pb-32'>
                <div className="feedback-title text-center mt-32 mb-28">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের  <span className='text-rose-500'>কোর্স ইন্সট্রাক্টর</span> মন্ডলী </h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>কোর্সটি ইন্সট্রাক্টর হিসেবে যারা ক্লাস নিবে </h2>
                    </RubberBand>
                </div>


                <div className="list-trainer">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-8  divide-pink-500 ssm:divide-x-0 sm:divide-x-0 md:divide-x-0 lg:divide-x-4 xl:divide-x-4 xxl:divide-x-4">

                        <Slide left>
                            <div className="trainer-logo relative ssm:mb-7">
                                <img src={trainer1} alt="Trainer photo" className='h-[350px] w-auto mx-auto relative border-4 border-rose-300 rounded-xl skew-x-[4deg] z-20 transition ease-in-out duration-75 hover:cursor-pointer hover:grayscale' />
                                <img src={trainer2} alt="Trainer photo" className='h-[350px] w-auto mx-auto absolute left-[200px] top-5 border-4 border-slate-400 rounded-xl skew-y-3 z-10 ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block' />
                            </div>
                        </Slide>


                        <Slide right>
                            <div className="trainer-content ssm:space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-14 xl:space-x-14 xxl:space-x-14">
                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px] ssm:mx-0 sm:mx-0 md:mx-0 lg:mx-14 xl:mx-14 xxl:mx-14'>মাসুদ রানা একজন কোরিয়ান ভাষার চীফ ট্রেইনার,এবং  <span className='text-pink-700 dark:text-yellow-200 font-semibold'>* রাকসা কোরিয়ান ভাষা ট্রেনিং সেন্টার *</span> এর  প্রতিষ্ঠাতা। কোরিয়ান ভাষার প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০০৮ সালে রাকসা কোরিয়ান ভাষা ট্রেনিং সেন্টারের প্রতিষ্ঠা করেন, তিনি দীর্ঘ  ১৫ বছর যাবত ধরে কোরিয়ান ভাষা ট্রেনিং দিয়ে যাচ্ছে সফলতা সঙ্গে ।</h5>

                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px] py-5'>এছাড়া তিনি প্রায় ১৫০+ কোরিয়ান ভাষার ভিডিও <a href="https://www.youtube.com/@masudskoreanlanguageclass1511" target="_blank" className='text-pink-700 dark:text-yellow-200 font-semibold'>* Masud's Korean Language Class *</a>  ইউটুব চ্যানেলে দিয়ে যাচ্ছে । যা থেকে প্রচুর মানুষ  ফ্রি কোরিয়ান ভাষা শিখছে।</h5>
                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px]'>এছাড়া তিনি  <span className='text-pink-700 dark:text-yellow-200 font-semibold'>* রংপুর কারিগরি প্রশিক্ষণ কেন্দ্র * </span> এর প্রধান প্রশিক্ষক,যেখানে কোরিয়ান ভাষা ট্রেনিং দেন । এবং তিনি বিভিন্ন ব্যবসার সঙ্গে জড়িত রয়েছেন।</h5>
                                <div className="instrac-sub pt-5">
                                    <h2 className='font-semibold text-[18px] dark:text-white'>মাসুদ রানা</h2>
                                    <h2 className='text-slate-950 dark:text-gray-400 font-medium'>প্রতিষ্ঠাতা - রাকসা কোরিয়ান ভাষা ট্রেনিং সেন্টার</h2>
                                    <h2 className='text-slate-950 dark:text-gray-400 font-medium'>প্রধান ভাষা প্রশিক্ষক - রংপুর কারিগরি প্রশিক্ষণ কেন্দ্র</h2>
                                </div>
                            </div>
                        </Slide>


                    </div>
                </div>


                <div className="list-trainer mt-28">

                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-8 gap-y-20  divide-green-500 ssm:divide-x-0 sm:divide-x-0 md:divide-x-0 lg:divide-x-4 xl:divide-x-4 xxl:divide-x-4">

                        <Slide right>
                            <div className="trainer-content">
                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px]'>মাসুদ রানা একজন কোরিয়ান ভাষার চীফ ট্রেইনার,এবং  <span className='text-pink-700 dark:text-yellow-200 font-semibold'>* রাকসা কোরিয়ান ভাষা ট্রেনিং সেন্টার *</span> এর  প্রতিষ্ঠাতা। কোরিয়ান ভাষার প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০০৮ সালে রাকসা কোরিয়ান ভাষা ট্রেনিং সেন্টারের প্রতিষ্ঠা করেন, তিনি দীর্ঘ  ১৫ বছর যাবত ধরে কোরিয়ান ভাষা ট্রেনিং দিয়ে যাচ্ছে সফলতা সঙ্গে ।</h5>

                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px] py-5'>এছাড়া তিনি প্রায় ১৫০+ কোরিয়ান ভাষার ভিডিও <a href="https://www.youtube.com/@masudskoreanlanguageclass1511" target="_blank" className='text-pink-700 dark:text-yellow-200 font-semibold'>* Masud's Korean Language Class *</a>  ইউটুব চ্যানেলে দিয়ে যাচ্ছে । যা থেকে প্রচুর মানুষ  ফ্রি কোরিয়ান ভাষা শিখছে।</h5>
                                <h5 className='text-slate-950 dark:text-gray-400 text-[19px]'>এছাড়া তিনি  <span className='text-pink-700 dark:text-yellow-200 font-semibold'>* রংপুর কারিগরি প্রশিক্ষণ কেন্দ্র * </span> এর প্রধান প্রশিক্ষক,যেখানে কোরিয়ান ভাষা ট্রেনিং দেন । এবং তিনি বিভিন্ন ব্যবসার সঙ্গে জড়িত রয়েছেন।</h5>
                                <div className="instrac-sub pt-5">
                                    <h2 className='font-semibold text-[18px] dark:text-white'>আতিকুর রহমান </h2>
                                    <h2 className='text-slate-950 dark:text-gray-400 font-medium'>সহকারী ট্রেইনার </h2>
                                </div>
                            </div>
                        </Slide>

                        <Slide left>
                            <div className="trainer-logo relative ssm:mb-7 ssm:order-first md:order-first lg:order-last xl:order-last xxl:order-last">
                                <img src={trainer3} alt="Trainer photo" className='h-[350px] w-auto mx-auto relative border-4 border-rose-300 rounded-xl skew-x-[4deg] z-20 transition ease-in-out duration-75 hover:cursor-pointer hover:grayscale' />

                                <img src={trainer4} alt="Trainer photo" className='h-[350px] w-auto mx-auto absolute left-[200px] top-5 border-4 border-slate-400 rounded-xl skew-y-3 z-10 ssm:hidden sm:hidden md:hidden lg:block xl:block xxl:block' />
                            </div>
                        </Slide>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainer;