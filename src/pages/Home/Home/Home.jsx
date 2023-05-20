import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer';
import ToysCatagory from '../ToysCatagory/ToysCatagory';
import Gallary from '../Gallary/Gallary';
import useTitle from '../../../hooks/useTitle';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    useTitle('Home')
    return (
        <div>
        
            <Banner></Banner>
        <ToysCatagory></ToysCatagory>
        <Gallary></Gallary>
        <Newsletter />

        </div>
    );
};

export default Home;