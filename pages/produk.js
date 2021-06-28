import React from 'react'
export default function produk(){
    return (
<div>
<nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">Roti AMANDA</a>         
          <i className="fas fa-bars" />
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="http://localhost:3000/">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <br/>
    <br/>
    <br/>
    <br/>
<section className="mb-5 bg-primary" >
  <div className="row">
    <div className="col-md-6 mb-4 mb-md-0">
      <div id="mdb-lightbox-ui" />
      <div className="mdb-lightbox">
        <div className="row product-gallery mx-1">
          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1 main-img">
              <a href="enak.jpg" data-size="710x823">
                <img src="enak.jpg" className="img-fluid z-depth-1" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
    <p></p>
      <h5>Brownies Kopi</h5>
      <p className="mb-2 text-muted text-uppercase small"></p>
      {/* <ul className="rating">
        <li>
          <i className="far fa-star fa-sm text-primary" />
        </li>
      </ul> */}
      <p><span className="mr-1"><strong>Rp. 50.000</strong></span></p>
      <p className="pt-1">READY STOCK
      Ready stock brownies amanda
      Pengiriman setiap hari,max order jam 12 lewat dari itu ikut pengiriman ikut besok 
      tahan 3hari disuhu ruangan dan 7 hari dilemari es</p>
      <hr />
      <div className="table-responsive mb-2">
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <td className="pl-0 pb-0 w-25">Quantity</td>
              <td className="pb-0">Select size</td>
            </tr>
            <tr>
              <td className="pl-0">
                <div className="def-number-input number-input safari_only mb-0">
                  <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                </div>
              </td>
              <td>
                <div className="mt-1">
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="small" name="materialExampleRadios" defaultChecked />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="small">Small</label>
                  </div>
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="medium">Medium</label>
                  </div>
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="large" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="large">Large</label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" className="btn btn-dark btn-md mr-1 mb-2">Buy now</button>
    </div>
  </div>
</section>
</div>
    )
}