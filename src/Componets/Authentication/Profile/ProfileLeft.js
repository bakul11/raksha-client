import React from 'react';
import useActiveUser from '../../../Hooks/useActiveUser';

const ProfileLeft = () => {
    const [user] = useActiveUser();
    return (
        <div className='shadow-inner box-border shadow-gray-400 rounded-lg  dark:bg-slate-800 p-2 md:w-1/2 md:mx-auto'>
            <div className="profile-detaile">
                <img src={user?.profile} alt="profile" className='w-[100px] h-[100px] rounded-full mx-auto my-2' />
                <h2 className='text-slate-950 dark:text-white text-[20px] font-medium text-center capitalize'>{user?.userName}</h2>
                <div className="divide divide-y divide-gray-400">
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>Email Address :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.email}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>Address :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.address}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>Mobile :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.phone}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>ocupation :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.occupation}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>City :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.city}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>ZipCode :</span>
                        <span className='text-slate-950 dark:text-gray-400 text-[17px]'>{user?.zipcode}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLeft;