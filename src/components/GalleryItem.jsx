import React, {useContext} from "react";
import '@styles/GalleryItem.scss';
import AppContext from "@context/AppContext";
const plusIcon = 'https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-plus-essential-collection-bearicons-blue-bearicons.png';

const GalleryItem = ({product})=> {
    const {addToCart} = useContext(AppContext);

    const handleClick = item=>{
        addToCart(item);
    }
    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=> handleClick(product)}>
                    <img src={plusIcon} alt="Add to cart" />
                </figure>
            </div>
        </div>
    );
}

export default GalleryItem;