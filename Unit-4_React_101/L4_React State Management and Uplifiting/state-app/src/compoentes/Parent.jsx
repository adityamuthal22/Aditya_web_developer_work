import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = (props) => {
 const [info, setInfo]=useState(props.info)
  
  return (
      
    <div>  
        Parent:{info}
        <Child1 info={info} setInfo={setInfo} />
        <Child2 info={info}   />
    </div>
  )
}

export default Parent;