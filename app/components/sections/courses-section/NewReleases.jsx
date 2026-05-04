
import React from 'react';
import CourseCard from '../../cards/CourseCard';
import { getNewReleases, getPopular } from '@/app/lib/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const newReleases = await getNewReleases()

const NewReleases = () => {
    return (
        <div>
            <div className="toggle-courses flex items-center justify-between gap-2 mb-5">
                <h1 className='text-lg sm:text-3xl font-medium text-tertiary'>🔥 New Releases</h1>
                <Link href={`/all-courses`}>
                    <button className="group px-2 flex items-center gap-1 cursor-pointer bg-transparent text-accent border-0">
                        <span>View all</span>
                        <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' size={16}></ArrowRight>
                    </button>
                </Link>
            </div>

            <div className='course-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {

                    newReleases.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default NewReleases;