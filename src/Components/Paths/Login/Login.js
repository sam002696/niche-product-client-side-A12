import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
    const [toggle, setToggle] = useState(false);
    const { googleSignIn, userWithEmailandPassword, setEmail,
        setPassword, signWithEmailandPassword, user, error, setName } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';

    const handleEmailSign = (e) => {
        signWithEmailandPassword()
            .then(result => {
                history.push(redirect)
            });
        e.preventDefault();
    }
    const handleEmailRegister = (e) => {
        userWithEmailandPassword()
            .then(result => {
                history.push(redirect);

            });
        // .then(data => {
        //     window.location.reload(true);
        // });
        // window.location.reload();
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect)
            });

    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    }



    const toggleLogin = (e) => {
        setToggle(e.target.checked);
        console.log(e.target.value);
    }

    const email = (e) => {
        setEmail(e.target.value);
    }
    const password = (e) => {
        setPassword(e.target.value);
    }
    const element = <FontAwesomeIcon icon={faGoogle} />
    // const bicycle = <FontAwesomeIcon icon={faBicycle} />
    return (
        <div>
            <div className="bg-gray-200 flex items-center justify-center min-h-screen lg:p-10 sm:p-0">
                <div className="bg-white p-16 rounded shadow-lg sm:w-11/12 lg:w-2/3">

                    {user.email && toggle && <p className='border-b-2 border-blue-300 font-bold mb-10 mx-auto pb-11 text-4xl text-center text-green-400 w-1/2'>Registration Successful</p>}


                    <h2 className="text-3xl font-bold mb-10 text-gray-800">Please {toggle ? 'Register' : 'Login'}</h2>

                    {toggle ? <form onSubmit={handleEmailRegister} className="space-y-5">
                        <div>
                            <label htmlFor='inputName' className="block mb-1 font-bold text-gray-500">Name</label>
                            <input onBlur={handleNameChange} id='inputName' type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Email</label>
                            <input onBlur={email} type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required />
                        </div>

                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Password</label>
                            <input onBlur={password} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required />
                        </div>



                        {
                            error && <div className='italic p-0.5 text-2xl text-red-600 underline'>
                                <p>Email Already Exists</p>
                            </div>
                        }

                        <button type='submit' className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 font-semibold"> {toggle ? 'Register' : 'Login'} </button>


                    </form>
                        :
                        <form onSubmit={handleEmailSign} className="space-y-5">
                            {/* <div>
                                <label htmlFor='inputName' className="block mb-1 font-bold text-gray-500">Name</label>
                                <input id='inputName' type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                            </div> */}
                            <div>
                                <label className="block mb-1 font-bold text-gray-500">Email</label>
                                <input onBlur={email} type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required />
                            </div>

                            <div>
                                <label className="block mb-1 font-bold text-gray-500">Password</label>
                                <input onBlur={password} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required />
                            </div>

                            {/* <div className="flex items-center">
                                <input onClick={toggleLogin} type="checkbox" id="agree" />
                                <label htmlFor="agree" className="ml-2 text-gray-700 text-sm cursor-pointer">Not Registered?</label>
                            </div> */}

                            {
                                error && <div className='italic p-0.5 text-2xl text-red-600 underline'>
                                    <p>Invalid Password!</p>
                                </div>
                            }

                            <button type='submit' className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 font-semibold"> {toggle ? 'Register' : 'Login'} </button>

                        </form>
                    }
                    <div className=" flex items-center lg:pt-5 sm:pt-5">
                        <input onClick={toggleLogin} type="checkbox" id="agree" />
                        <label htmlFor="agree" className="ml-2 text-gray-700 text-sm cursor-pointer">Not Registered?</label>
                    </div>
                    <div className='flex items-center justify-between mt-3 mx-auto w-2/3'>
                        <hr className='border-2 rounded-full w-2/3' /> <span className='font-medium m-10 text-2xl text-center text-gray-400'>OR</span><hr className='border-2 rounded-full w-2/3' />
                    </div>
                    <div className='text-center'>
                        <div className='bg-red-600 border-2 hover:ring-4 mb-3 mx-auto p-3 ring-2 ring-red-400 rounded sm:w-11/12 lg:w-1/3'>
                            <button onClick={handleGoogleSignIn} className='flex font-semibold items-center mx-auto text-white'> <span className='mx-2 text-2xl'>{element}</span> Google Sign In</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;