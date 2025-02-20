import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer />
      </div>
    );
};

export default Main;