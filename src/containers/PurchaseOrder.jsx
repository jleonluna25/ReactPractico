import React, {useContext} from "react";
import OrderSummary from "@components/OrderSummary";
import OrderItem from "@components/OrderItem";
import AppContext from '@context/AppContext';
import '@styles/PurchaseOrder.scss';

const PurchaseOrder = () => {
    const {state}= useContext(AppContext);
    const total = ()=> {
        const reducer = (acumulator, currenValue)=> acumulator + currenValue.price;
        const sumatory = state.cart.reduce(reducer, 0);
        return sumatory;
    }
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>

                <div className="my-order-content">
                    {state.cart.map((product, index) => (
                        <OrderItem product={product} 
                        key={`orderItem-${product.id}-${index}`} index={index} />
                    ))}
                    {state.cart.length > 0 ? <OrderSummary total={total}>
                        <button className="primary-button">
                            Checkout
                        </button>
                    </OrderSummary> : ""}
                </div>
            </div>
        </div>
    );
}

export default PurchaseOrder;