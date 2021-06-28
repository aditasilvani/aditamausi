import React from 'react'
export default function header(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">Roti AMANDA</a>         
          <i className="fas fa-bars" />
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="menu">Menu</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#best seller">Best Seller</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Login</a></li>
                    <div>
        </div>
          </ul>
        </div>
      </div>
    </nav>
 </div>
    )
}