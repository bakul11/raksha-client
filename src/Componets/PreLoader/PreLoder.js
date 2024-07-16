import React from 'react';
import logo from '../../images/preLogo.webp';
import logo2 from '../../images/homeLoader.gif';

const PreLoder = () => {
    return (
        <div className='text-center flex items-center justify-center  h-screen bg-slate-950'>
            <img src={logo} alt="logo" className='mx-auto h-[200px] my-[150px]' />
        </div>
    );
};

export default PreLoder;