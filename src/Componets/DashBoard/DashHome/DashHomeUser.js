import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';

const DashHomeUser = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/auth/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data?.slice(0, 3)))
    }, [users])






    return (
        <section className='all-users-section overflow-hidden'>
            {
                users?.length === 0 ?
                    <>
                        <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'> এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>
                    </>
                    :

                    <div className='my-10'>
                        <h1 className='text-slate-950 text-[17px] font-semibold dark:text-white  mb-[10px]'> সমস্ত  <span className='text-rose-500'>ইউজারদের</span> তালিকাঃ</h1>

                        <div className="rounded-lg border border-gray-200 shadow-md  w-1/3 md:w-full">
                            <table className="w-full border-collapse bg-transparent dark:bg-gray-300 text-left text-sm text-gray-500">
                                <thead className="bg-gray-50">
                                    <tr className='text-center'>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">সিরিয়াল</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">ফটো</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">নাম</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">ইমেইল</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">স্ট্যাটাস</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.filter(item => {
                                            return item?.userName?.toLowerCase().includes(search)
                                        }).map((user, index) => {
                                            const { userName, profile, email, _id } = user;
                                            return (
                                                <tr className="hover:bg-rose-300 cursor-pointer transition ease-in-out shadow-xl duration-75 my-2" key={index}>
                                                    <td className="px-6 py-4 text-center text-slate-950 text-[20px]">{index + 1}</td>
                                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                        <div className="relative h-10 w-10">
                                                            <img
                                                                className="h-full w-full rounded-full object-cover object-center"
                                                                src={profile}
                                                                alt="profile"
                                                            />
                                                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                        </div>
                                                        <div className="text-sm">
                                                            <div className="font-medium text-gray-950 capitalize">{userName}</div>
                                                            <div className="text-gray-500">{email}</div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4 text-center text-[16px] capitalize text-slate-900">{userName}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-900">{email}</td>
                                                    <td className="px-6 py-4 text-center">
                                                        <span
                                                            className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                                        >
                                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                            Active
                                                        </span>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </section >
    );
};

export default DashHomeUser;