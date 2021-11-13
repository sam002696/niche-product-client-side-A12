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
                <h1 className='font-serif pt-10 sm:text-2xl lg:text-3xl text-center text-gray-600 underline'>Add A New Product</h1>
            </div>
            <div>
                <form className="flex flex-col mx-auto py-10 space-y-5 opacity-70 sm:w-full lg:w-3/5" onSubmit={handleSubmit(onSubmit)}>


                    <input className='outline-none border-2 border-gray-600 rounded sm:p-1 lg:p-3 sm:text-md  lg:text-2xl' placeholder="Cycle Name" defaultValue="" {...register("name")} />

                    <textarea className='border-2 sm:p-1 lg:p-3 sm:text-md border-gray-600 lg:text-2xl rounded outline-none' rows='5' cols='45' placeholder="Cycle Description" defaultValue="" {...register("description")} />

                    <input className='outline-none border-2 border-gray-600 rounded sm:p-1 lg:p-3 sm:text-md  lg:text-2xl' placeholder="Image URL" defaultValue="" {...register("img")} />

                    <input className='outline-none border-2 border-gray-600 rounded sm:p-1 lg:p-3 sm:text-md  lg:text-2xl' placeholder="Cycle Price" defaultValue="" type='number' {...register("price")} />


                    <input className='border-1 bg-gray-700 hover:bg-green-600 hover:text-white sm:p-2 lg:px-3 lg:py-5 font-mono ring-2 ring-gray-400 rounded text-white text-xl' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;