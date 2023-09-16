import React from 'react'

const Total = ({
  total
}) => {
  return (
    <div style={{border:"1px solid orange",
    padding:"0.1rem",
    color:"red"
    
    }}>
     <h3> Total:{total}</h3>
      </div>
  )
}

export default Total