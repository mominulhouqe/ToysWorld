import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer';
import ToysCatagory from '../ToysCatagory/ToysCatagory';
import Gallary from '../Gallary/Gallary';

const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
        <ToysCatagory></ToysCatagory>
        <Gallary></Gallary>

        </div>
    );
};

export default Home;