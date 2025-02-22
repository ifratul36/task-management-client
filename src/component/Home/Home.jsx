import React from 'react';
import TaskSuccess from '../TaskSuccess/TaskSuccess';
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className='md:max-w-[90%] mx-auto'>
            <Banner />
            <TaskSuccess />
        </div>
    );
};

export default Home;