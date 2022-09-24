import React from 'react';
import { divide, modulas } from '../Utilities/Calculate';

const Watch = () => {
    const first = 120;
    const second = 7;
    const result = divide(first, second)
    const mResult = modulas(first, second)
    return (
        <div>
            <h2>My Watch World</h2>
            <h4> Divide Result: {result}</h4>
            <h4>Modulas Result: {mResult}</h4>
        </div>
    );
};

export default Watch;