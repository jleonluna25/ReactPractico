import React, {useState} from "react";
import '@styles/GalleryItem.scss';
const plusIcon = 'https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-plus-essential-collection-bearicons-blue-bearicons.png';

const GalleryItem = ()=> {
    const [cart, setCar] = useState([]);

    const handleClick = ()=>{
        setCar([]);
    }
    return (
        <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={plusIcon} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default GalleryItem;