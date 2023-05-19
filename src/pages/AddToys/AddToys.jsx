import React from 'react';
import { useForm } from 'react-hook-form';

const AddToys = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch('http://localhost:5000/addToys', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })



    };

    return (
        <div className="bg-slate-400 min-h-screen flex items-center font-serif font-bold justify-center">
            <div className=" p-8 bg-white rounded shadow">
                <h2 className="text-2xl  mb-4 text-center">Add A Toy</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='lg:flex lg:gap-5'>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Picture URL:</label>
                            <input type="text" name="pictureUrl" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('pictureUrl')} />
                        </div>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Name:</label>
                            <input type="text" name="name" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('name', { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>

                    <div className='lg:flex lg:gap-5'>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Seller Name:</label>
                            <input type="text" name="sellerName" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('sellerName')} />
                        </div>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Seller Email:</label>
                            <input type="email" name="sellerEmail" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('sellerEmail')} />
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

                    <div className='lg:flex lg:gap-5'>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Price:</label>
                            <input type="number" name="price" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('price')} />
                        </div>
                        <div className="mb-4 lg:w-1/2">
                            <label className="block">Rating:</label>
                            <input type="number" name="rating" className="border border-gray-300 px-4 py-2 rounded w-full" {...register('rating')} />
                        </div>
                    </div>

                    <div  className='lg:flex lg:gap-5'>
                        <div className="mb-4 lg:w-1/2">
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
