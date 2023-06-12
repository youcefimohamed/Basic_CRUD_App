import React from 'react'
import { Link } from 'react-router-dom'
import  './Sidebar.css';


export default function Sidebar() {
  return (
    <>
    <ul className='list-unstyled sidebar'>
      <li className='p-2'>
         <Link to="/products" className='text-secondary'>Get All Products</Link>
      </li>
      <li className='p-2'>
         <Link to="/category" className='text-secondary'>Get All Category</Link>
      </li>
    </ul>
    </>
  )
}
