import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
   const [title,settitle] = useState("")
   const [price,setprice] = useState(0)
   const [description,setdescription] = useState('')
   const [category,setcategory] = useState('')

   let navigate = useNavigate()
   const formSubmit = (e)=>{
      e.preventDefault()


      fetch("http://localhost:9000/products",{
         method:"POST",
         headers: {
            "Content-Type": "application/json",
         },
         body:JSON.stringify({
            title,
            price,
            description,
            category
         }),
      })
      .then(res=>{res.json()})
      .then((data)=>{
         navigate('/products')
      })
   }
  return (
    <>
    <form className='text-start' onSubmit={(e)=>{
      formSubmit(e)
}}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" onChange={(e)=>{settitle(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="desription" className="form-label">desription</label>
    <input type="text" className="form-control" id="desription" onChange={(e)=>{setdescription(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">price</label>
    <input type="number" min={0} className="form-control" id="price" onChange={(e)=>{setprice(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="category" className="form-label">category</label>
    <input type="text" className="form-control" id="category" onChange={(e)=>{setcategory(e.target.value)}}/>
  </div>
  {
  }


  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
    </>
  )
}
