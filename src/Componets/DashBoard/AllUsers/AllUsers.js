import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import { FiTrash2 } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import { toast } from 'react-toastify';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/auth/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])


    //Remove Single Users
    const handleDeleteUser = (id) => {
        const user = window.confirm('আপনি এই  ইউজারকে ডিলিট করতে চাচ্ছেন?');

        if (user) {
            fetch(`${backendApi}/auth/removeSingleUser/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        toast.success(result?.message)
                    } else {
                        if (result?.error) {
                            toast.error(result?.message)
                        }
                    }
                })
        }
    }



    return (
        <section className='all-users-section overflow-hidden'>
            {
                users?.length === 0 ?
                    <>
                        <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'> এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>
                    </>
                    :

                    <div className='my-24'>
                        <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white md:text-center mt-[140px] mb-[60px]'> সমস্ত  <span className='text-rose-500'>ইউজারদের</span> তালিকাঃ</h1>
                        {/* Search Box  */}
                        <div className="search-box relative flex items-center m-5">
                            <input type="text" placeholder='সার্চ করুন' className='rounded-xl p-1 bg-pink-700 relative placeholder-white' onChange={(e) => setSearch(e.target.value)} />
                            <BsSearch className='absolute left-[150px] text-white' />
                        </div>

                        <div className="rounded-lg border border-gray-200 shadow-md m-5 overflow-x-auto w-1/3 md:w-full">
                            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                <thead className="bg-gray-50">
                                    <tr className='text-center bg-slate-950'>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">সিরিয়াল</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">ফটো</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">নাম</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">ইমেইল</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">স্ট্যাটাস</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">অ্যাকশন </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.filter(item => {
                                            return item?.userName?.toLowerCase().includes(search)
                                        }).map((user, index) => {
                                            const { userName, profile, email, _id } = user;
                                            return (
                                                <tr className="hover:bg-gray-300 transition ease-in-out shadow-xl duration-75 my-2" key={index}>
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
                                                    <td className="px-6 py-4 text-center">
                                                        <FiTrash2 className='text-rose-500 cursor-pointer text-center text-[20px] mx-auto' onClick={() => handleDeleteUser(_id)} />
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

export default AllUsers;