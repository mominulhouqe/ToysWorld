import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useTitle from '../../../hooks/useTitle';
import { FaBookmark, FaHeart, FaRegStar, FaStar } from "react-icons/fa";

const SingleData = () => {
  const [toys, setToys] = useState(null);
  useTitle('ToysDetails');

  useEffect(() => {
    const storedToyData = localStorage.getItem("SingleToys");
    if (storedToyData) {
      const toy = JSON.parse(storedToyData);
      setToys(toy);
    }
  }, []);

  if (!toys) {
    return (
      <div className="flex justify-center mt-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl items-center justify-center gap-10 md:flex">
          <div className="md:flex-shrink-0">
            <img src={toys?.picture} alt={toys?.name} className="h-80 w-full object-cover rounded-lg md:w-80" />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold">Toys Name {toys?.name}</h1>
            <h1 className="text-2xl font-semibold">Seller Name: {toys?.sellerName}</h1>
            <p className="text-gray-600 py-2">Seller Email: {toys?.sellerEmail}</p>
            <p className="text-gray-600 py-2">Available Quantity: {toys?.quantity}</p>
            <p className="text-gray-600 py-2">Price: ${toys?.price}</p>
            <p className="py-2">Description : {toys?.description}</p>
            <div className="flex items-center space-x-1 py-2">
              <Rating
                emptySymbol={<FaRegStar className="text-yellow-400 h-6 w-6" />}
                fullSymbol={<FaStar className="text-yellow-400 h-6 w-6" />}
                initialRating={toys?.rating}
                readonly
              />
              <span className="text-gray-600">({toys?.rating})</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
