'use client'
import React from 'react';
import { authClient } from '../lib/auth-client';
import { Card } from '@heroui/react';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import UserUpdateModal from '../components/UserUpdateModal';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    console.log(user);
    return (
        <div className='mt-10'>
            <Card className='max-w-96 mx-auto'>
                <div className="items-center gap-3 p-8 flex flex-col text-center">
                    {user?.image ? (
                        <Image
                            src={user?.image ? user.image : 'https://robohash.org/eumquaecum.png?size=250x250&set=set1'}
                            alt="user"
                            width={80}
                            height={80}
                            className="rounded-full justify-center"
                        />
                    ) : (
                        <FaUserCircle size={40} />
                    )}

                    <div className='space-y-2'>
                        <p className='font-bold text-[#5a00ff] text-xl'>{user?.name || 'Guest User'}</p>
                        <p className="text-sm text-gray-500 mb-4">
                            {user?.email || 'No email'}
                        </p>
                    </div>

                    <UserUpdateModal></UserUpdateModal>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;