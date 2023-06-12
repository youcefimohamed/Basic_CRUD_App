import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
   let {idProducts} =useParams();
   let [product,setProduct]=useState({})
   useEffect(()=>{
      fetch(`http://localhost:9000/products/${idProducts}`)
      .then((res)=>res.json())
      .then((data)=>{
         setProduct(data)
      })
   },[])
  return (
   <div className='text-start'>
   <h1>title :{product.title}</h1>
   <h3>description : {product.description}</h3>
   <p>price : {product.price}</p>
   <p>Category : {product.category}</p>
   </div>
   )
}
