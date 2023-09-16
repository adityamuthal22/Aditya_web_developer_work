import React from 'react'
import { useSelector } from 'react-redux/';
export const C = () => {
    const inputValue = useSelector(store => store.inputValue);
    return (
        <div>
            <h1>Input Value Is</h1>
            {inputValue.value}
        </div>
    )
}
