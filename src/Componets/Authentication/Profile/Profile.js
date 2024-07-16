import React from 'react';
import { Slide } from 'react-reveal';
import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';

const Profile = () => {
    return (
        <section className='overflow-hidden my-28'>
            <div className="container mx-auto">
                <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-x-1 gap-y-8 ">
                    <div className="profile-left">
                        <Slide left>
                            <ProfileLeft />
                        </Slide>
                    </div>
                    <div className="profile-right">
                        <Slide right>
                            <ProfileRight />
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;