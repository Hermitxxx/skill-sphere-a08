import React from 'react';
import InstructorCard from '../../cards/InstructorCard';
import tysonImg from '@/app/assets/tyson.jpg';
import rayannImg from '@/app/assets/chodhury.jpg';
import tomasImg from '@/app/assets/henten.jpg';

const instructors = [
    {
        name: "Tyson Lieberto",
        role: "UI / UX Designer",
        bio: "Tyson designs interfaces that are as functional as they are beautiful, and teaches you to do the same. 8 years in product across fintech and healthtech.",
        image: tysonImg,
    },
    {
        name: "Rayan Chaudhry",
        role: "AI / ML Engineer",
        bio: "Rayan teaches machine learning the way it works in production, not just on paper. Former quant, ex-YC startup ML lead.",
        image: rayannImg,
    },
    {
        name: "Tomás Ferreira",
        role: "Backend Developer",
        bio: "Tomás has built and broken systems at scale. He covers the fundamentals bootcamps always skip — databases, auth, and APIs that hold up.",
        image: tomasImg,
    },
]

const InstructorSec = () => {
    return (
        <div className='container mx-auto my-22'>
            <h1 className='text-center text-4xl font-semibold mb-8'>Meet Our Top Insturctors</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                {
                    instructors.map((ins, i) => <InstructorCard key={i} ins={ins}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default InstructorSec;