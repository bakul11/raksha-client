import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { backendApi } from '../../BackendApi/BackendApi';
import { useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom'
import logo from '../../../images/loader.gif';

const NoticeDetails = () => {
    const [data, setData] = useState({});
    const [loadding, setLoadding] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${backendApi}/notice/noticeDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoadding(false)
            })
            .catch(error => {
                setLoadding(true)
            })
    }, [id])



    //Convert Html File 
    function createMarkup(theExactHtmlWithTag) {
        return { __html: theExactHtmlWithTag };
    }

    return (
        <section className='overflow-hidden'>
            {
                loadding ?
                    <>
                        <div className="loader my-32">
                            <h2 className='text-center text-[18px] font-semibold dark:text-white'>দয়া করে অপেক্ষা করুন ডেটা লোড হচ্ছে...</h2>
                            <img src={logo} alt="logo" className='text-center mt-2 mx-auto h-[100px]' />
                        </div>
                    </>
                    :
                    <div className='container mx-auto my-24 px-12'>
                        <div className="rounded-2xl">
                            <Zoom>
                                <div className="details-item">
                                    <div className="flex  items-center gap-x-3">
                                        <div className="notice-logo">
                                            <img src={data?.photo} alt="profile" className='w-[50px] h-[50px] rounded-full' />
                                        </div>
                                        <div className="box">
                                            <h2 className='flex items-center ga-x-2'><span className='text-gray-500 dark:text-gray-400 capitalize pl-2'>{data?.name}</span></h2>
                                            <h4 className='flex items-center gap-x-2 text-gray-500 dark:text-gray-400 my-1'><AiOutlineFieldTime />{data?.date}</h4>
                                        </div>
                                    </div>
                                    <div className="show-details">
                                        <h2 className='font-semibold text-slate-950 dark:text-white text-[23px] mb-2 mt-5'>{data?.title}</h2>
                                        <h2 className='text-slate-700 dark:text-gray-400 text-[18px]' dangerouslySetInnerHTML={createMarkup(`${data?.disc}`)}>
                                        </h2>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    </div>
            }
        </section >
    );
};

export default NoticeDetails;