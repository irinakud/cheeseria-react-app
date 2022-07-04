import React, { useState } from 'react';
import calculatePrice from './calculatePrice';

export const PriceCalculator = ({pricePerKilo}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const onAmountChange = (amount) => {
        setTotalPrice(calculatePrice(amount, pricePerKilo));
    }

    return (
        <div>
            <div>
                Enter amount (in kg): 
                <input onChange={e => onAmountChange(e.target.value)}/>
            </div>
            <div>Total Price: {totalPrice}</div>                
        </div>
    );
}
export default PriceCalculator;