import React from 'react';
import Header from '../components/Header';
import ProductGallery from '../containers/ProductGallery';

const Home = () => {
    return (
        <div className="Layout">
            <Header />
            <ProductGallery />
        </div>
    );
}

export default Home;