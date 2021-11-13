import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-28 sm:p-8'>
                    <img className='rounded-2xl' src='https://media.istockphoto.com/photos/two-professional-male-cyclists-riding-their-racing-bicycles-in-the-picture-id1303246662?b=1&k=20&m=1303246662&s=170667a&w=0&h=mKFt2aV7_FQQFP8OJrL2-cWIRddbo_f6FXEQdf_ZHv8=' alt="" />
                </div>
                <div className='sm:p-10 sm:w-11/12 lg:space-y-10 lg:w-1/3'>

                    <h2 className='font-bold  text-5xl'>Explore Travelling With Us</h2>

                    <p className='font-normal text-2xl'>We’ve served this richly diverse region as a community hospital for more than 60 years. And as the area has grown, so have we. But as Long Island doctors, nurses, and healthcare professionals, we’ve never outgrown our devotion to the health of the community we all call home.</p>
                    <ul className='font-bold space-y-2.5 text-2xl'>


                        <li>Browse Our Website</li>
                        <li>Choose Service</li>
                        <li>Send Message</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;