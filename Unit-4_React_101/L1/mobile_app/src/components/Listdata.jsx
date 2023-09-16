import React from 'react'
import './Mobile.css'

export const Listdata = (props) => {
    console.log(props)
  return (
        <>
        <h3>{props.headerTitle}</h3>
        <ul>
            {props.dataList.map((mobile,i)=>{
                let className="";
                if(i===0 || i===1){
                    className ="liSquare"
                }
                if(i===3){
                    className="liCircle"
                }
                return(
                   <li key={mobile} className={props.applyCss?className:""}>{mobile}</li> 
                )
            })}
        </ul>
        </>
  )
}

export default Listdata