import React, { useState, useEffect } from 'react';
import { MdCloudUpload } from 'react-icons/md'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { backendApi } from '../../BackendApi/BackendApi';
import { toast } from 'react-toastify';

const FileUpload = () => {
    const [image, setImage] = useState('');


    //Modal open and close 
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    //Submit Form
    const handleSubmitForm = async (e) => {
        e.preventDefault()

        const photo = {
            logo: image
        }

        // send data 
        fetch(`${backendApi}/gallery/gallUpload`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(photo)
        })
            .then(res => res.json())
            .then(data => {
                    console.log(data);
                if (data?.success) {
                    toast.success(data?.message)
                } else {
                    if (data?.error) {
                        toast.error(data?.message)
                    }
                }
            })

    }



    return (
        <div className='file-upload my-5 text-center p-5'>
            <button className='bg-gradient-to-r from-blue-800 to-green-800 text-white rounded-lg p-2 flex items-center justify-center gap-2' onClick={onOpenModal}><MdCloudUpload className='inline text-2xl' /> <span>ছবি আপলোড করুন</span></button>
            <Modal open={open} onClose={onCloseModal} center animationDuration='100'>
                <h2 className='text-center my-5 text-slate-950 text-[25px] dark:text-white'>ছবি আপলোড করুন</h2>

                <form onSubmit={handleSubmitForm} className='text-center'>
                    <input type="text" name="image" className=' placeholder:text-slate-900 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg block p-2 border-[1px] border-gray-500 w-full' placeholder='ছবির লিংক দিন' id='ee' onChange={(e) => setImage(e.target.value)} />
                    <input type="submit" value="আপলোড করুন" className='bg-rose-500 cursor-pointer rounded-lg p-2 mt-2 text-white ' />
                </form>
            </Modal>

        </div>
    );
};

export default FileUpload;