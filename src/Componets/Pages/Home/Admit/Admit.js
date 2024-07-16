import React from 'react';
import female from '../../../../images/2.png'
import { TiArrowRightOutline } from 'react-icons/ti'
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';

const Admit = () => {
    return (
        <section className='admit-section overflow-hidden bg-slate-950 relative'>
            <div className="container mx-auto md:px-12 px-10">
                <div className="admit-main ">
                    <div className='grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-5 items-center ssm:pt-[25px] sm:pt-[25px] md:pt-[0px] xl:pt-[0px] xxl:pt-[0px]'>
                        <div className="admit-content">
                            <Slide left>
                                <h2 className='text-white text-[40px] font-semibold '>সেরা শিক্ষকের কাছ থেকে কোরিয়ান ভাষা শিখতে <span className='text-yellow-400'> ৫% ছাড়ে </span> ভর্তি চলছে</h2>

                                <Link to='/admission'>
                                    <button className='bg-gradient-to-r from-pink-500 to-rose-800 text-white rounded-xl hover:from-orange-500 hover:to-pink-800 mt-3 p-2 flex items-center gap-2 hover:bg-red-500 font-semibold'>এখনই ভর্তি হন <TiArrowRightOutline /></button>
                                </Link>
                            </Slide>
                        </div>
                        <div className="admit-thubnail">
                            <Slide right>
                                <img src={female} alt="logo" className='transition ease-in-out duration-75 hover:grayscale' />
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[70%] h-[35%] overflow-hidden top-[100px] bg-gradient-to-r from-pink-400 via-rose-500 to-slate-950 blur-[150px] z-[0]">
                </div>
            </div>
        </section>

    );
};

export default Admit;