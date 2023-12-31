import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product ,setProduct] =useState({});
    const {id}=useParams();

    useEffect(()=>{
        if(id ){
        fetch(`http://localhost:8080/products/${id}`)
        .then((r)=> r.json())
        .then((d)=> setProduct(d));
        }
    },[id])

  return (
  <div>Product ID:{id}
  <div>{product.name}</div>
   </div>
  );
}

export default Product
