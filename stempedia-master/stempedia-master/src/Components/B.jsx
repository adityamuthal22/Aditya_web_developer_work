import React from 'react'
import { useDispatch } from 'react-redux/';
import { ChangeInput } from '../Redux/actions';

export default function B() {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch()
    const handleInput = (e) => {
        setInput(e.target.value);
        dispatch(ChangeInput(e.target.value));
    }
    return (
        <input value={input} onChange={(e) => { handleInput(e) }}  placeholder='Type Something' />
    );

}