import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaHandPointRight } from 'react-icons/fa';


const HeroModal = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div className='rounded-lg p-2'>
            <button className='bg-gradient-to-r from-pink-500 to-rose-800 text-white rounded-xl p-2 flex transition ease-in-out duration-75 items-center gap-2 hover:from-red-500 hover:to-orange-500' onClick={onOpenModal}><MdSlowMotionVideo className='inline text-2xl' /> <span>কোর্সের ইন্ট্রো ভিডিও দেখুন</span> <FaHandPointRight className='inline text-white' /></button>

            <Modal open={open} onClose={onCloseModal} center animationDuration='100'>
                <h2 className='text-2xl font-semibold pb-2 text-slate-950'>কোর্সের ইন্ট্রো ভিডিও দেখুন</h2>
                <iframe height="415" className="w-full aspect-video" src="https://www.youtube.com/embed/WjTLohz8OhE?start=7" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Modal>


        </div>
    );
};

export default HeroModal;