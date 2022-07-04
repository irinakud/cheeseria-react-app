import React from 'react';

export const Cheese = ({cheese}) => {

    return (
        <div>
            <h3>Type: {cheese.type}</h3>
            <div>
                <img style={{height: "200px"}} src={cheese.pictureFile} alt={cheese.type}/>
            </div>
            <div>Color: {cheese.color}</div>
            <div>Price per kilo: {cheese.pricePerKilo}</div>
        </div>
    );
}
export default Cheese;