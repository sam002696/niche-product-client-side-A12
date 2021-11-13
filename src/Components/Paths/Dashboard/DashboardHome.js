import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user?.email &&
                <div>
                    <h1 className='w-full border-b-4 font-bold  mt-20 mx-auto pb-5 sm:text-3xl lg:text-5xl text-center text-indigo-600'>Welcome To DashBoard, {user.displayName}</h1>
                </div>
            }
        </div>
    );
};

export default DashboardHome;