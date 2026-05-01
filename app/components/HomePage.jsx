import React from 'react';
import CourseCard from './cards/CourseCard';

const HomePage = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/products')
    const data = await res.json()

    console.log(data);
    return (
        <div className='container mx-auto'>
            <div className="heading-intro text-center px-4 py-12 space-y-5">
                <h1 className='font-semibold text-3xl text-accent'>Level Up Yours Skills</h1>
                <p className='text-surface-alt leading-tight'>
                    Explore top courses, learn from industry experts, <br />
                    and build job-ready skills for your future.
                </p>
            </div>

            <div className='flex items-center justify-center gap-3 mb-8'>
                <div className="group w-[30%] relative">
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-surface-alt/60 transition-colors duration-300 group-focus-within:text-accent">
                        <svg className="h-[1.1em] w-[1.1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-full border border-white/10 bg-surface py-2.5 pl-10 pr-4 text-sm text-text placeholder:text-surface-alt/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    />
                </div>

                <div>
                    <button className="btn transition-colors duration-300 hover:border-accent hover:text-accent bg-surface border border-muted text-tertiary rounded-full">
                        Search
                    </button>
                </div>
            </div>

            <div className='course-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    data.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default HomePage;