import React from 'react';
import OrderSummary from '@components/OrderSummary';
import '@styles/PurchaseHistory.scss';

const arrow = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png";

const PurchaseHistory = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    <OrderSummary>
                        <img src={arrow} alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src={arrow} alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src={arrow} alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src={arrow} alt="arrow" />
                    </OrderSummary>
                </div>
            </div>
        </div>
    );
}

export default PurchaseHistory;