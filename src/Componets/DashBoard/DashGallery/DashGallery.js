import React from 'react';
import { backendApi } from '../../BackendApi/BackendApi';
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import { useState } from 'react';
import { useEffect } from 'react';
import { BsArrowDownUp } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { toast } from 'react-toastify';
import FileUpload from './FileUpload';

const DashGallery = () => {
    const [photo, setPhoto] = useState([]);
    const [showPhoto, setShowPhoto] = useState(false);


    // load Photo API 
    useEffect(() => {
        fetch(`${backendApi}/gallery/getAllGallPhoto`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setPhoto(data);
            })
    }, [photo])

    //Handle Show More 
    const handleShowMore = () => {
        setShowPhoto(!showPhoto)
    }


    //Handle Remove Photo 
    const handleRemovePhoto = (id) => {
        const user = window.confirm('আপনি এই  ছবি ডিলিট করতে চাচ্ছেন?');

        if (user) {
            fetch(`${backendApi}/gallery/removeGallPhoto/${id}`, {
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
        <section className='gallrey-section overflow-hidden'>
            {
                photo?.length === 0 ?
                    <>
                        <h2 className='text-center text-salte-950 dark:text-gray-200 font-semibold text-[20px] my-24'> এই মুহূর্তে কোন ডাটা পাওয়া যায়নি</h2>
                    </>
                    :

                    <div className="container mx-auto py-[100px] px-[20px] mt-[50px]">
                        <div className="feedback-title text-center mb-[10px]">
                            <RubberBand>
                                <h1 className='text-slate-950 text-[25px] font-semibold dark:text-white text-center'> আমাদের  <span className='text-rose-500'>গ্যালারী</span> ফটো</h1>
                            </RubberBand>
                        </div>
                        {/* =============File Upload Componets============= */}
                        <FileUpload />
                        {/* =============File Upload Componets============= */}
                        <div className="gallarey-main">
                            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-x-5 gap-y-8">
                                <React.Fragment>
                                    {
                                        showPhoto ?

                                            photo?.map((galPhoto, index) => {
                                                const { logo, _id } = galPhoto;
                                                return (

                                                    <PhotoProvider
                                                        loop={true}
                                                        speed={() => 800}
                                                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

                                                    >
                                                        <div className="rounded-2xl">
                                                            <Zoom>
                                                                <PhotoView key={index} src={logo}>
                                                                    <img src={logo} alt="" className='h-[150px] w-[400px] cursor-pointer mx-auto rounded-2xl transition ease-in-out duration-75 hover:grayscale' />
                                                                </PhotoView>
                                                                <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 rounded-lg gap-x-2 p-2 text-white justify-center text-[12px] mx-auto my-2" onClick={() => handleRemovePhoto(_id)}> <FaRegTrashAlt />ছবি ডিলিট করুন  </button>
                                                            </Zoom>
                                                        </div>
                                                    </PhotoProvider>
                                                )
                                            }) :
                                            photo?.slice(0, 9).map((galPhoto, index) => {
                                                const { logo, _id } = galPhoto;
                                                return (
                                                    <PhotoProvider
                                                        loop={true}
                                                        speed={() => 800}
                                                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

                                                    >
                                                        <div className="rounded-2xl">
                                                            <Zoom>
                                                                <PhotoView key={index} src={logo}>
                                                                    <img src={logo} alt="" className='h-[150px]  w-[400px] cursor-pointer mx-auto rounded-2xl transition ease-in-out duration-75 hover:grayscale' />
                                                                </PhotoView>
                                                                <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 rounded-lg gap-x-2 p-2 text-white justify-center text-[12px] mx-auto my-2" onClick={() => handleRemovePhoto(_id)}> <FaRegTrashAlt />ছবি ডিলিট করুন </button>
                                                            </Zoom>
                                                        </div>
                                                    </PhotoProvider>
                                                )
                                            })
                                    }
                                </React.Fragment>
                            </div>
                            <div className="more-btn text-center my-[25px]">
                                {
                                    showPhoto ?
                                        <>
                                            <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showPhoto)}>আর নেই  উপরে যান   <BsArrowDownUp /></button>
                                        </>
                                        :
                                        <>
                                            <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showPhoto)}>আরো দেখুন  <BsArrowDownUp /></button>
                                        </>
                                }
                            </div>

                        </div >
                    </div >
            }
        </section >
    );
};

export default DashGallery;