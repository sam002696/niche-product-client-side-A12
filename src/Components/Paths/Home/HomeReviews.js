import React from 'react';
import Rating from 'react-rating';

const HomeReviews = (props) => {
    const { name, review, date, rating, designation } = props.review;
    return (
        <div>
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">

                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-semibold">
                            “{review}”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            {name}
                        </div>
                        <div className="text-gray-500">
                            {designation}
                        </div>
                        <div className="text-gray-500">
                            {date}
                        </div>
                        <div className="text-yellow-500">
                            <Rating initialRating={rating}
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                            />
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default HomeReviews;