import React from 'react';
import '@styles/ProductGallery.scss';
import GalleryItem from '@components/GalleryItem';
import useGetProducts from '@hooks/useGetProducts';

const API= " https://api.escuelajs.co/api/v1/products";
const ProductGallery = () => {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product=>(
                    <GalleryItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductGallery;