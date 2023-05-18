import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-md rounded px-8 py-6">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                               
                                className="flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm3.927 4.096l-1.66 1.623c-.053.05-.122.078-.195.078H10v3.327h2.713c.187 0 .35.126.42.31l.727 1.527c.094.225.034.492-.156.66l-2.58 2.65c-.23.227-.594.3-.915.18l-2.357-.78c-.264-.083-.498-.257-.643-.507l-1.663-2.743c-.124-.2-.14-.452-.036-.67l1.58-2.84c.16-.287.458-.46.784-.46H10V4.673c0-.147.026-.294.078-.428.12-.32.494-.532.91-.532h2.92c.195 0 .38.053.54.155l-1.427 2.458z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Sign In with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;