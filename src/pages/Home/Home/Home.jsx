import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer';
import ToysCatagory from '../ToysCatagory/ToysCatagory';

const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
        <ToysCatagory></ToysCatagory>

        </div>
    );
};

export default Home;