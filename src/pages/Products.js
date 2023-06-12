import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Products() {
   let [products, setProducts] = useState([])

   const getProducts = ()=>{
      fetch('http://localhost:9000/products')
      .then((resp) => resp.json())
      .then((data) => {
         setProducts(data)
      })
   }
   useEffect(() => {
      getProducts()
   }, [])


   const deleteProduct = (product)=>{
      Swal.fire({
         title:`Are You Sure to Delete " ${product.title} "`,
         showCancelButton:true,
         confirmButtonText:"Delete?"


      }).then((data)=>{
         if(data.isConfirmed){
            fetch(`http://localhost:9000/products/${product.id}`,
            {method:"DELETE"})
            .then(resp=>resp.json())
            .then((data)=>{
               getProducts()
            })
         }
      })
   }
   return (
      <>
         <h1 className='text-start mb-4'>Products Page</h1>
         <Link to="/products/add" className='btn btn-success text-start'>Add New Product</Link>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Handle</th>
               </tr>
            </thead>
            <tbody>
               {products.map((product) => {
                  return (

                     <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                           <button onClick={()=>{deleteProduct(product)}} className='btn btn-danger m-2 btn-sm'>Delete</button>
                           <Link to={`/products/${product.id}`} className='btn btn-info m-2 btn-sm'>View</Link>
                           <button className='btn btn-primary m-2 btn-sm'>Edit</button>
                        </td>
                     </tr>
                  )
               })}

            </tbody>
         </table>
      </>
   )
}
