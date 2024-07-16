import React from 'react';
import Instractor from './Instractor/Instractor';
import Feedback from './Feedback/Feedback';
import Hero from './Hero/Hero';
import CourseBenefit from './CourseBenefit/CourseBenefit';
import Counter from './Counter/Counter';
import Admit from './Admit/Admit';
import FAQ from './FAQ/FAQ';
import HomeContact from './HomeContact/HomeContact';


const Home = () => {
    return (
        <section>
            <Hero />
            <CourseBenefit />
            <Counter />
            <Admit />
            <Instractor />
            <FAQ />
            <HomeContact />
            <Feedback />
        </section>
    );
};

export default Home;