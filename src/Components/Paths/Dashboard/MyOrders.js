import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
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
            {/* my orders : {orders?.length} */}
            <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                {
                    orders.map(order => <MyOrdersStyling order={order} key={order._id}></MyOrdersStyling>)
                }
            </div>

        </div>
    );
};

export default MyOrders;