import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AddProduct from './AddProduct';
import DashboardHome from './DashboardHome';
import MakeAdmin from './MakeAdmin';
import ManageAllOrders from './ManageAllOrders';
import ManageProducts from './ManageProducts';
import MyOrders from './MyOrders';
import Pay from './Pay';
import Reviews from './Reviews';


const Dashboard = () => {
    const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://pacific-basin-31742.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);
    return (
        <div>
            <main className="flex w-full h-screen">
                <aside className="w-1/5 h-screen bg-gray shadow-md hidden sm:block">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm lg:flex lg:flex-col">
                            {user.email && <div className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300"> {user.displayName}
                            </div>}
                            <Link to={`${url}/pay`}>
                                <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                    Pay
                                </button>
                            </Link>
                            <Link to={`${url}/myorders`}>
                                <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                    My Orders


                                </button>
                            </Link>
                            <Link to={`${url}/reviews`}>
                                <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                    Reviews
                                </button>
                            </Link>
                            {isAdmin &&
                                <Link to={`${url}/makeadmin`}>
                                    <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                        Make Admin
                                    </button>
                                </Link>
                            }
                            {isAdmin &&
                                <Link to={`${url}/addsingleproduct`}>
                                    <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                        Add A Product
                                    </button>
                                </Link>
                            }
                            {isAdmin &&
                                <Link to={`${url}/manageproducts`}>
                                    <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                        Manage Products
                                    </button>
                                </Link>
                            }
                            {isAdmin &&
                                <Link to={`${url}/manageallorders`}>
                                    <button className="bg-gray-900 text-white p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-gray-700 hover:text-blue-300">

                                        Manage All Orders
                                    </button>
                                </Link>
                            }
                        </div>
                        {
                            <Link to="/login">
                                {/* <div className="flex bg-yellow-300 text-black p-3 rounded w-full mt-4 text-2xl cursor-pointer hover:bg-red-600 hover:text-white"> */}
                                <button onClick={logOut} className="rounded inline-flex items-center  bg-yellow-300 text-black p-3  w-full mt-4 text-2xl cursor-pointer hover:bg-red-600 hover:text-white">
                                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                                    <span className="font-semibold">Logout</span>
                                </button>
                                {/* </div> */}
                            </Link>
                        }

                    </div>
                </aside>

                <section className="w-4/5 p-4">
                    {/* <div className="w-full h-64 border-dashed border-4 p-4 text-md">Dashboard</div> */}
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route exact path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/reviews`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route exact path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/addsingleproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>

                        <Route exact path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>


                    </Switch>
                </section>

            </main>
        </div>
    );
};

export default Dashboard;