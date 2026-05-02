
import React from 'react';
import CourseCard from '../../cards/CourseCard';
import { getPopular } from '@/app/lib/data';
import { ArrowRight } from 'lucide-react';

const popular = await getPopular()

const PopularCourses = () => {
    return (
        <div>
            <div className="heading-intro text-center px-4 pt-12 pb-10 space-y-5">
                <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl text-accent'>Level Up Yours Skills</h1>
                <p className='text-surface-alt leading-tight'>
                    Explore top courses, learn from industry experts, <br />
                    and build job-ready skills for your future.
                </p>
            </div>

            <div className="toggle-courses flex items-center justify-between gap-2 mb-5">
                <h1 className='text-lg sm:text-3xl font-medium text-tertiary'>Popular Courses</h1>
                <button className="group px-2 flex items-center gap-1 cursor-pointer bg-transparent text-accent border-0">
                    <span>View all</span>
                    <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' size={16}></ArrowRight>
                </button>
            </div>

            <div className='course-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {

                    popular.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;