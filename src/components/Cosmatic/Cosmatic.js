import React from 'react';
import { addDb, deleteDb } from '../Utilities/facedb';

const Cosmatic = (props) => {
    const {name, price,id} = props.cosmatic;

    const addToCard = (id) =>{
        addDb(id)
    }
   const removeFromCard = id =>{
    deleteDb(id)
   }
    return (
        <div style={{border:'2px solid gray', margin:'15px', padding:'20px'}}>
            <p>Buy this: {name}</p>
            <p>Price: ${price}</p>
            <p>Id: {id}</p>
            <button onClick={() => addToCard(id)}>Add To Card</button>
           <button onClick={() =>removeFromCard(id)}>Remove</button>

        </div>
    );
};

export default Cosmatic;