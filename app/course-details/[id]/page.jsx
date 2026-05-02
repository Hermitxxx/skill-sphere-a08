import { getCourseById } from '@/app/lib/data';
import Image from 'next/image';
import { ArrowLeft, Clock, User, Tag, BarChart3, Star } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const courseDetails = await getCourseById(id);

    if (!courseDetails) {
        notFound()
    }

    return (
        <div className="min-h-80vh">
            <div className="container mx-auto px-4 py-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-surface-alt hover:text-accent transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Back to courses</span>
                </Link>
            </div>

            <div className="container mx-auto px-4 pb-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src={courseDetails.image}
                                alt={courseDetails.title}
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-6">
                        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent">
                            {courseDetails.category}
                        </span>

                        <h1 className="text-3xl md:text-4xl font-display font-bold text-text leading-tight">
                            {courseDetails.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-surface-alt">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{courseDetails.instructor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{courseDetails.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" />
                                <span>{courseDetails.level}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-accent fill-accent" />
                                <span className="text-text font-medium">{courseDetails.rating}</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <h3 className="text-lg font-semibold text-text mb-3">About this course</h3>
                            <p className="text-surface-alt leading-relaxed">
                                {courseDetails.big_description}
                            </p>
                        </div>

                        <div className="pt-6">
                            <button className="w-full cursor-pointer sm:w-auto px-8 py-3.5 bg-accent text-bg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;