import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToys = () => {
    useTitle('Add Toys');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);

        fetch('https://toys-server-mu.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                Swal.fire(
                    'Your Toys Added Successfully!',
                    'success'
                );

                reset();
            });
    };



    return (
        <div className="bg-slate-400 min-h-screen  flex items-center font-serif font-bold justify-center">
            <div className="p-8 bg-white mt-10 mb-10 rounded shadow">
                <h2 className="text-2xl mb-4 text-center underline">Add A Toy</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:flex lg:gap-5">
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Picture URL:</label>
                            <input
                                type="text"
                                name="picture"
                                className={`border border-gray-300 px-4 py-2 rounded w-full ${errors.picture ? 'border-red-500' : ''}`}
                                {...register('picture', {
                                    required: 'Picture URL is required',
                                    pattern: {
                                        value: /^(ftp|http|https):\/\/[^ "]+$/,
                                        message: 'Invalid URL',
                                    },
                                })}
                            />
                            {errors.picture && <span className="text-red-500">{errors.picture.message}</span>}
                        </div>
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Name:</label>
                            <input type="text" name="name" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('name', { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="lg:flex lg:gap-5">
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Seller Name:</label>
                            <input type="text" name="sellerName" defaultValue={user.displayName} className="border border-gray-300 px-4 py-2 rounded w-full" {...register('sellerName')} />
                        </div>
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Seller Email:</label>
                            <input type="email" name="sellerEmail" defaultValue={user.email} className="border border-gray-300 px-4 py-2 rounded w-full" {...register('sellerEmail')} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block">Sub-category:</label>
                        <select name="subCategory" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('subCategory')}>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>
                    </div>
                    <div className="lg:flex lg:gap-5">
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Price:</label>
                            <input type="number" name="price" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('price')} />
                        </div>
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Rating:</label>
                            <input type="number" name="rating" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('rating')} />
                        </div>
                    </div>
                    <div className="lg:flex lg:gap-5">
                        <div className="mb-4 md:w-1/2 lg:w-1/2">
                            <label className="block">Available Quantity:</label>
                            <input type="number" name="quantity" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('quantity')} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block">Detail Description:</label>
                        <textarea name="description" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('description')}></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddToys;
