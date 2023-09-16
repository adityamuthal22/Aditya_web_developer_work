import React from 'react'



const Button = ({
     onClick,
    children,
    disabled
}) => {
  return (
    <div 
    style={{
        padding:"1rem",
        border:0,
        borderWidth:0,
       fontWeight:"bold",
        backgroundColor:"tomato",
       color:"white",
       cursor:"pointer"
    }}
     onClick={onClick} disabled={disabled}>
             {children}
    </div>
  )
}

export default Button