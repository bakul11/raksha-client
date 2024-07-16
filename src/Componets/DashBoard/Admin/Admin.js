import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';
import useActiveUser from '../../../Hooks/useActiveUser';

const Admin = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    const [user] = useActiveUser();
    const admin = user?.role === 'admin';
    const adminRoleId = user?._id;

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/auth/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    //Remove Single Users
    const handleRemoveAdmin = (id) => {
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


    // Make Admin 
    const handleMakeAdmin = (id) => {
        fetch(`${backendApi}/auth/makeAdmin/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("object", result);
                if (result?.success) {
                    toast.success(result?.message)
                } else {
                    if (result?.error) {
                        toast.error(result?.message)
                    }
                }
            })
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
                        <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white md:text-center mt-[140px] mb-[60px]'> অ্যাডমিন   <span className='text-rose-500'>অ্যাক্সেস</span></h1>
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
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">নাম</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">ইমেইল</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">স্ট্যাটাস</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">অ্যাডমিন</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">অ্যাকশন </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.filter(item => {
                                            return item?.userName?.toLowerCase().includes(search)
                                        }).map((user, index) => {
                                            const { userName, email, _id, role } = user;
                                            return (
                                                <tr className="hover:bg-gray-300 transition ease-in-out shadow-xl duration-75 my-2" key={index}>
                                                    <td className="px-6 py-4 text-center text-slate-950 text-[20px]">{index + 1}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] capitalize text-slate-900">{userName}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-900">{email}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-900">{role}</td>

                                                    <td className="px-6 py-4 text-center">
                                                        {
                                                            role === 'admin' ?
                                                                <button className='bg-rose-500 rounded-lg p-1 text-white disabled:'>অ্যাডমিন</button>
                                                                :
                                                                <button className='bg-blue-500 rounded-lg p-1 text-white' onClick={() => handleMakeAdmin(_id)}>অ্যাডমিন অ্যাক্সেস দিন</button>
                                                        }

                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        <FiTrash2 className='text-rose-500 cursor-pointer text-center text-[20px] mx-auto' onClick={() => handleRemoveAdmin(_id)} />
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
    )
};

export default Admin;