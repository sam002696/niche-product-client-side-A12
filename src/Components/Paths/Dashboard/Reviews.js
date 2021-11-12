import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
// import DatePicker from "react-datepicker";

const Reviews = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch("https://pacific-basin-31742.herokuapp.com/allReviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Review Submitted SuccessFully!")
                }
                console.log(result)
            });
        console.log(data);
    }
    return (
        <div>
            <h1 className='border-b-4 font-black mt-10 mx-auto pb-5 text-5xl text-center text-gray-600 w-2/5'>Please Review</h1>
            <div>
                <form className="booking-form flex flex-col  py-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' defaultValue={user.displayName} {...register("name")} />

                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' defaultValue={user.email} {...register("email", { required: true })} />
                    {/* {errors.email && <span className="error">This field is required</span>} */}
                    <textarea className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Your Reviews" defaultValue="" {...register("review")} />

                    <input type='date' className='outline-none border-2 rounded p-3 font-black text-2xl' {...register("date", { required: true })} />

                    {/* <Controller
                        control={control}
                        name="ReactDatepicker"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <DatePicker
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value}
                            />
                        )}
                    /> */}

                    <select className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Review" defaultValue="" {...register("rating")}>
                        <option value="">Rating</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>

                    </select>

                    <select className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Review" defaultValue="" {...register("designation")}>
                        <option value="">Designation</option>
                        <option value="Certified Buyer">Certified Buyer</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Sale Manager">Sale Manager</option>
                        <option value="Prime Member">Prime Member</option>
                        <option value="Visitor">Visitor</option>
                        <option value="Others">Others</option>


                    </select>


                    <input className='border-2 hover:bg-green-400 hover:text-white p-3 ring-2 ring-gray-300 rounded text-gray-500 text-2xl font-black' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, pariatur?