import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsArrowDownUp } from 'react-icons/bs'

const ScrollToTop = () => {
    const [showBtn, setShowBtn] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])


    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <section className='scroll-section'>
            <div className="container mx-auto">

                {
                    showBtn &&

                    <BsArrowDownUp className='fixed bottom-[50px] right-[50px] bg-pink-500 rounded-lg cursor-pointer text-white text-[40px] z-50 p-2' onClick={handleGoTop} />
                }
            </div>
        </section>
    );
};

export default ScrollToTop;