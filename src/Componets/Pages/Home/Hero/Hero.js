import React from 'react';
import heroLogo from '../../../../images/3.png'
import { GiAirplaneDeparture } from 'react-icons/gi'
import Bounce from 'react-reveal/Bounce';
import HeroModal from './HeroModal';
import { Link } from 'react-router-dom';
import { TiArrowRightOutline } from 'react-icons/ti';

const Hero = () => {
    return (
        <section className='overflow-hidden'>
            <div className='hero-sec bg-slate-950 dark:bg-slate-800 ssm:mb-10 sm:mb-10 z-[5] mt-[70px]'>
                <div className="container mx-auto ssm:px-10 sm:py-6 lg:px-14">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5 pt-24 pb-10 items-center">
                        <div className="hero-title">
                            <Bounce right>
                                <h3 className='ssm:text-[32px] sm:text-[32px] md:text-[50px] lg:text-[50px] xl:text-[50px] xxl:text-[50px] font-semibold text-white '><span className='text-white'>আর নয় ভয়,</span><br /> <span className='text-yellow-500'>কোরিয়ান ভাষা</span> শিখে <br /> এবার <span className='text-yellow-500'>বিদেশ <GiAirplaneDeparture className='inline text-green-500' /> যাত্রা</span> হবেই জয় </h3>

                                {/* Entro Button  */}
                                <div className="buyCourse pt-5 flex items-center flex-wrap gap-y-2">
                                    <HeroModal />
                                    <Link to='/admission'>
                                        <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-xl p-2 flex transition ease-in-out duration-75 items-center gap-2 hover:from-red-500 hover:to-orange-500 font-semibold'>এখনই ভর্তি হন <TiArrowRightOutline /></button>
                                    </Link>
                                </div>

                            </Bounce>
                        </div>
                        <div className="hero-thubnail">
                            <Bounce left>
                                <img src={heroLogo} alt="logo" />
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[70%] h-[35%] overflow-hidden top-[150px] bg-gradient-to-r from-pink-300 via-rose-400 to-slate-950 blur-[200px] z-[0]  dark:from-orange-900 dark:via-pink-800 dark:to-pink-500"></div>
            </div>
        </section>
    );
};

export default Hero;