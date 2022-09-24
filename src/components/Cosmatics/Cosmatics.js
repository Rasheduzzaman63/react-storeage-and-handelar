import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';
import { add, getTotalPrice, multiply } from '../Utilities/Calculate';


const Cosmatics = () => {
  const [cosmatics, setCosmatics] = useState([])

  useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmatics(data))
  }, [])
  const total = getTotalPrice(cosmatics)
    return (
        <div>
            <h1>WelCome to my costmatic world</h1>
            {
                <h4>Need to Money: {total}</h4>
            }
            {
                cosmatics.map(cosmatic =><Cosmatic 
                    key = {cosmatic.id}
                    cosmatic = {cosmatic}
                ></Cosmatic> )
            }
        </div>
    );
};

export default Cosmatics;