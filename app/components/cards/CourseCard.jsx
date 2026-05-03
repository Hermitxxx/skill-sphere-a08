'use client'
import { authClient } from '@/app/lib/auth-client';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Bounce, toast } from 'react-toastify';

export default function CourseCard({ course }) {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const router = useRouter()

    const handleDetails = () => {
        if (user) {
            router.push(`/course-details/${course.id}`)
        }

        if (!user) {
            toast.error('Login or signup to see details', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            router.push('/login')
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group rounded-xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/40 bg-surface"
        >
            <div className="relative w-full h-39.5 overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-base-300/90 via-base-300/20 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-accent/20 border border-accent/40 text-accent backdrop-blur-sm">
                    {course.level}
                </span>

                <span className="absolute top-3 right-3 text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-md bg-base-200/80 border border-white/10 text-surface-alt backdrop-blur-sm">
                    {course.category}
                </span>
            </div>

            {/* body here*/}
            <div className="p-4 flex flex-col gap-3">

                <h3 className="text-[15px] font-bold leading-snug tracking-tight line-clamp-2 text-text group-hover:text-accent transition-colors duration-300">
                    {course.title}
                </h3>

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                        <p className="text-[11.5px] text-tertiary">
                            {course.instructor}
                        </p>
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5">
                                <span className="text-accent text-xs">★</span>
                            </div>
                            <span className="text-[11px] font-semibold text-accent">
                                {course.rating}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock size={14} className='text-surface-alt/60'></Clock>
                        <span className="text-[11px] text-surface-alt/60">
                            {course.duration}
                        </span>
                    </div>
                </div>

                <p className="text-[12px] leading-relaxed line-clamp-2 text-surface-alt/80">
                    {course.description}
                </p>

                <button onClick={handleDetails} className="w-full cursor-pointer mt-1 py-2 text-[12px] font-semibold tracking-wide rounded-full border border-accent/30 text-accent bg-accent/5 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300">
                    See Details
                </button>
            </div>
        </motion.div>
    );
}