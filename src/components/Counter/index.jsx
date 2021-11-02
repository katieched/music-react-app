import React, { useState } from 'react';

export const Counter = () => {
    const [ count, setCount] = useState(2);

    const decrement = () => {setCount((prevCount) => prevCount - 1)};
    const increment = () => {setCount((prevCount) => prevCount + 1)};

    return (
        <>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </>
    )
}