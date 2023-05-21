import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatedForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const loader = useLoaderData();
  const { description, quantity, price, _id, name } = loader;

  const onSubmit = async (data, e) => {
    try {
      const response = await fetch(`https://toys-server-mu.vercel.app/addToys/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Toy updated successfully!');
        e.target.reset(); // Reset the form
      } else {
        throw new Error('Failed to update toy.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update toy.');
    }
  };

  return (
    <div className="my-14 lg:w-1/2 mx-auto">
      <h4 className="text-3xl text-center font-bold mb-4">Update Your Product</h4>
      <h4 className="text-2xl text-center font-bold my-4">Product Name : {name} </h4>
      <div>
        <form className="bg-white rounded border shadow-lg p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="price" className="font-bold mb-2">
              Price:
            </label>
            <input
              type="number"
              id="price"
              className="input-field px-4 py-2 border border-gray-300 rounded w-full"
              defaultValue={price}
              {...register('price')}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="font-bold mb-2">
              Available quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="input-field px-4 py-2 border border-gray-300 rounded w-full"
              defaultValue={quantity}
              {...register('quantity')}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="font-bold mb-2">
              Detail description:
            </label>
            <textarea
              id="description"
              className="input-field px-4 py-2 border border-gray-300 rounded w-full h-32 resize-none"
              defaultValue={description}
              {...register('description')}
            />
          </div>
          <button className="text-primary bg-orange-600 font-bold text-2xl px-4 py-2 rounded" type="submit">Update!</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedForm;
