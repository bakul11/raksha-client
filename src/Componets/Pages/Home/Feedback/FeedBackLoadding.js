import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeedBackLoadding = () => {
    return (
        <div className='feedbace-loader my-16 px-12'>
            <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-5">
                <div className="shadow-xl">
                    <Skeleton count={1} baseColor='#706fd3' duration='0.5' highlightColor='#d1ccc0' height='250px' borderRadius='10px' />
                </div>
                <div className="shadow-xl">
                    <Skeleton count={1} baseColor='#706fd3' duration='0.5' highlightColor='#d1ccc0' height='250px' borderRadius='10px' />
                </div>
                <div className="shadow-xl">
                    <Skeleton count={1} baseColor='#706fd3' duration='0.5' highlightColor='#d1ccc0' height='250px' borderRadius='10px' />
                </div>
                <div className="shadow-xl">
                    <Skeleton count={1} baseColor='#706fd3' duration='0.5' highlightColor='#d1ccc0' height='250px' borderRadius='10px' />
                </div>
            </div>

        </div>
    );
};

export default FeedBackLoadding;