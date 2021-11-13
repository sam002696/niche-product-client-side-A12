import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-basin-31742.herokuapp.com/allCycles')
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [])
    const handleDeleteProduct = (id) => {
        const proceed = window.confirm("You sure you want to cancel booking?")

        console.log(id);
        if (proceed) {
            fetch(`https://pacific-basin-31742.herokuapp.com/allCycles/${id}`, {
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
                        const remainingProducts = manageProducts.filter(product => product._id !== id)
                        setManageProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="styling">
            <h1 className='font-mono m-11 text-5xl text-gray-600 text-center'>Manage Products</h1>
            <div className=" flex flex-col ">
                <div className="-my-2 sm:-mx-6 lg:-mx-8">
                    <div className=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className=" shadow border-b border-gray-200 sm:rounded-lg">
                            <table className=" min-w-full divide-y divide-indigo-200">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            Model Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {manageProducts.map((product) => (
                                        <tr key={product?._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-12 w-15 rounded-full" src={product?.img} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{product?.name}</div>

                                                        {/* <div className="text-sm text-white">{person.email}</div> */}

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product?.description}</div>
                                                {/* <div className="text-sm text-white">{person.department}</div> */}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Available
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{product?.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handleDeleteProduct(product?._id)} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;