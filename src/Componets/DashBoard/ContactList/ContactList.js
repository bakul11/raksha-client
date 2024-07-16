import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import { FiTrash2 } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import { toast } from 'react-toastify';

const ContactList = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    //load user api 
    useEffect(() => {
        fetch(`${backendApi}/contact/getAllContact`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])


    //Remove Single Users
    const handleRemoveContact = (id) => {
        const user = window.confirm('আপনি এই  ইউজারকে ডিলিট করতে চাচ্ছেন?');

        if (user) {
            fetch(`${backendApi}/contact/removeContact/${id}`, {
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
                        <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'>এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>
                    </>
                    :

                    <div className='my-24 px-12'>
                        <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center mt-[130px] mb-[40px]'> সমস্ত  <span className='text-rose-500'>ইউজারদের কন্টাক্ট </span> তালিকাঃ</h1>
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
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">মোবাইল </th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">বিষয়</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">সময়</th>
                                        <th scope="col" className="px-6 py-4 text-[17px] text-gray-500">অ্যাকশন </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.filter(item => {
                                            return item?.fullName?.toLowerCase().includes(search)
                                        }).map((user, index) => {
                                            const { fullName, email, _id, mobile, time, subject } = user;
                                            return (
                                                <tr className="hover:bg-orange-300 transition ease-in-out shadow-xl duration-75 my-2" key={index}>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">{index + 1}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950 capitalize">{fullName}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">{email}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">0{mobile}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">{subject}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">{time}</td>
                                                    <td className="px-6 py-4 text-center text-[16px] text-slate-950">
                                                        <FiTrash2 className='text-rose-500 cursor-pointer text-center mx-auto' onClick={() => handleRemoveContact(_id)} />
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

export default ContactList;