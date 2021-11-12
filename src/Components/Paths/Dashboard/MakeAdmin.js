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
                if (data.modifiedCount) {
                    alert("Successfully Made the User Admin!")
                }
                else {
                    alert("admin already exists");
                }
            });
        console.log(data);
    }

    return (
        <div>
            <h1 className='font-black m-11 text-5xl text-center text-gray-600'>Make Admin</h1>
            <form className="booking-form flex flex-col  py-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>

                <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Email"
                    type="email" {...register("email", { required: true })} />


                <input className='border-2 hover:bg-green-400 hover:text-white p-3 ring-2 ring-gray-300 rounded text-gray-500 text-2xl font-black' type="submit" />
            </form>

        </div>
    );
};

export default MakeAdmin;