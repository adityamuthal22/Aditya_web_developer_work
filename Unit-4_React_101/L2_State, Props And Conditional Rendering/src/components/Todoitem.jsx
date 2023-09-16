import React from 'react'

export const Todoitem = (props) => {
    const[iscomplate,setIscomplate]=React.useState(props.Todoitem.iscomplate);
    let red={
        color:"red"
    }
    let green={
        color:"green"
    }
  return (
    <div className='TodoItem' style={!iscomplate ? red : green}>
        <div>{props.Todoitem.value}</div>
        <div>
            <input  type="radio" checked={iscomplate} onChange={(e)=>{
                setIscomplate(e.target.checked)
            }} />
        </div>

    </div>
  )
}

export default Todoitem