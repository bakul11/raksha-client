import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SlideBar from './SlideBar/SlideBar';
import './SlideBar/SlideBar.css'
import useActiveUser from '../../Hooks/useActiveUser';
import { toast } from 'react-toastify';

const DashBoard = () => {
    const [user] = useActiveUser();
    const navigate = useNavigate();

    if (user?.role === 'user') {
        localStorage.removeItem('token');
        navigate('/login');
        toast.error('You have no access');
    }

    return (
        <section className='dashboard'>
            <div className="flex gap-x-5 overflow-hidden">
                <div className="slide-left">
                    <SlideBar />
                </div>
                <div className="dash-right col-span-2 w-full px-12">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default DashBoard;