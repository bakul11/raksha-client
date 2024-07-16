import React from 'react';
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';
import logo from '../../../images/9.png';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { TiArrowRightOutline } from 'react-icons/ti';

const Admission = () => {
    return (
        <section className='admission-sec overflow-hidden'>
            <div className='container mx-auto my-[130px] px-[30px]'>
                <div className="admission-title text-center mb-14">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> ভর্তি <span className='text-rose-500'>সংক্রান্ত</span> তথ্য</h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>ভর্তি সংক্রান্ত যে সকল তথ্য আমাদের লাগবে</h2>
                    </RubberBand>
                </div>
                <div className="admission-main">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5">
                        <Slide left>
                            <div className="admission-left">
                                <h2 className='text-pink-500 dark:text-green-500 text-[22px] font-medium underline underline-offset-1'>ভর্তি হতে যা যা আপনাকে নিয়ে আসতে হবে :</h2>
                                <ul className=''>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />এসএসসি(SSC) পরীক্ষায় উত্তীর্ণ সার্টিফিকেট এবং মার্কশিট  এর ফটোকপি ।</li>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />এন.আই.ডি(NID) অথবা জন্ম নিবন্ধন এর ২ কপি  ফটোকপি ।</li>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />সদ্য তোলা পাসপোর্ট সাইজের রঙ্গিন 2 কপি ছবি ।</li>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />1 কপি স্ট্যাম্প</li>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />কোর্স ফি ভর্তির সময় পরিশোধযোগ্য  ।</li>
                                    <li className='py-2 text-slate-950 dark:text-gray-400 text-[17px] font-medium flex items-center gap-3'><BsFillCheckCircleFill />ভর্তি হস্তান্তর কিংবা বাতিল যোগ্য নয়।</li>
                                </ul>
                                <Link to='/contact'>
                                    <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white hover:from-pink-500 hover:to-yellow-600 rounded-xl transition ease-in-out duration-75 p-2 flex items-center gap-2  font-semibold my-5'>বিস্তারিত জানতে যোগাযোগ করুন <TiArrowRightOutline /></button>
                                </Link>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="admission-left">
                                <img src={logo} alt="logo" />
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;