import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
return ( 
<nav className="navbar navbar-expand-lg text-bg-light ">
  <div className="container">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/product">Product</Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">About-us</Link> */}
        </li>
      </ul>
    </div>
  </div>
</nav> 
 )
}
