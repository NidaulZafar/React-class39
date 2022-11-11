import React, { useState } from 'react'
import Count from './Count';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";


    const mathFunctions = {
        addOne
    }
    function addOne() {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div id='container'>
            <div className= 'feedback'>{feedback}</div>
            <Count value={count} />
            <Button function={mathFunctions} />
        </div>
    )
}

export default Counter


