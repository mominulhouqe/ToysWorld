import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  const [toysData, setToysData] = useState([]);

  const [search, setSearch] = useState("");


  useTitle('All Toys')
  useEffect(() => {
    fetch(('http://localhost:5000/addToys'))
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">All Toys</h2>
      <div className='bg-slate-300 p-5'>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button  className='btn'>Search</button>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Seller</th>
                  <th className="py-3 px-6 text-left">Toy Name</th>
                  <th className="py-3 px-6 text-left">Sub-category</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Available Quantity</th>
                  <th className="py-3 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {toysData.map((toy, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.sellerName}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.name}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.subCategory}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.price}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.quantity}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
