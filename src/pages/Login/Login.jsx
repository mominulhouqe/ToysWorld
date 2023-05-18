import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';



const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[a-z])/.test(password)) {
            swal ( "Oops" ,  "try to at least one lowercase!" ,  "error" )
            return;
        }
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user
            Swal.fire(
                'Good job!',
                'You Login Successfully!',
                'success'
            )
        })   
        .catch((error) => {
            let errorMessage = 'Login failed. Please try again.';
            if (error.message) {
              errorMessage = error.message;
            }
            Swal.fire('Error!', errorMessage, 'error');
          });

    }


    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-md rounded-2xl px-16 py-16">
                    <h2 className="text-4xl font-bold mb-6  text-center ">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                required
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
                                name='password'
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center space-x-2 flex-wrap space-y-5 sm:justify-center   justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                               
                                className="flex gap-2 items-center btn  hover:bg-red-600  btn-outline  font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                            <FaGoogle></FaGoogle>
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