import React from 'react'
import Button from './Button'


const Quantity = ({
  qty,
incrementCount,
decrementCount
}) => {
  return (
    <div
    style={{
      display:"flex",
      gap:"1rem",
      border:"1px solid tomato"
    }}
      >
        <Button disabled={qty===0} onClick={decrementCount}>-</Button>
        <div>
        <h4>{qty}</h4>
        </div>
        <Button  onClick={incrementCount} >+</Button>
      </div>
  )
}

export default Quantity