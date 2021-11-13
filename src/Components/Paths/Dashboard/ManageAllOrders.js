import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://pacific-basin-31742.herokuapp.com/cycleBookings')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const handleCancelBooking = (id) => {
        const proceed = window.confirm("You sure you want to cancel booking?")

        console.log(id);
        if (proceed) {
            fetch(`https://pacific-basin-31742.herokuapp.com/cycleBookings/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = allOrders.filter(booking => booking._id !== id)
                        setAllOrders(remainingUsers);
                    }
                })
        }

    }

    const handleBookingUpdate = (id) => {
        fetch(`https://pacific-basin-31742.herokuapp.com/cycleBookings/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Status Changed');
                    window.location.reload(false);
                }
            });
    }

    return (
        <div className="">
            <h1 className='font-mono m-5 italic underline sm:text-3xl lg:text-5xl text-center text-gray-600'>Manage All Orders</h1>

            {/* <!-- component --> */}
            <div className=" m-12 mx-auto rounded-3xl text-gray-900">

                <div className=" wrapper sm:px-0 sm:py-0 px-3 py-4 flex justify-center">
                    <table className=" text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                            <tr className="border-b">
                                <th className="p-5 text-left px-5 text-lg">Name</th>
                                <th className="p-5 text-left px-5 text-lg">Email</th>
                                <th className="p-5 text-left px-5 text-lg">Booking Place</th>
                                <th className="p-5 text-left px-5 text-lg">Phone No</th>
                                <th className="p-5 text-left px-5 text-lg">Status</th>
                                <th className="p-5 text-left px-5 text-lg">Delete</th>

                            </tr>
                            {allOrders.map(order =>
                            (<tr className="border-b hover:bg-orange-100 bg-gray-200">
                                <td className="p-5 text-lg px-5"><input type="text" value={order?.name} className="bg-transparent" /></td>
                                <td className="p-5 text-lg px-5"><input type="text" value={order?.email} className="bg-transparent" /></td>
                                <td className="p-5 text-lg px-5"><input type="text" value={order?.bookingDetails} className="bg-transparent" /></td>
                                <td className="p-5 text-lg px-5"><input type="text" value={order?.phone} className="bg-transparent" /></td>

                                <td className="p-5  px-5 flex justify-end"><button onClick={() => handleBookingUpdate(order?._id)} type="button" className="mr-3 text-lg bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline ">{order?.status}</button></td>
                                <td className='p-5'>
                                    <button onClick={() => handleCancelBooking(order?._id)} type="button" className="text-lg bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                            </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;