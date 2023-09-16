import React, { useState } from 'react'

const Child1 = (props) => {
    // const [value,setValue]=useState("");

    const onHandleChange=(e)=>{
       let newValue=e.target.value;
       props.setInfo(newValue);
    }
  return (
    <div><input onChange={onHandleChange} /><br />
        Child1:{props.info}
        
    </div>
  )
}

export default Child1