import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AfterRender = () => {
    const [count,setCount] =useState(0);

    useEffect(
        function callback(){
            console.log(`title has changed`)
        document .title =`Clicked ${count} times`
        },[count] )
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default AfterRender