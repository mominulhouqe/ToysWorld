import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  const [search, setSearch] = useState('');

  useTitle('All Toys');

  useEffect(() => {
    fetch('http://localhost:5000/addToys')
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchByToyName/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  };

  const handleSinglePage = (toy) => {
    // if (user == null) {
    //  swal ( "You have to log in first to view details" , )
    //   navigate("/login"); // Redirect to the login page
    // } else {
    //   navigate("/singleToys");
    // }
    localStorage.setItem("SingleToys", JSON.stringify(toy));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">All Toys</h2>
      <div className="bg-gray-300 w-3/4 mx-auto text-center p-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Toy Name"
          className="p-2 border border-gray-400 rounded mr-2"
        />
        <button onClick={handleSearch} className="btn bg-blue-500 hover:bg-blue-700 text-white">
          Search
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">No</th>
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
                    
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{index +1 }</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.sellerName}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.name}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.subCategory}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.price}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">{toy?.quantity}</td>
                    <td className="py-2 lg:py-4 px-4 lg:px-6 whitespace-nowrap">
                      <Link to={`/singleData`}>
                        <button
                          onClick={() => handleSinglePage(toy)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          View Details
                        </button>
                      </Link>
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
