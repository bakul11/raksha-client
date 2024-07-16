import React, { useEffect, useState } from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from 'react-toastify';
import useActiveUser from '../../../Hooks/useActiveUser';
import { useNavigate } from 'react-router-dom';
import { TiArrowRightOutline } from 'react-icons/ti';









const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        ['bold', 'italic', 'underline', 'strike'],                                                      // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],                                                       // superscript/subscript
        [{ 'direction': 'rtl' }],                                                                         // text direction,

        [{ 'color': [] }, { 'background': [] }],                                                            // dropdown with defaults from theme

        ['link', 'image', 'video'],

        ['clean']
    ],
}


const Notice = () => {
    const [disc, setDisc] = useState('');
    const [title, setTitle] = useState('');
    const [user] = useActiveUser();

    const navigate = useNavigate();
    const date = new Date().toDateString();

    //Submit Data 
    const handleNoticeData = async (e) => {
        e.preventDefault();
        const sendData = {
            title: title,
            disc: disc,
            date: date,
            photo: user?.profile,
            name: user?.userName
        }

        //send data in db 
        await fetch(`${backendApi}/notice/postNotice`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result);
                if (result?.success) {
                    toast.success(result?.message);
                    navigate('/all-notice')
                } else {
                    if (result?.error) {
                        toast.error(result?.message)
                    }
                }
            }).catch(err => {
                toast.error('ছবির এমবি খুব বেশি,অনুগ্রহ করে কম এমবির ছবি আপলোড করুন')
            })



    }




    return (
        <section className='notice-section overflow-hidden my-16'>
            <div className="container mx-auto p-4 my-12 shadow-xl rounded-xl">
                <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> নোটিশ <span className='text-rose-500'>পাবলিশ </span> করুন</h1>
                <div className="notice-extra">
                    <form onSubmit={handleNoticeData}>
                        <div className="form2">
                            <label htmlFor="title" className='font-semibold text-slate-950 dark:text-white text-[17px]'>টাইটেল </label>
                            <input type="text" placeholder='টাইটেল লিখুন ' id="title" onChange={(e) => setTitle(e.target.value)} className='placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' required />
                        </div>
                        <div className="form2">
                            <ReactQuill
                                theme="snow"
                                style={{ height: "400px", overflow: "auto" }}
                                disc={disc}
                                onChange={setDisc}
                                className='py-5'
                                modules={modules} />
                        </div>
                        <div className="notice-form1 my-4">
                            <button className='bg-pink-500 hover:bg-red-500 text-white rounded-full p-2 flex items-center gap-2  font-semibold'><h2>পাবলিশ করুন</h2> <TiArrowRightOutline /></button>
                        </div>

                    </form>
                </div>
            </div>
        </section >
    );
};

export default Notice;