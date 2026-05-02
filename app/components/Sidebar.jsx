'use client'
import { Anchor, Beef, Brain, BrainCircuitIcon, ChartCandlestick, Fan, House, LogIn, LogOut, LucideOctagonX, Menu, Settings, SquareChevronRight, TrendingUp, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import Footer from './sections/Footer';
import { authClient } from '../lib/auth-client';
import { useRouter } from 'next/navigation';

const Sidebar = ({ children }) => {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  const handleLogOut = async () => {

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  }
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          {/* Navbar */}
          <nav className='flex items-center gap-1 sm:gap-2 py-3 border-b border-surface-alt sticky top-0 z-20 backdrop-blur-md'>
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <Menu className='text-surface-alt' />
            </label>

            <div className='flex items-center justify-between w-full'>
              <div className="logo flex items-center gap-1">
                <Anchor />
                <h1 className='font-semibold text-lg sm:text-xl text-tertiary'>SkillSphere</h1>
              </div>

              <div className="buttons flex items-center gap-4 px-2 sm:px-6">
                { isPending ? <span className='text-accent text-sm'>Loading...</span> :
                  user ?
                    <>
                      <div className="profile">
                        <Image src={`/globe.svg`} alt='user' width={24} height={24}></Image>
                      </div>

                      <button onClick={handleLogOut} className="btn bg-primary text-surface rounded-full">
                        <span>Log out</span>
                      </button>
                    </> :
                    <button className="btn bg-primary text-surface rounded-full">
                      <span>Log in</span>
                    </button>
                }
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            {children}
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible z-50">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-20 is-drawer-open:w-48">
            {/* Sidebar content here */}
            <ul className="menu w-full gap-5 pt-4 grow px-4">
              {/* List item */}
              <li>
                <NavLink href={`/`}>
                  <button className="flex items-center gap-2">
                    {/* Home icon */}
                    <House></House>
                    <span className="is-drawer-close:hidden text-lg">Home</span>
                  </button>
                </NavLink>
              </li>

              <li>
                <NavLink href={`/all-courses`}>
                  <button className="flex items-center gap-2">
                    <Brain />
                    <span className="is-drawer-close:hidden text-lg">Courses</span>
                  </button>
                </NavLink>
              </li>

              <li>
                <NavLink href={`/trending`}>
                  <button className="flex items-center gap-2">
                    <TrendingUp />
                    <span className="is-drawer-close:hidden text-lg">Popular</span>
                  </button>
                </NavLink>
              </li>

              <li>
                <NavLink href={`/profile`}>
                  <button className="flex items-center gap-2">
                    <User />
                    <span className="is-drawer-close:hidden text-lg">Profile</span>
                  </button>
                </NavLink>
              </li>

              <li>
                <button className="is-drawer-close:tooltip rounded-full bg-primary text-surface flex items-center gap-2 is-drawer-close:tooltip-right" data-tip="Settings">
                  <LogOut />
                  <span className="is-drawer-close:hidden text-lg">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;