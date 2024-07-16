import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';
import { TbCertificate } from 'react-icons/tb'
import { FaHandshake } from 'react-icons/fa'
import { ImAccessibility } from 'react-icons/im'


const courseData = [
    {
        title: 'কোর্স সার্টিফিকেট',
        disc: 'যারা কোর্সের সবগুলো এসাইনমেন্ট & ফাইনাল পরীক্ষায় অংশগ্রহণ করে কমপক্ষে 50% মার্ক পাবেন তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই ডাউনলোড করতে পারবেন। কোন প্রিন্টেড কপি দেয়া হবে না।',
        logo: <TbCertificate />
    },
    {
        title: 'আমাদের সাথে কাজ করার সুযোগ',
        disc: 'কোর্সের ছাত্রদের মধ্য থেকে উপযুক্ত কাউকে পছন্দ হলে আমরা যাচাই বাছাই করে আমাদের সাথে কাজ করার সুযোগ দিতে পারি। এছাড়া বিভিন্ন দেশে কোরিয়ান ভাষার ট্রেইনার  এবং বিদেশ যাত্রার  সুযোগ রয়েছে',
        logo: <FaHandshake />
    },
    {
        title: 'লাইফটাইম কোর্স এক্সেস',
        disc: 'যারা কোর্সটি একবার করবেন , তারা কোর্সের সকল কন্টেন্ট এর লাইফটাইম এক্সেস পাবেন এবং ভবিষ্যতের সকল আপডেট পেতে থাকবেন। এছাড়া প্রাইভেট সাপোর্ট চ্যানেলে আজীবন এক্সেস থেকে যাবে যেখানে প্রশ্ন করলে আমরা উত্তর দেয়ার চেষ্টা করবো ।',
        logo: <ImAccessibility />
    }
]

const CourseBenefit = () => {
    return (
        <section className='course-benefit overflow-hidden'>
            <div className='container mx-auto ssm:px-6 sm:px-5 lg:py-16 ssm:mb-12 sm:mb-16'>
                <div className="feedback-title text-center my-16">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> কোর্সটি   <span className='text-rose-500'>করে যা</span> পাবেন</h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>কোর্সটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন</h2>
                    </RubberBand>
                </div>

                <div className="benefit-main grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-5">
                    <Zoom>
                        {
                            courseData?.map((course, index) => {
                                const { title, disc, logo } = course;
                                return (
                                    <div className="shadow-2xl rounded-2xl p-2 text-center  hover:cursor-pointer bg-white dark:bg-slate-800 transition duration-700 ease-in-out hover:bg-orange-300 dark:hover:bg-slate-900" key={index}>
                                        <h2 className='w-14 h-14 rounded-full bg-[#77f477a6] mx-auto text-rose-400 text-[30px] dark:bg-slate-900 flex items-center dark:text-green-300 justify-center  my-4'>{logo}</h2>
                                        <h2 className='text-center text-[#1F2937] dark:text-white font-semibold text-[18px] pb-2'>{title}</h2>
                                        <h2 className=' text-[#1F2937]  dark:text-gray-400 font-meduim text-[17px]'>{disc}</h2>
                                    </div>
                                )
                            })
                        }
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default CourseBenefit;