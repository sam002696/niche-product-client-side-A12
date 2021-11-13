import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        fetch("https://pacific-basin-31742.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (!data.modifiedCount) {
                    alert("Successfully Made the User Admin!")
                }
            });
        console.log(data);
    }

    return (
        <div>
            <h1 className='font-mono sm:m-5 lg:m-11 sm:text-3xl lg:text-5xl text-center text-gray-700'>Make An Admin</h1>
            <form className="booking-form flex flex-col sm:py-2 lg:py-5 space-y-5 sm:w-full lg:w-2/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>

                <input className='outline-none border-2 rounded p-2 text-blue-gray border-gray-700 text-2xl' placeholder="Email"
                    type="email" {...register("email", { required: true })} />


                <input className='border-2 bg-gray-600 hover:bg-green-600 hover:text-white p-2 ring-1 ring-gray-700 rounded text-white text-2xl font-mono' type="submit" />
            </form>

        </div>
    );
};

export default MakeAdmin;