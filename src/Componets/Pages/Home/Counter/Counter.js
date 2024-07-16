import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';
import logo2 from '../../../../images/1.png'
import Zoom from 'react-reveal/Zoom'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { FaPlaneDeparture } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import CountUp from 'react-countup';

const countData = [
    {
        title: 'মোট শিক্ষার্থী ',
        digit: '3250',
        logo: <BsPeople />
    },
    {
        title: 'বিদেশগামী শিক্ষার্থী ',
        digit: '1500',
        logo: <FaPlaneDeparture />
    },
    {
        title: 'অধ্যায়নরত শিক্ষার্থী',
        digit: '2500',
        logo: <HiOutlineBookOpen />
    },
    {
        title: 'এক্সপার্ট ট্রেইনার',
        digit: '10',
        logo: <GiTeacher />
    }
]

const Counter = () => {
    return (
        <section className='counter-section overflow-hidden'>
            <div className='container mx-auto px-5 pb-24'>
                <div className="counter-main grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-24">
                    <LightSpeed left>
                        <div className="count-left">
                            <img src={logo2} alt="logo" className='h-auto block text-center mx-auto hover:grayscale transition ease-in-out duration-75' />
                        </div>
                    </LightSpeed>
                    <div className="count-right">
                        <div className="count-title text-center mb-7">
                            <RubberBand>
                                <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white mb-8'> আমাদের  <span className='text-rose-500'>অর্জন</span></h1>
                            </RubberBand>

                            <div className="sub-counter-item ssm:mb-16 sm:mb-16">
                                <div className="counter-sub grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-5 gap-y-3">
                                    {
                                        countData?.map((count, index) => {
                                            const { title, digit, logo } = count;
                                            return (
                                                <Zoom>
                                                    <div key={index} className='flex items-center space-x-5 bg-white dark:bg-slate-800 shadow-xl rounded-lg p-2 hover:cursor-pointer transition duration-700 ease-in-out hover:bg-slate-500 dark:hover:bg-slate-900'>
                                                        <div className="count-thub">
                                                            <h2 className='w-14 h-14 rounded-full bg-gray-300 mx-auto text-rose-400 text-[30px] dark:bg-slate-900 flex items-center dark:text-green-300 justify-center  my-4'>{logo}</h2>
                                                        </div>
                                                        <div className="count-content">
                                                            <h2 className='text-[20px] font-semibold text-slate-950 dark:text-white'>{title}</h2>
                                                            <h2 className='text-[25px] font-semibold text-slate-950 dark:text-gray-400'> <CountUp end={digit} duration={5} /> +</h2>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;