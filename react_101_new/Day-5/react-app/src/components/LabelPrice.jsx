import React from 'react'

const LabelPrice = ({
  label,
  price
}) => {
  return (
    <div
    style={{
      display:"flex",
      gap:"1rem",
      border:"2px solid orange",
      alignItems:"center",
      color:"red",
      padding:"5px"
      
    }}
   >
      <div>{label}</div>
      <div>Rs.{price}</div>
    </div>
  )
}

export default LabelPrice;