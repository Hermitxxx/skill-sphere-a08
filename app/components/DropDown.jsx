import { ArrowDown, Check } from 'lucide-react';
import React from 'react';
import { SiContentstack } from 'react-icons/si';

const DropDown = ({ c }) => {
    return (
        <details className="w-full">
            <summary className="btn justify-end bg-accent text-surface hover:opacity-70 transition-all">
                See Details
            </summary>
            <ul className="menu mt-3 w-full rounded-box bg-base-100 p-2 shadow-sm">
                <li>
                    <div className='flex items-center gap-1'>
                        <span className='text-accent'>✔</span>
                        <a>{c.content}</a>
                    </div>
                </li>
                <li>
                    <div className='flex items-center gap-1'>
                        <span className='text-accent'>✔</span>
                        <a>Duration : {c.duration}</a>
                    </div>
                </li>
            </ul>
        </details>
    );
};

export default DropDown;