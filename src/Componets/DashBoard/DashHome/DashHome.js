import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import Zoom from 'react-reveal/Zoom';
import { FaUsers } from 'react-icons/fa';
import { TbArrowWaveRightUp } from 'react-icons/tb';
import { MdOutlineReviews, MdPermContactCalendar } from 'react-icons/md';
import { TfiGallery } from 'react-icons/tfi';
import { Link } from 'react-router-dom'
import DashHomeUser from './DashHomeUser';


const DashHome = () => {
    const [contact, setContact] = useState([]);
    const [users, setUsers] = useState([])
    const [review, setReview] = useState([])
    const [photo, setPhoto] = useState([]);


    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/auth/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    //load Contact Api 
    useEffect(() => {
        fetch(`${backendApi}/contact/getAllContact`)
            .then(res => res.json())
            .then(data => setContact(data))
    }, [contact])


    //load review api 
    useEffect(() => {
        fetch(`${backendApi}/review/getAllReview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review])


    // load Photo API 
    useEffect(() => {
        fetch(`${backendApi}/gallery/getAllGallPhoto`)
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, [photo])


    //Total array length
    const totalContact = contact?.length;
    const totalReview = review?.length;
    const totalPhoto = photo?.length;
    const totalUser = users?.length;

    //convert percent
    const contactPercent = parseInt(100 / totalContact);
    const reviewPercent = parseInt(100 / totalReview);
    const photoPercent = parseInt(100 / totalPhoto);
    const userPercent = parseInt(100 / totalUser);

    const homeSlideData = [
        {
            title: 'মোট ইউজার',
            digit: totalUser,
            logo: <FaUsers />,
            path: 'all-users',
            parcent: userPercent,
            disc: 'অ্যাক্টিভ ইউজার'

        },
        {
            title: 'কন্টাক্ট লিস্ট',
            digit: totalContact,
            logo: <MdPermContactCalendar />,
            path: 'contact-list',
            parcent: contactPercent,
            disc: 'কন্টাক্ট ইউজার'

        },
        {
            title: 'গ্যালারি ফটো',
            digit: totalPhoto,
            logo: <TfiGallery />,
            path: 'upload-gallrey',
            parcent: photoPercent,
            disc: 'ইভেন্ট ফটো'

        },
        {
            title: 'স্টুডেন্ট রিভিউ',
            digit: totalReview,
            logo: <MdOutlineReviews />,
            path: 'review',
            parcent: reviewPercent,
            disc: 'স্টুডেন্ট ফিডব্যাক '
        }

    ]


    return (
        <section className='container mx-auto my-24'>
            <div className="dash-total">
                <h2 className='text-slate-950 dark:text-white text-[25px] mb-5 font-semibold'>ড্যাশবোর্ড ওভারফ্লো</h2>
                <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-5">
                    {
                        homeSlideData?.map(item => {
                            const { logo, title, digit, path, parcent, disc } = item;
                            return (
                                <Zoom>
                                    <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl hover:bg-rose-300">
                                        <Link to={`/dashboard/${path}`}>
                                            <div className="flex items-center justify-between space-x-5">
                                                <h2 className='text-slate-950 dark:text-white font-semibold text-[20px]'>{title}</h2>
                                                <h2 className='text-orange-500 dark:text-white bg-[#86ef8f60] text-[25px] p-1 flex items-center justify-center h-[50px] w-[50px] mx-auto rounded-full'>{logo}</h2>
                                            </div>
                                            <h1 className='text-slate-950 dark:text-white text-[25px] text-center font-bold'>{digit}</h1>
                                            <h5 className='flex items-center'><TbArrowWaveRightUp className='text-green-500 text-[18px]' /> <span className='px-2 text-rose-500 dark:text-yellow-500'>{parcent}% </span><span className='text-gray-700 dark:text-pink-400'>{disc}</span></h5>
                                        </Link>
                                    </div>
                                </Zoom>
                            )
                        })
                    }
                </div>
                <div className="list-user">
                    <DashHomeUser />
                </div>
            </div>
        </section >
    );
};

export default DashHome;