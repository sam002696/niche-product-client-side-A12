import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className=" bg-gradient-to-r bg-teal-500 flex flex-wrap from-black items-center justify-between p-6 to-red-800">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-serif lg:flex-grow text-2xl">BICYCLE HUB</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">
                    <div className="font-serif lg:flex-grow text-2xl ">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Home
                        </Link>
                        <Link to='/products' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Cycles
                        </Link>
                        <Link to='/aboutus' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            About Us
                        </Link>

                        <Link to='/dashboard' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Dashboard
                        </Link>
                        {user?.email && user?.displayName && <p className='block text-yellow-400  hover:text-white lg:inline-block lg:mt-0 mr-2 mt-4 text-xl font-bold text-teal-200'>{user?.displayName}</p>}

                        {user?.email ? <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                            <button onClick={logOut} className='border-2 focus:ring-2 focus:ring-gray-400 hover:bg-black hover:text-white  p-1 rounded'> Log Out</button> </Link> :



                            <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                                <button className='border-2 focus:ring-2 focus:ring-gray-400 hover:bg-black hover:text-white p-1 rounded'>Login</button> </Link>}


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;