import React from 'react'

interface ButtonProps{
    label:string;
    handleClick:()=>void;
}

const Button = (props:ButtonProps) => {
   const {label,handleClick} =props;
  return (
    <div>
        <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button