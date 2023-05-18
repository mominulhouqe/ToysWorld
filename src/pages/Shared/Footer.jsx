import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from "react-icons/fa";
const Footer = () => {
    return (
        <div>

            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <img src="https://images-platform.99static.com//qJ3u8FABhDvDacTrJfkMzHvVFCM=/378x266:1622x1510/fit-in/500x500/99designs-contests-attachments/138/138432/attachment_138432570" alt="Logo" className="h-8" />
                            <p className="mt-4 text-gray-400">ToysRUs - Bringing Joy to Kids Everywhere</p>
                            <p className="text-gray-400 text-sm mt-2">&copy; 2023 ToysRUs. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <h5 className="font-semibold text-gray-400 mb-2">Contact Us</h5>
                        <p className="text-gray-400">Email: info@toysrus.com</p>
                        <p className="text-gray-400">Phone: +1 123-456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <h5 className="font-semibold text-gray-400 mb-2">Follow Us</h5>
                        <div className="flex">
                            <a href="#" className="mr-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"> <FaFacebook></FaFacebook> </a>

                            <a href="#" className="mr-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"><FaTwitter></FaTwitter>
                            </a>
                            <a href="#" className="mr-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"><FaInstagram></FaInstagram> </a>
                            <a href="#" className="mr-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"><FaPinterest></FaPinterest> </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <h5 className="font-semibold text-gray-400 mb-2">Address</h5>
                        <p className="text-gray-400">123 Toy Street</p>
                        <p className="text-gray-400">Sylhet Town, State ZIP</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;