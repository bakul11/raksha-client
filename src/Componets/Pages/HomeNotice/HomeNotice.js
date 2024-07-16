import { useState, useEffect } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import { BsArrowDownUp, BsArrowRightCircle } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import loader from '../../../images/loader.gif';



const HomeNotice = () => {
    const [notice, setNotice] = useState([]);
    const [showNotice, setShowNotice] = useState(false);
    const navigate = useNavigate();

    // load Photo API 
    useEffect(() => {
        fetch(`${backendApi}/notice/getAllNotice`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setNotice(data))
    }, [notice])

    //Handle Show More 
    const handleShowMore = () => {
        setShowNotice(!showNotice)
    }



    const handleShowDetail = (id) => {
        navigate(`/notice-details/${id}`)
    }






    return (
        <section className='gallrey-section overflow-hidden'>
            {
                !notice?.length === 0 ?

                    <div className="loader my-32">
                        <h2 className='text-center text-[18px] font-semibold dark:text-white'>দয়া করে অপেক্ষা করুন ডেটা লোড হচ্ছে...</h2>
                        <img src={loader} alt="logo" className='text-center mt-2 mx-auto h-[150px]' />
                    </div>
                    :

                    <div className="container mx-auto py-[100px] mt-[50px]">
                        <div className="notice-title text-center mb-[100px]">
                            <RubberBand>
                                <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> আমাদের  <span className='text-rose-500'>নোটিশ</span> বোর্ড</h1>
                                <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>আমাদের পাবলিশকৃত সকল নোটিশ সমুহ </h2>
                            </RubberBand>
                        </div>
                        <div className="notice-main px-2">
                            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-5 gap-y-8 p-2">
                                {
                                    showNotice ?
                                        notice?.map((singleNotice, index) => {
                                            const { title, date, _id, photo, name } = singleNotice;
                                            return (
                                                <div className="rounded-2xl shadow-xl p-1 dark:bg-slate-800" key={index}>
                                                    <Zoom>
                                                        <div className="flex gap-x-3 ">
                                                            <div className="notice-logo">
                                                                <h2 className='w-[60px] h-[60px] rounded-full mx-auto bg-gradient-to-r from-blue-500 to-orange-500 text-[50px] font-bold flex justify-center items-center text-white'>{index + 1} </h2>
                                                            </div>
                                                            <div className="box">
                                                                <h2 className='font-semibold text-slate-950 dark:text-white text-[20px] cursor-pointer' onClick={() => handleShowDetail(_id)}>{title}</h2>
                                                                <h2 className='flex items-center ga-x-2'><img src={photo} alt="profile" className='w-[30px] h-[30px] rounded-full' /><span className='text-gray-500 dark:text-gray-400 capitalize pl-2'>{name}</span></h2>
                                                                <h4 className='flex items-center gap-x-2 text-gray-500 dark:text-gray-400 my-2'><AiOutlineFieldTime />{date}</h4>
                                                                <button className='flex items-center gap-x-2 text-white bg-blue-400 rounded-xl p-1 mb-2' onClick={() => handleShowDetail(_id)}>Read More <BsArrowRightCircle /></button>
                                                            </div>
                                                        </div>
                                                    </Zoom>
                                                </div>
                                            )
                                        }) :
                                        notice?.slice(0, 6)?.map((singleNotice, index) => {
                                            const { title, date, _id, photo, name } = singleNotice;
                                            return (
                                                <div className="rounded-2xl shadow-xl p-1 dark:bg-slate-800" key={index}>
                                                    <Zoom>
                                                        <div className="flex gap-x-3">
                                                            <div className="notice-logo">
                                                                <h2 className='w-[60px] h-[60px] rounded-full mx-auto bg-gradient-to-r from-orange-400 to-pink-400 text-[50px] font-bold flex justify-center items-center text-white'>{index + 1} </h2>
                                                            </div>
                                                            <div className="box-notice">
                                                                <h2 className='font-semibold text-slate-950 dark:text-white text-[20px] cursor-pointer' onClick={() => handleShowDetail(_id)}>{title}</h2>
                                                                <h2 className='flex items-center ga-x-2'><img src={photo} alt="profile" className='w-[30px] h-[30px] rounded-full' /><span className='text-gray-500 dark:text-gray-400 capitalize pl-2'>{name}</span></h2>
                                                                <h4 className='flex items-center gap-x-2 text-gray-500 dark:text-gray-400 my-2'><AiOutlineFieldTime />{date}</h4>
                                                                <button className='flex items-center gap-x-2 text-white bg-blue-400 rounded-xl p-1 mb-2' onClick={() => handleShowDetail(_id)}>Read More <BsArrowRightCircle /></button>
                                                            </div>
                                                        </div>
                                                    </Zoom>
                                                </div>
                                            )
                                        })

                                }
                            </div>
                            <div className="more-btn text-center my-[25px]">
                                {
                                    showNotice ?
                                        <>
                                            <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showNotice)}>আর নেই  উপরে যান   <BsArrowDownUp /></button>
                                        </>
                                        :
                                        <>
                                            <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showNotice)}>আরো দেখুন  <BsArrowDownUp /></button>
                                        </>
                                }
                            </div>

                        </div >
                    </div >
            }
        </section >
    );
};

export default HomeNotice;