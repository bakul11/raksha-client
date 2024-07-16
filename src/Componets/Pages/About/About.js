import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import logo1 from '../../../images/10.jpg'
import Instractor from '../Home/Instractor/Instractor';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa'


const About = () => {
    return (
        <section className='about-sec overflow-hidden'>
            <div className='container mx-auto px-12 mb-20'>
                <div className="about-title text-center mb-24 mt-32">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের <span className='text-rose-500'>সম্পর্কে </span>বিস্তারিত </h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>আমাদের সম্পর্কে আরো বিস্তারিত জানুন </h2>
                    </RubberBand>
                </div>
                <div className="about-main">
                    <div className="items-center grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5">
                        <Slide left>
                            <div className="about-left">
                                <h2 className='text-orange-500 dark:text-green-500 text-[25px] font-semibold underline underline-offset-1'>রাকসা সম্পর্কে:</h2>
                                <h2 className='text-slate-900 dark:text-gray-400 text-[18px] font-medium'>রাকসা একটি রংপুর শহরের মধ্যে স্বনামধন্য কোরিয়ান ভাষা ট্রেনিং সেন্টার।যেখানে দক্ষ টেইনারের মাধ্যমে কোরিয়ান ভাষা শেখানো হয়, এবং ছাত্রছাত্রীদের কোরিয়ান ভাষায় এক্সপার্ট করে তোলা হয়। যেটি ২০০৮ সালে মানুষকে কোরিয়ান ভাষা শেখানোর জন্য প্রতিষ্ঠা করা হয় ।এবং দীর্ঘ 15 বছর ধরে সুনামের সঙ্গে কোরিয়ান ভাষা শেখানো হচ্ছে। আমাদের মূল লক্ষ্য হলো ছাত্র-ছাত্রীদের কোরিয়ান ভাষা যত সহজ ভাবে শেখানো যায় সেই প্রচেষ্টা । এ থেকে শিক্ষার্থীরা খুব সহজে  কোরিয়ান ভাষা শিখে  বিদেশগামী হচ্ছে এবং বিভিন্ন প্রতিষ্ঠান ভালো ভালো পজিশনে জব করছে।</h2>

                                <h2 className='text-slate-950 dark:text-gray-300 text-[18px] font-medium mt-5 mb-2'>সোশ্যাল মিডিয়ায় ফলো করুন:</h2>
                                <div className="footer-social mb-3">
                                    <ul className='flex flex-wrap gap-x-2'>
                                        <li>
                                            <a href="https://www.facebook.com/ruksarangpur" target="_blank" className='inline'>
                                                <FaFacebookF className='text-blue-400 w-9 h-9 rounded-full border-2 p-2 inline border-gray-600 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@masudskoreanlanguageclass1511" target="_blank" className='inline '>
                                                <FaYoutube className='text-blue-400 w-9 h-9 rounded-full border-2 p-2 inline border-gray-600 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/ruksarangpur" target="_blank" className='inline'>
                                                <FaTwitter className='text-blue-400 w-9 h-9 rounded-full border-2 p-2 inline border-gray-600 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="about-left">
                                <img src={logo1} alt="logo" className='mx-auto w-full rounded-2xl h-[350px] hover:grayscale' />
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
            {/* Instraction  */}
            <Instractor />
        </section>
    );
};

export default About;