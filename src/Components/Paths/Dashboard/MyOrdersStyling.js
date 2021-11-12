import React from 'react';

const MyOrdersStyling = (props) => {
    const { name, image, bookingDetails, status, phone, email, city } = props.order;
    return (
        <div>
            <figure className="bg-gray-100 rounded-xl p-8">
                <img className="  mx-auto" src={image} alt="" width="384" height="512" />
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                        <p className="text-lg font-semibold">
                            {bookingDetails}
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            {name}
                        </div>
                        <div className="text-gray-500">
                            {email}
                        </div>
                        <div className="text-gray-500">
                            {phone}
                        </div>
                        <div className="text-gray-500">
                            {city}
                        </div>
                        <p className="bg-yellow-200 border-2 font-medium hover:line-clamp-none line-clamp-2 mt-1 p-3 rounded-3xl text-base text-gray-600 sm:w-2/3 sm:mx-auto lg:w-auto ">Booking Status : {status} </p>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default MyOrdersStyling;