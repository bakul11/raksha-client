import React, { useEffect, useState } from 'react';
import { BsArrowDownUp } from 'react-icons/bs'
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { backendApi } from '../../BackendApi/BackendApi';


const Gallery = () => {
    const [photo, setPhoto] = useState([]);
    const [showPhoto, setShowPhoto] = useState(false);


    // load Photo API 
    useEffect(() => {
        fetch(`${backendApi}/gallery/getAllGallPhoto`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, [photo])

    //Handle Show More 
    const handleShowMore = () => {
        setShowPhoto(!showPhoto)
    }

    return (
        <section className='gallrey-section overflow-hidden'>
            <div className="container mx-auto py-[100px] px-[20px] mt-[50px]">
                <div className="feedback-title text-center mb-[100px]">
                    <RubberBand>
                        <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'> আমাদের  <span className='text-rose-500'> গ্যালারী</span> ফটো</h1>
                        <h2 className='text-[#1F2937] dark:text-gray-400 text-[20px] font-medium'>আমাদের বিভিন্ন ইভেন্ট এবং ক্লাস রুমের ফটো</h2>
                    </RubberBand>
                </div>
                <div className="gallarey-main">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-x-5 gap-y-8">
                        <React.Fragment>
                            {
                                showPhoto ?

                                    photo?.map((galPhoto, index) => {
                                        const { logo } = galPhoto;
                                        return (

                                            <PhotoProvider
                                                loop={true}
                                                speed={() => 800}
                                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

                                            >
                                                <div className="rounded-2xl">
                                                    <Zoom>
                                                        <PhotoView key={index} src={logo}>
                                                            <img src={logo} alt="" className='h-[300px] cursor-pointer mx-auto rounded-2xl transition ease-in-out duration-75 hover:grayscale' />
                                                        </PhotoView>
                                                    </Zoom>
                                                </div>
                                            </PhotoProvider>

                                        )
                                    }) :
                                    photo?.slice(0, 9).map((galPhoto, index) => {
                                        const { logo } = galPhoto;
                                        return (
                                            <PhotoProvider
                                                loop={true}
                                                speed={() => 800}
                                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

                                            >
                                                <div className="rounded-2xl">
                                                    <Zoom>
                                                        <PhotoView key={index} src={logo}>
                                                            <img src={logo} alt="" className='h-[300px] cursor-pointer mx-auto rounded-2xl transition ease-in-out duration-75 hover:grayscale' />
                                                        </PhotoView>
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

                                <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showPhoto)}>আর নেই  উপরে যান   <BsArrowDownUp /></button>
                                :
                                <button className='bg-gradient-to-r from-yellow-600 to-pink-500 text-white rounded-full p-2 flex items-center gap-2 justify-center mx-auto  font-semibold' onClick={() => handleShowMore(!showPhoto)}>আরো দেখুন  <BsArrowDownUp /></button>
                        }
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Gallery;