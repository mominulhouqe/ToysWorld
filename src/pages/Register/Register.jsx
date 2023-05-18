import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import {  getAuth} from "firebase/auth";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const auth = getAuth(app)

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        if (!/(?=.*[a-z])/.test(password)) {
            swal ( "Oops" ,  "try to at least one lowercase!" ,  "error" )
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire(
                    'Good job!',
                    'You Register Successfully!',
                    'success'
                )
                form.reset();
                navigate('/login')
                return updateProfile(auth.currentUser, {
                    displayName: name, photoURL:photoURL
                })
            })
            .catch((error) => {
                let errorMessage = 'Registration failed. Please try again.';
                if (error.message) {
                  errorMessage = error.message;
                }
                Swal.fire('Error!', errorMessage, 'error');
              });
    }
   




    
    return (
        <div >
            <div className="flex justify-center items-center my-20 min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-md rounded-2xl px-16 py-10">
                    <h2 className="text-4xl font-bold mb-6  text-center ">Please Register !!!</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name='name'
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your name "
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your photo URL"
                            />

                        </div>
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

export default Register;