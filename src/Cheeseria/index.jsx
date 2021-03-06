import React, { useState, useEffect }  from 'react';
import { CHEESERIA_API } from '../constants';
import {Cheese} from './Cheese';
import {PriceCalculator} from './PriceCalculator';

//TODO: add styles, migrate to typescript
export const Cheeseria = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cheeses, setCheeses] = useState([]);
    useEffect(() => {
        fetch(`${CHEESERIA_API}/cheeses`)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCheeses(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <ul>
            {cheeses.map(cheese => (
            <li key={cheese.id} data-testid={`${cheese.type}-test-id`}>
                <Cheese cheese={cheese} />
                <PriceCalculator pricePerKilo={cheese.pricePerKilo}/>
            </li>
            ))}
        </ul>
    );
}
export default Cheeseria;