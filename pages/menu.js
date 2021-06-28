import React from 'react'
import Props from '../komponen/props'
export default function menu(){
    const Isi=[
        {imgurl:'enak.jpg',namaproduk:'Brownies Kopi', price: 'Rp 50.000'},
        {imgurl:'bakar.jpg',namaproduk:'Brownies Bakar Kacang', price: 'Rp 51.000'},
        {imgurl:'pink.jpg',namaproduk:'Brownies Stobery Lava', price: 'Rp 53.000'},
        {imgurl:'tiramisu.jpg',namaproduk:'Brownies Tiramisu', price: 'Rp 54.000'},
        {imgurl:'1.jpg',namaproduk:'Brownies Original', price: 'Rp 35.000'},
        {imgurl:'2.jpg',namaproduk:'Brownies Pandan', price: 'Rp 45.000'},
        {imgurl:'3.jpg',namaproduk:'Brownies Keju', price: 'Rp 46.000'},
        {imgurl:'4.jpg',namaproduk:'Brownies Coklat Lava', price: 'Rp 47.000'},
        {imgurl:'5.jpg',namaproduk:'Brownies Bakar Kacang', price: 'Rp 55.000'},
        {imgurl:'6.jpg',namaproduk:'Brownies Bluebery', price: 'Rp 37.000'},
        {imgurl:'7.jpg',namaproduk:'Brownies Kukus Gulung Keju', price: 'Rp 52.000'},
        {imgurl:'8.jpg',namaproduk:'Brownies Pisang Coklat', price: 'Rp 48.000'}
    ]
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
          </ul>
        </div>
      </div>
    </nav>
        <div className="col-md-20 bg-primary">
        <title>Menu</title>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center><h3>DAFTAR MENU</h3></center>
        <center><h3>"ROTI AMANDA"</h3></center>
        <div className='row'>
        {Isi.map((kolom)=>(
          <Props Imgurl={kolom.imgurl} NamaProduk={kolom.namaproduk} Price={kolom.price}/>
        ))
      }
      </div>
            </div>
            </div>
                )
            }