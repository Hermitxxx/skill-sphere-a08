'use client'
import { ArrowRight } from 'lucide-react';
import React from 'react';
import hero from '../../../../public/hero-5.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/app/lib/auth-client';
import { motion } from "framer-motion";
import { Bounce, toast } from 'react-toastify';

const Hero = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const router = useRouter()

    function handleStartLearning() {
        if (user) {
            router.push(`/all-courses`)
        }
        else {
            router.push('/register')
            toast.error(`Register or login first to start learning`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className='container mx-auto px-4'>
            <div className='flex max-lg:flex-col max-lg:gap-10 gap-16 lg:gap-20 py-12 lg:py-20 justify-between min-h-[calc(100vh-12rem)] items-center'>
                {/* Text Content */}
                <div className="intro space-y-6 max-w-xl">
                    <h1 className='font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight'>
                        Learn New Skills <br />
                        With <span className='text-accent font-mono'>SkillSphere</span>
                    </h1>

                    <p className='text-base md:text-lg text-surface-alt/80 leading-relaxed max-w-md'>
                        Explore learning ecosystems building a connected learning experience.
                    </p>

                    <button onClick={handleStartLearning} className="group cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
                        <span>Start Learning</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Hero Image */}
                <div className="hero-image relative">
                    <div className="absolute -inset-4 bg-accent/10 rounded-xl blur-3xl" />
                    <Image
                        src={hero}
                        width={520}
                        height={520}
                        alt='hero'
                        className="relative rounded-2xl z-10 drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;