import React from 'react';
import logo from '../../../images/404.png'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import Zoom from 'react-reveal/Zoom';

const NoMatch = () => {
    return (
        <section className='error-section overflow-hidden'>
            <div className='container mx-auto ssm:px-6 sm:px-5 lg:py-16'>
                <Zoom>
                    <div className="title-error  mt-[50px]">
                        <img src={logo} alt="logo" className='mx-auto h-[300px]' />
                        <h2 className='text-rose-700 text-[20px] font-medium text-center dark:text-white'>দুঃখিত, আমরা এই পৃষ্ঠাটি  খুঁজে পাচ্ছি না । দয়া করে হোম পেজে  যান</h2>

                        <div className='text-center mt-4 mb-20'>
                            <Link to='/' className='rounded-lg p-2 text-center text-white font-semibold  bg-rose-500 flex items-center gap-x-2 w-[120px] mx-auto'><AiOutlineHome /> হোম পেজে</Link>
                        </div>

                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default NoMatch;