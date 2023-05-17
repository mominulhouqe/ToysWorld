import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = [
        <>
            <li className="font-semibold"> <Link to="/">Home</Link> </li>
            <li className="font-semibold"> <Link to="/">All Toys</Link></li>
            <li className="font-semibold"> <Link to="/">My Toys </Link> </li>
            <li className="font-semibold"> <Link to="/"> Add A Toy</Link> </li>
            <li className="font-semibold"> <Link to="/"> Blogs</Link> </li>

            {/* <div className="flex items-center">
                <img src="profile-picture.png" alt="Profile Picture" className="h-8 rounded-full" />
            </div> */}


            {/* {user?.email ? <>
                < li > <Link to="/bookings">My Bookings</Link></ >
                <li><button onClick={handleLogOut}>Log out</button></li>
            </>
                : <li> <Link to="/login">Login</Link> </li>
            } */}
        </>
    ]


    return (
        <div className="navbar  bg-base-100 font-mono ">
            <div className="navbar-start">
                <div className="dropdown navbar-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                
                <div className="w-36 normal-case text-xl"> 
                <img src="https://images-platform.99static.com//qJ3u8FABhDvDacTrJfkMzHvVFCM=/378x266:1622x1510/fit-in/500x500/99designs-contests-attachments/138/138432/attachment_138432570" alt=""  className=' '/>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold px-1">

                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;