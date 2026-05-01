import { Anchor, Beef, Brain, ChartCandlestick, Fan, House, LucideOctagonX, Settings, SquareChevronRight, TrendingUp, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar gap-2 w-full bg-base-300">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <SquareChevronRight />
            </label>
            <div className="sm:px-4 whitespace-nowrap">
              <h1 className='font-semibold text-accent text-lg'>SkillSphere</h1>
            </div>

            <div className='flex items-center py-2 justify-end px-4 w-[90%] border border-amber-200'>
              <h1 className='text-primary'>item</h1>
              <h1 className='text-secondary'>item</h1>
              <h1 className='text-tertiary'>item</h1>
              <h1 className='text-accent'>item</h1>
              <h1 className='text-primary-content'>p-content</h1>
              <h1 className='text-secondary-content'>s-content</h1>
              <h1 className='text-neutral border border-amber-500'>item</h1>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            {children}
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-20 is-drawer-open:w-48">
            {/* Sidebar content here */}
            <ul className="menu w-full gap-5 pt-4 grow px-4">
              {/* List item */}
              <li>
                <Link href={`/`}>
                  <button className="is-drawer-close:tooltip flex items-center gap-2 is-drawer-close:tooltip-right" data-tip="Homepage">
                    {/* Home icon */}
                    <House></House>
                    <span className="is-drawer-close:hidden text-lg">Home</span>
                  </button>
                </Link>
              </li>

              <li>
                <Link href={`/courses`}>
                  <button className="is-drawer-close:tooltip flex items-center gap-2 is-drawer-close:tooltip-right" data-tip="Homepage">
                    <Brain />
                    <span className="is-drawer-close:hidden text-lg">Courses</span>
                  </button>
                </Link>
              </li>

              <li>
                <Link href={`/trending`}>
                  <button className="is-drawer-close:tooltip flex items-center gap-2 is-drawer-close:tooltip-right" data-tip="Homepage">
                    <TrendingUp />
                    <span className="is-drawer-close:hidden text-lg">Popular</span>
                  </button>
                </Link>
              </li>

              <li>
                <Link href={`/profile`}>
                  <button className="is-drawer-close:tooltip flex items-center gap-2 is-drawer-close:tooltip-right" data-tip="Settings">
                    <User />
                    <span className="is-drawer-close:hidden text-lg">Profile</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;