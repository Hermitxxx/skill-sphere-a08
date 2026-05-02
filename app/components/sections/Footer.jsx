import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-text border-t border-white/10'>
            <div className='container mx-auto pt-16 px-4 sm:px-8 pb-8'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10'>

                    <div className='lg:col-span-2 space-y-4'>
                        <h1 className='text-3xl font-display font-extrabold text-text'>SkillSphere</h1>
                        <p className='text-surface-alt/50 text-sm leading-relaxed'>
                            Empowering learners worldwide with structured courses, real-world skills, and a connected learning experience.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-text'>Product</h3>
                        <ul className='space-y-3 text-surface-alt/50 text-sm'>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Features</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Pricing</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Templates</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Integrations</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-text'>Company</h3>
                        <ul className='space-y-3 text-surface-alt/50 text-sm'>
                            <li className='hover:text-accent cursor-pointer transition-colors'>About</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Blog</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Careers</li>
                            <li className='hover:text-accent cursor-pointer transition-colors'>Press</li>
                        </ul>
                    </div>

                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-text'>Resources</h3>
                            <ul className='space-y-3 text-surface-alt/50 text-sm'>
                                <li className='hover:text-accent cursor-pointer transition-colors'>Documentation</li>
                                <li className='hover:text-accent cursor-pointer transition-colors'>Help Center</li>
                                <li className='hover:text-accent cursor-pointer transition-colors'>Community</li>
                                <li className='hover:text-accent cursor-pointer transition-colors'>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-semibold text-text'>Social Links</h3>
                        <div className='flex gap-3'>
                            <div className='bg-white/10 hover:text-accent hover:border hover:border-accent cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaInstagram></FaInstagram>
                            </div>
                            <div className='bg-white/10 hover:text-accent hover:border hover:border-accent cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaFacebook></FaFacebook>
                            </div>
                            <div className='bg-white/10 hover:text-accent hover:border hover:border-accent cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaTwitter></FaTwitter>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-surface-alt/40 text-sm'>
                    <p>© 2026 SkillSphere. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <span className='hover:text-accent cursor-pointer transition-colors'>Privacy Policy</span>
                        <span className='hover:text-accent cursor-pointer transition-colors'>Terms of Service</span>
                        <span className='hover:text-accent cursor-pointer transition-colors'>Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;