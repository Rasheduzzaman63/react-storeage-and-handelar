import React from 'react';
import { multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 12;
    const second = 10;
    const result = multiply(first, second)
    return (
        <div>
            <h1>Welcome to Shoes World.</h1>
            <h4>Result : {result}</h4>
        </div>
    );
};

export default Shoes;