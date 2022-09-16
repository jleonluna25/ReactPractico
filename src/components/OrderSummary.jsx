import React, {useContext} from "react";
import AppContext from '@context/AppContext';
import '@styles/PurchaseHistory.scss';

const OrderSummary = ({children, total}) => {
    const {state}= useContext(AppContext);
    return (
        <div className="order">
            <p>
                <span> { new Date(Date.now()).toDateString() } </span>
                <span> { state.cart.length } articles</span>
            </p>
            <p>$ { total() } </p>
            {children}
        </div>
    );
}

export default OrderSummary;