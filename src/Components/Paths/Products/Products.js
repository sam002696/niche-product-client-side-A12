import React, { useEffect, useState } from 'react';
import ProductsStyling from './ProductsStyling';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-basin-31742.herokuapp.com/allCycles')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div>

                <h1 className='font-bold p-10 text-5xl text-center'>FEATURED  <span className='text-indigo-500'>PRODUCTS</span> </h1>


            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h1>
            </div>
            <div>
                {
                    products.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                            {
                                products.map(product => <ProductsStyling product={product} key={product._id}></ProductsStyling>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default Products;