import React from 'react';
import AllCourses from './sections/courses-section/AllCourses';
import Hero from './sections/hero/hero';



const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <AllCourses></AllCourses>
        </div>
    );
};

export default HomePage;