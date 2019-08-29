import React from 'react';

const Product = ({value, name, category, handleNewValue}) => { 
    
    const update = (newValue) => { 
        handleNewValue(newValue)
        console.log('hello')
        console.log(value)
    }

    return ( 
        <li className={category}>
            <button onClick={() => { update(value-1)}}>-</button>
            <span>{value} {name}</span>
            <button onClick={() => { update(value+1)}}>+</button>
        </li>
    )

}
export default Product; 