import React from 'react';

const Button = (props) => {
    return (
        <button
            className='button'
            onClick={props.function.addOne}>
            <span
                className="text">
                Add 1!
            </span>
        </button>
    )
}
export default Button
