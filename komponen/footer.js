import React from 'react'
export default function footer(){
    return (
        <div>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* Footer Location*/}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Jln. M.H Thamrin No 50
              <br />
              Singotrunan, Banyuwangi 68414
            </p>
          </div>
          {/* Footer Social Icons*/}
          <div className="col-lg-4 mb-5 mb-lg-0">
            {/* <h4 className="text-uppercase mb-4">Around the Web</h4> */}
            {/* <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a> */}
          </div>
          {/* Footer About Text*/}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              Adita Maulilda Silvani
            </p>
          </div>
        </div>
      </div>
    </footer>
    {/* Copyright Section*/}
    <div className="copyright py-4 text-center text-white">
      <div className="container"><small>Copyright © Adita Maulilda Silvani 2021</small></div>
    </div>
    {/* Best Seller Modals*/}
    </div>
    )
}