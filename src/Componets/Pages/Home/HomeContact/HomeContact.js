import React from 'react';
import female from '../../../../images/support/1.png'
import { TiArrowRightOutline } from 'react-icons/ti'
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeContact = () => {
    return (
        <section className='home-contact-section overflow-hidden bg-slate-950 pt-8 relative'>
            <div className="container mx-auto md:px-12 px-10">
                <div className="home-contact-main ">
                    <div className='grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 items-center gap-8'>
                        <div className="home-contact-content">
                            <Slide left>
                                <h2 className='text-white text-[40px] font-semibold '>সার্বক্ষণিক সহায়তার জন্য থাকছে<br />
                                    সরাসরি     <span className='text-yellow-400'> কথা বলার  </span> সুযোগ</h2>

                                <Link to='/contact' className='my-5'>
                                    <button className='bg-gradient-to-r from-pink-500 to-rose-800 hover:from-rose-500 hover:to-pink-500 transition ease-in-out duration-75 text-white rounded-xl p-2 flex items-center gap-2 hover:bg-red-500 font-semibold'>এখনই যোগাযোগ করুন  <TiArrowRightOutline /></button>
                                </Link>
                            </Slide>
                        </div>
                        <div className="home-contact-thubnail">
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

export default HomeContact;