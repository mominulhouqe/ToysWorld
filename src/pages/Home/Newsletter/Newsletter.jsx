import React from 'react';

const Newsletter = () => {
    return (
        <div className='container mx-auto mt-5 flex justify-evenly items-center bg-gradient-to-r from-sky-400 to-sky-500 py-16 px-8'>
            <div className='max-w-md'>
                <h1 className='text-4xl text-white font-bold mb-6'>Come Learn with Us!</h1>
                <p className='text-white text-lg mb-6'>Sign up for our newsletter and receive exciting offers!</p>
                <p className='text-white text-sm'>
                    By signing up for our newsletter, you are opting in to our mailing list. You can opt out at any time.
                    Read our <span className='underline'>privacy policy</span>.
                </p>
            </div>
            <div className='mt-8'>
                <div className='flex  items-center'>
                    <input
                        type='email'
                        placeholder='Enter your email address'
                        className='w-full max-w-sm bg-white border border-gray-300 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                    />
                    <button className='bg-green-800   text-white rounded-r-md px-8 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400-400'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
