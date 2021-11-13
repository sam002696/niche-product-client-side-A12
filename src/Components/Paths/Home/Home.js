import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBooking from './HomeBooking';
import HomeReviews from './HomeReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faLifeRing, faUser, faBullseye } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';


const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://pacific-basin-31742.herokuapp.com/allCycles')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    useEffect(() => {
        fetch('https://pacific-basin-31742.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const bicycle = <FontAwesomeIcon icon={faBicycle} />
    const LifeRing = <FontAwesomeIcon icon={faLifeRing} />
    const User = <FontAwesomeIcon icon={faUser} />
    const Bullseye = <FontAwesomeIcon icon={faBullseye} />
    return (
        <div>
            {/* Banner */}
            <div className="" style={{
                backgroundImage: `url("https://www.bmc-switzerland.com/media/wysiwyg/BMC_Showroom_2021__DSC4714_1.jpg")`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                width: 'full',
                height: '1000px'

            }}>
                <div className='lg:flex lg:flex-row lg:pt-64 text-white p-10 rounded-3xl sm:flex-col-reverse sm:flex '>

                    <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 lg:w-7/12'>
                        <LightSpeed left>
                            <h1 className='font-bold text-5xl'>Best <span className=' text-black'>Cycling</span>, <span className='text-red-600'>Experience</span></h1>
                        </LightSpeed>




                        <p className='mt-10 text-2xl font-serif'>Phasellus eget condimentum nibh. Nunc id enim id velit commodo efficitur. Duis auctor, mauris in maximus cursus, purus neque ultricies velitVivamus a turpis nisi. Fusce feugiat feugiat congue in mauris id sollicitudin.</p>

                        <Link to='/products'> <button className=" bg-gradient-to-r from-red-400 to-black transition delay-150 duration-300 ease-in-out bg-white  border border-gray-400 font-semibold hover:bg-green-500 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 text-2xl ">
                            Explore
                        </button>
                        </Link>
                    </div>




                </div>
            </div>


            {/* extra section */}

            <div>
                <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 mx-10 mt-20 mb-10 lg:space-x-8 '>
                    <div className='col-span-1'>
                        <Fade left>
                            <h1 className='sm:font-black sm:mb-5 text-4xl text-center text-black'>Welcome To Our <span className='text-red-600'>BICYCLE HUB</span></h1>
                        </Fade>

                    </div>
                    <div className='col-span-2'>
                        <p className=' lg:text-left lg:w-11/12 sm:text-2xl sm:text-center text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div className='lg:grid lg:grid-cols-4  mx-20 sm:grid sm:grid-cols-1 sm:space-x-0 sm:space-y-11 lg:space-x-8'>

                    <div class="col-span-1 lg:mt-11 max-w-sm rounded overflow-hidden shadow-lg">
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
                            {bicycle}
                        </div>
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2 text-center">ALL BRANDS
                            </div>
                            <p class="text-gray-700 text-lg text-center py-4 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <button className='p-4 w-full bg-red-600 text-2xl text-white font-semibold hover:bg-black'>Read More</button>
                    </div>
                    <div class="col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-spin-slow'>
                            {LifeRing}
                        </div>
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2 text-center">FREE SUPPORT
                            </div>
                            <p class="text-gray-700 text-lg text-center py-4 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <button className='p-4 w-full bg-red-600 text-2xl text-white font-semibold hover:bg-black'>Read More</button>
                    </div>
                    <div class="col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-bounce-slow'>
                            {User}
                        </div>
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2 text-center">DEALERSHIP
                            </div>
                            <p class="text-gray-700 text-lg text-center py-4 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <button className='p-4 w-full bg-red-600 text-2xl text-white font-semibold hover:bg-black'>Read More</button>
                    </div>
                    <div class="col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
                        <div className='text-6xl text-center p-2 text-red-600 pt-5 animate-ping-slow'>
                            {Bullseye}
                        </div>
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2 text-center">AFFORDABLE
                            </div>
                            <p class="text-gray-700 text-lg text-center py-4 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <button className='p-4 w-full bg-red-600 text-2xl text-white font-semibold hover:bg-black'>Read More</button>
                    </div>


                </div>
            </div>

            {/* Cycles */}

            <div>
                <Roll left>
                    <h1 className='font-bold p-10 text-5xl text-center lg:mt-5'>FEATURED  <span className='text-red-500'>PRODUCTS</span> </h1>
                </Roll>



            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div>
                {
                    bookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                            {
                                bookings.slice(0, 6).map(booking => <HomeBooking booking={booking} key={booking._id}></HomeBooking>)
                            }
                        </div>
                }
            </div>

            {/* Reviews */}
            <div>
                <Roll right>
                    <h1 className='font-bold p-10 text-5xl text-center'>BEST <span className='text-red-500'>REVIEWS</span> </h1>

                </Roll>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-4 lg:p-36  sm:p-10">
                {
                    reviews.map(review => <HomeReviews review={review}
                        key={review._id}></HomeReviews>)
                }
            </div>
        </div>
    );
};

export default Home;