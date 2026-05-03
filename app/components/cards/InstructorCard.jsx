'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const InstructorCard = ({ ins }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }} className="group rounded-xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/40 bg-surface">

            <div className="relative w-full h-56.5 overflow-hidden">
                <Image
                    src={ins.image}
                    alt='instructor'
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-base-300/90 via-base-300/20 to-transparent" />
            </div>

            {/* body here*/}
            <div className="p-4 flex flex-col gap-3">

                <div className='pb-4 border-b border-surface-alt'>
                    <h3 className="font-bold leading-snug tracking-tight line-clamp-2 text-text group-hover:text-accent transition-colors duration-300">
                        {ins.name}
                    </h3>

                    <p className='text-xs text-accent font-mono font-bold'>
                        {ins.role}
                    </p>
                </div>


                <p className="text-[12px] leading-relaxed text-surface-alt/80">
                    {ins.bio}
                </p>

                <div className='flex items-center gap-2 text-accent'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaLinkedin></FaLinkedin>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorCard;