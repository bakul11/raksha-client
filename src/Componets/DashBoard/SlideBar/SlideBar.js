import React, { useState } from 'react';
import { FaUsers, FaBars } from 'react-icons/fa'
import { BsDatabaseCheck } from 'react-icons/bs'
import { MdPermContactCalendar, MdOutlineDateRange, MdOutlineReviews, MdRateReview, MdOutlineAdminPanelSettings } from 'react-icons/md'
import { TfiGallery } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom';
import './SlideBar.css'

const slideData = [
    {
        title: 'ইউজার লিস্ট',
        logo: <FaUsers />,
        path: 'all-users'

    },
    {
        title: 'কন্টাক্ট লিস্ট',
        logo: <MdPermContactCalendar />,
        path: 'contact-list'

    },
    {
        title: 'গ্যালারি ফটো',
        logo: <TfiGallery />,
        path: 'upload-gallrey'

    },
    {
        title: 'পাবলিশ নোটিশ ',
        logo: <MdOutlineDateRange />,
        path: 'notice'
    },
    {
        title: 'নোটিশ ম্যানেজ',
        logo: <BsDatabaseCheck />,
        path: 'notice-management'
    },
    {
        title: 'স্টুডেন্ট রিভিউ',
        logo: <MdOutlineReviews />,
        path: 'review'
    },
    {
        title: 'অ্যাডমিন অ্যাক্সেস',
        logo: <MdOutlineAdminPanelSettings />,
        path: 'admin-access'
    }
]

const SlideBar = () => {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <section className='slide-section bg-slate-950 pt-[100px] pb-[10px] h-screen overflow-y-scroll' style={{ width: open ? '180px' : '80px' }}>
            <div className="flex items-center cursor-pointer gap-x-2 pl-5">
                <FaBars className='text-white cursor-pointer' onClick={toggle} />
                <h2 className='text-white' onClick={toggle} style={{ display: open ? 'block' : 'none' }}>ড্যাশবোর্ড</h2>
            </div>
            <div className="slidebar">
                {
                    slideData?.map(data => {
                        const { title, path, logo } = data;
                        return (
                            <div className="slidebar-menu">
                                <NavLink to={`/dashboard/${path}`} className='flex items-center text-white my-5'>

                                    <h1 className='pl-5 flex items-center text-white my-5'>{logo} <span className='pl-2' style={{ display: open ? 'block' : 'none' }}>{title}</span></h1>

                                </NavLink >
                            </div>
                        )
                    })
                }
            </div >
        </section >
    );
};

export default SlideBar;