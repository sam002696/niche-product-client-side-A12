import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrdersStyling from './MyOrdersStyling';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://pacific-basin-31742.herokuapp.com/cycleBookings/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email])
    return (
        <div>
            <div>
                <h1 className='w-full italic underline  mt-5 mx-auto pb-5 sm:text-xl lg:text-4xl text-center text-gray-600'>List of your cycle Bookings</h1>
            </div>
            {/* my orders : {orders?.length} */}
            <div className="gap-8 grid lg:grid-cols-3 lg:p-10  sm:p-2" >
                {
                    orders.map(order => <MyOrdersStyling order={order} key={order._id}></MyOrdersStyling>)
                }
            </div>

        </div>
    );
};

export default MyOrders;