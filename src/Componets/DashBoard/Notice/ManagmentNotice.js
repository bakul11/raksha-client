import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import { BsSearch } from 'react-icons/bs'
import NoticeManagCart from './NoticeManagCart';

const ManagmentNotice = () => {
    const [notice, setNotice] = useState([])
    const [search, setSearch] = useState('')

    //load notice api 
    useEffect(() => {
        fetch(`${backendApi}/notice/getAllNotice`)
            .then(res => res.json())
            .then(data => setNotice(data))
    }, [notice])






    return (
        <section className='notice-section overflow-hidden'>
            <div className="container mx-auto px-4 my-24">
                {
                    notice?.length === 0 ?
                        <>
                            <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'> এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>

                        </>
                        :

                        <div className='my-32'>
                            <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> সমস্ত  <span className='text-rose-500'>নোটিশ </span> তালিকাঃ</h1>
                            {/* Search Box  */}
                            <div className="search-box relative flex items-center m-5">
                                <input type="text" placeholder='সার্চ করুন' className='rounded-xl p-1 bg-pink-700 relative placeholder-white' onChange={(e) => setSearch(e.target.value)} />
                                <BsSearch className='absolute left-[150px] text-white' />
                            </div>

                            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-5 gap-y-8 p-2">
                                {
                                    notice?.filter(item => {
                                        return item?.title?.toLowerCase().includes(search)
                                    }).map((singleNotice, index) => <NoticeManagCart singleNotice={singleNotice} key={index} index={index} />)
                                }
                            </div>
                        </div>
                }
            </div>
        </section >
    );
};

export default ManagmentNotice;