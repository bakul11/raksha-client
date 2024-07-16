import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollRebot = () => {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])
};

export default ScrollRebot;