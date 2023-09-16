import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

export default function CartItem ({
  label,
  price,
  qty,
  handleChangeQty,
  id
}) {
  return (
    <div 
    style={{
      display:"flex",
      gap:"1rem",
      padding:"2rem",
      justifyContent:"center",
      border:"2px solid orange",
      margin:"1rem"
    }}
    >
      <LabelPrice label={label} price={price} />
      <Quantity  
      qty={qty} 
      incrementCount={()=>handleChangeQty(id,1)}
      decrementCount={()=>handleChangeQty(id,-1)}
  
      />
    </div>
  )
}

