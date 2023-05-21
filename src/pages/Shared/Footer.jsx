import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>

            <footer className=" text-white container mx-auto  bg-gradient-to-r from-slate-900  to-slate-800  py-10">
                <div className="container mx-auto p-8 text-white flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 space-x-2 ">
                        <img src="https://images-platform.99static.com//qJ3u8FABhDvDacTrJfkMzHvVFCM=/378x266:1622x1510/fit-in/500x500/99designs-contests-attachments/138/138432/attachment_138432570" alt="Logo" className="h-8" />
                        <p className="mt-4 ">ToysRUs - Bringing Joy to Kids Everywhere</p>
                        <p className=" text-sm mt-2">&copy; 2023 ToysRUs. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4  ">
                        <h5 className="font-semibold  mb-2">Contact Us</h5>
                        <p className="">Email: ulhouqemomin39@gmail.com</p>
                        <p className="">Phone: 01999999999</p>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <h5 className="font-semibold  mb-2">Follow Us</h5>
                        <div className="flex">
                            <Link to="https://www.facebook.com/mominvai.fbuser" target="_blank" className="mr-2  hover:text-blue-500 transition-colors duration-300"> <FaFacebook></FaFacebook> </Link>

                            <Link to="https://twitter.com/momin7000" target="_blank" className="mr-2  hover:text-blue-500 transition-colors duration-300"><FaTwitter></FaTwitter>
                            </Link>
                            <Link to="https://www.instagram.com/momin.2" target="_blank" className="mr-2  hover:text-blue-500 transition-colors duration-300"><FaInstagram></FaInstagram> </Link>
                            <Link to="https://www.pinterest.com/" target="_blank" className="mr-2  hover:text-blue-500 transition-colors duration-300"><FaPinterest></FaPinterest> </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
                        <h5 className="font-semibold  mb-2">Address</h5>
                        <p className="">KaliBazar  Street</p>
                        <p className="">Sylhet Town, State ZIP</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;