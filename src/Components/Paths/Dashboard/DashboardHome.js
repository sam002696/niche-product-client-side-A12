import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user?.email &&
                <div>
                    <h1 className='border-b-4 font-bold mt-20 mx-auto pb-5 text-5xl text-center text-gray-600 w-2/4'>Welcome , {user.displayName}</h1>
                </div>
            }
        </div>
    );
};

export default DashboardHome;