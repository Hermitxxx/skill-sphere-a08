import React from 'react';
import AllCourses from './sections/courses-section/AllCourses';
import Hero from './sections/hero/hero';
import PopularCourses from './sections/courses-section/PopularCourses';
import InstructorSec from './sections/instructor-section/InstructorSec';
import LearningTips from './LearningTips';



const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <PopularCourses></PopularCourses>
            <InstructorSec></InstructorSec>
            <LearningTips></LearningTips>
        </div>
    );
};

export default HomePage;