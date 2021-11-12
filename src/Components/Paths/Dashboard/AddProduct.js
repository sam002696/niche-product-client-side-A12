import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const onSubmit = (data) => {
        fetch("https://pacific-basin-31742.herokuapp.com/allCycles", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Package Successfully Added");
                }
                console.log(result)
            });
        console.log(data);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            <div>
                <h1 className='font-serif pt-10 text-3xl text-center text-gray-600 underline'>Add A New Product</h1>
            </div>
            <div className='lg:m-10 lg:mx-auto sm:w-auto lg:w-3/5'>
                <form className="flex flex-col mx-20 py-10 space-y-5 opacity-70" onSubmit={handleSubmit(onSubmit)}>


                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Cycle Name" defaultValue="" {...register("name")} />

                    <textarea className='border-2 p-3 rounded outline-none font-black text-2xl' rows='5' cols='45' placeholder="Cycle Description" defaultValue="" {...register("description")} />

                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Image URL" defaultValue="" {...register("img")} />

                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Cycle Price" defaultValue="" type='number' {...register("price")} />


                    <input className='border-2 hover:bg-green-400 hover:text-white p-3 ring-2 ring-gray-300 rounded text-gray-500 text-2xl font-black' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;