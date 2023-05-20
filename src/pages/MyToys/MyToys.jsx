import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
  const [toysData, setToysData] = useState([]);

  const { user } = useContext(AuthContext);

  useTitle('My Toys');

  const url = `https://toys-server-mu.vercel.app/addToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, [url]);



  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-server-mu.vercel.app/addToys/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              ).then(() => {
                const remaining = toysData.filter((toy) => toy._id !== id);
                setToysData(remaining);
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">My Toys ({toysData.length})</h2>

      <div className="flex mb-10 justify-center">
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
                    <td className="py-2 lg:py-4 space-x-2 px-4 lg:px-6 whitespace-nowrap">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                      </button>
                      <button onClick={() => handleDelete(toy._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Delete
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

export default MyToys;
