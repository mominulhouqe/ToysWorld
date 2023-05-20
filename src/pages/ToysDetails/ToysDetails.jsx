import React, { useEffect, useState } from 'react';
import { FaBookmark, FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import useTitle from '../../hooks/useTitle';
import { toast, ToastContainer } from 'react-toastify';

const ToysDetails = () => {
    const [toys, setToys] = useState(null);
    useTitle('ToysDetails');

    useEffect(() => {
        const storedToyData = localStorage.getItem("SingleToys");
        if (storedToyData) {
            const toy = JSON.parse(storedToyData);
            setToys(toy);
        }
    }, []);

    const handleOrderNow = () => {
        toast.success('Order placed successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    if (!toys) {
        return (
            <div className="flex justify-center mt-20">
                <progress className="progress w-56"></progress>
            </div>
        );
    }
    return (
        <div className="bg-base-200">
            <div className="container card mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-xl  items-center justify-center gap-10 md:flex">

                    <div className="md:flex-shrink-0">
                        <img src={toys?.picture} alt={toys?.name} className="h-80 w-full object-cover rounded-lg md:w-80" />
                    </div>

                    <div className="p-6">
                        <h2 className="text-2xl font-bold">{toys?.name}</h2>
                        <p className="text-gray-600 py-2">{toys?.description}</p>
                        <p className="text-gray-600 py-2">Price: ${toys?.price}</p>
                        <p className="flex items-center space-x-1 mt-2">
                            <FaHeart className="text-red-500 h-5 w-5" />
                            {toys?.likes}
                        </p>
                        <div className="flex items-center space-x-1 mt-2">
                            <Rating
                                emptySymbol={<FaRegStar className="text-yellow-400 h-5 w-5" />}
                                fullSymbol={<FaStar className="text-yellow-400 h-5 w-5" />}
                                initialRating={toys?.rating}
                                readonly
                            />
                            <span className="text-gray-600">({toys?.rating})</span>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600" onClick={handleOrderNow}>Order Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ToysDetails;
