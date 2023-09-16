import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total'

const initdata=[
    {
        id:1,
        product_name:"Noodles",
        price:30,
        qty:1
    },
    {
        id:2,
        product_name:"Biryani",
        price:90,
        qty:2
    },
    {
        id:3,
        product_name:"Chips",
        price:10,
        qty:3
    },
]

function calculateTotal(products){
  return  products.reduce((acc,c)=>

    acc + (c.qty * c.price),0)
}



function CartContainer() {
    const [data,setData] =useState(initdata)

    const handleChangeQty = (id, amount) =>{
        let updatedData= data.map(item =>{
            if(item.id === id){
                return{
                    ...item,
                    qty:item.qty + amount
                }
            }
            else{
                return item
            }
        })
        setData(updatedData)
    }

  return (
    <div>
        <h1>Cart Page</h1>
    <div style={{
    border:"3px solid orange",
    width:"40%",
    margin:"auto",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  }} >


        {
         data.map(item=>
            <CartItem 
            key={item.id}
            id={item.id}
            label={item.product_name}
            qty={item.qty}
            price={item.price}
            handleChangeQty={handleChangeQty}
             />
            )   
        }
        <Total total={calculateTotal(data)} />
    </div>
    </div>
  )
}

export default CartContainer


