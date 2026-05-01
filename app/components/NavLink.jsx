'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${pathname === href ? 'bg-text text-surface' : ''}`}>
            {children}
        </Link>
    );
};

export default NavLink;