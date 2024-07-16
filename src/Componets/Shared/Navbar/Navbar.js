import React from 'react';
import { useState } from 'react';
import { MdDashboard, MdOutlineLightMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go'
import './Navbar.css'
import { useEffect } from 'react';
import useActiveUser from '../../../Hooks/useActiveUser';
import { toast } from 'react-toastify';
import bars from '../../../images/bars.svg'

const Navbar = () => {
    const [theme, setTheme] = useState('light' || localStorage.getItem('theme'));
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toogleMenu = () => setOpen(!open);
    const handleShowProfile = () => setIsOpen(!isOpen);

    const [user] = useActiveUser();


    useEffect(() => {
        document.body.classList = theme
    }, [theme])

    //Handle Light Dark Mode 
    const handleLightDark = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light')
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark')
        }

    }


    //Handle Log Out 
    const handlelogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
        toast.success('লগআউট সফলভাবে সম্পন্ন হয়েছে')
    }





    return (
        <section className='overflow-hidden'>
            <nav className='bg-[#1F2937] md:flex md:justify-between md:items-center md:p-0 py-3 fixed top-0 right-0 left-0 z-40'>
                <div className="header-logo px-12 flex items-center justify-between">
                    <Link to='/' className='text-yellow-500 font-bold text-[30px]'>
                        <h2>রাকসা</h2>
                    </Link>
                    <h2 className='text-white cursor-pointer md:hidden block text-2xl' onClick={toogleMenu}><img src={bars} alt="bars" className='h-[50px]' /></h2>
                </div>
                <div className="header-menu">
                    <ul className={`md:flex md:items-center bg-slate-800 md:bg-transparent transition ease-in-out px-12 pb-5 pt-3 duration-75 ${open ? 'md:block' : 'hidden'}`}>
                        <li>
                            <Link to="/" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">হোম</Link>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">আমাদের সম্পর্কে</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admission" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">ভর্তি প্রক্রিয়া</NavLink>
                        </li>
                        <li>
                            <NavLink to="/story" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">সাকসেস স্টোরি</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trainer" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">ইন্সট্রাক্টর</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/gallery" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">গ্যালারি</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/all-notice" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">নোটিশ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="text-gray-300 rounded-md px-3 py-2 text-[17px] block font-semibold">যোগাযোগ</NavLink>
                        </li>
                        <li>
                            <MdOutlineLightMode className="text-gray-300 rounded-md px-3 py-2 text-[46px] block font-semibold cursor-pointer" onClick={handleLightDark} />
                        </li>
                        <li className='relative'>
                            {
                                user?.email ?
                                    <div className="div relative">
                                        <span className='flex items-center gap-x-[2px] cursor-pointer relative' onClick={handleShowProfile}>
                                            <img src={user?.profile} alt="profile" className='h-8 w-8 rounded-full' /><GoTriangleDown className='text-gray-300' />
                                        </span>

                                        <div className={`absolute top-[60px] -left-[10px] rounded-lg bg-blue-500 dark:bg-pink-400 transition-all ease-in-out duration-75 ${isOpen ? 'md:block' : 'hidden'}`}>
                                            <div className="profile-design text-center">
                                                <img src={user?.profile} alt="profile" className='w-[50px] h-[50px] mx-auto rounded-full' />
                                                <h2 className="text-gray-300 text-[17px] my-2 font-semibold capitalize">{user?.userName}</h2>
                                            </div>
                                            <hr className='bg-gray-400' />
                                            <ul>
                                                <li>
                                                    <NavLink to="/profile" className="text-gray-300 rounded-md px-3 py-2 text-[14px] flex items-center font-semibold gap-x-[2px]"><AiOutlineUserAdd />প্রোফাইল</NavLink>
                                                </li>
                                                <hr className='bg-gray-400' />
                                                {
                                                    user?.role === 'admin' ?
                                                        <li>
                                                            <NavLink to="/dashboard" className="text-gray-300 rounded-md px-3 py-2 text-[15px] flex items-center  gap-x-[2px] font-semibold"><MdDashboard />ড্যাশবোর্ড</NavLink>
                                                        </li>
                                                        :
                                                        <li>
                                                            <NavLink to="/add-review" className="text-gray-300 rounded-md px-3 py-2 text-[14px] flex items-center font-semibold gap-x-[2px]"><AiOutlineUserAdd />রিভিউ দিন</NavLink>
                                                        </li>
                                                }

                                                <hr className='bg-gray-400' />
                                                <li>
                                                    <h3 className="text-gray-300 rounded-md px-3 py-2 text-[15px] cursor-pointer flex items-center font-semibold gap-x-[2px]" onClick={handlelogOut}><FiLogOut /> লগআউট</h3>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    :

                                    <NavLink to="/login" className="text-gray-300 rounded-md px-3 py-2 text-[17px] font-semibold bg-orange-500 flex items-center gap-x-[2px]"><AiOutlineUserAdd />লগইন</NavLink>
                            }
                        </li>

                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;