import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const menuItems = (
        <>
            <li>
                <Link to='/' className='link-unstyled hover:no-underline'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/allToy' className='link-unstyled hover:no-underline'>
                    All Toys
                </Link>
            </li>
            <li>
                <Link to='/addToy' className='link-unstyled hover:no-underline'>
                    Add A Toy
                </Link>
            </li>
            <li>
                <Link to='/myToys' className='link-unstyled hover:no-underline'>
                    My Toys
                </Link>
            </li>
            <li>
                <Link to='/blog' className='link-unstyled hover:no-underline'>
                    Blogs
                </Link>
            </li>



            {user && (
                <div className='flex items-center '>
                    {user?.photoURL && (
                        <div className='tooltip text-center  tooltip-bottom' data-tip={user.displayName}>
                            <img src={user?.photoURL} alt='user profile' className='w-10 h-10 rounded-full mr-2' />
                        </div>
                    )}
                </div>
            )}

            {user ? (
                <button onClick={handleLogout} className='py-5 rounded-lg ml-6'>
                    Logout
                </button>
            ) : (
                <>
                    <Link to='/login'>
                        <button className='py-5 rounded-lg ml-6'>Sign In</button>
                    </Link>
                    <Link to='/register' className=''>
                        <button className='py-5 rounded-lg ml-6'>Register</button>
                    </Link>
                </>
            )}
        </>
    );

    return (
        <div className='navbar bg-base-100 font-mono'>
            <div className='navbar-start'>
                <div className='dropdown navbar-end'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                        </svg>
                    </label>
                    <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-3 ml-5 shadow bg-base-100 rounded-box font-semibold  w-52'>
                        {menuItems}
                    </ul>
                </div>

                <a className='w-28 normal-case text-xl'>
                    <img src='https://images-platform.99static.com//qJ3u8FABhDvDacTrJfkMzHvVFCM=/378x266:1622x1510/fit-in/500x500/99designs-contests-attachments/138/138432/attachment_138432570' alt='' className=' ' />
                </a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal font-semibold px-1'>
                    <li className='font-semibold'>{menuItems}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
