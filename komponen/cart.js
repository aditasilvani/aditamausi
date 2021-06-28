export default function cart(){
    return (
        <div>        
        {/* Best Seller Section*/}
        <section className="page-section best seller" id="best seller">
          <div className="container">
            {/* Best Seller Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Best Seller</h2>
            {/* Icon Divider*/}
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            {/* Best Seller Grid Items*/}
            <div className="row justify-content-center">
              {/* Best Seller Item 1*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal1">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="1.jpg" alt="..." />
                </div>
              </div>
              {/* Best Seller Item 2*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal2">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="2.jpg" alt="..." />
                </div>
              </div>
              {/* Best Seller Item 3*/}
              <div className="col-md-6 col-lg-4 mb-5">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal3">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="3.jpg" alt="..." />
                </div>
              </div>
              {/* Best Seller Item 4*/}
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal4">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="4.jpg" alt="..." />
                </div>
              </div>
              {/* Best Seller Item 5*/}
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal5">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="5.jpg" alt="..." />
                </div>
              </div>
              {/* Best Seller Item 6*/}
              <div className="col-md-6 col-lg-4">
                <div className="best seller-item mx-auto" data-bs-toggle="modal" data-bs-target="#best sellerModal6">
                  <div className="best seller-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="best seller-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                  </div>
                  <img className="img-fluid" src="6.jpg" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section*/}
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
            {/* Icon Divider*/}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon"><i className="fas fa-star" /></div>
              <div className="divider-custom-line" />
            </div>
            {/* About Section Content*/}
            <div className="row">
              <div className="col-lg-10 ms-auto"><p className="lead"></p>Selamat Datang di Toko Roti Amanda. Menyediakan berbagai macam pilihan roti yang beraneka rasa.</div>
              <div className="col-lg-4 me-auto"><p className="lead"></p></div>
            </div>
            {/* About Section Button*/}
            <div className="text-center mt-4">
     
            </div>
          </div>
        </section>
        {/* Contact Section*/}
        {/* Best Seller Modals*/}
        {/* Best Seller Modal 1*/}
        <div className="best seller-modal modal fade" id="best sellerModal1" tabIndex={-1} aria-labelledby="best sellerModal1" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Pandan</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="2.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Seller Modal 2*/}
        <div className="best seller-modal modal fade" id="best sellerModal2" tabIndex={-1} aria-labelledby="best sellerModal2" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Original</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="1.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Seller Modal 3*/}
        <div className="best seller-modal modal fade" id="best sellerModal3" tabIndex={-1} aria-labelledby="best sellerModal3" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Keju</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="3.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Seller Modal 4*/}
        <div className="best seller-modal modal fade" id="best sellerModal4" tabIndex={-1} aria-labelledby="best sellerModal4" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Coklat Lava</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="4.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Seller Modal 5*/}
        <div className="best seller-modal modal fade" id="best sellerModal5" tabIndex={-1} aria-labelledby="best sellerModal5" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Capucino</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="5.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Seller Modal 6*/}
        <div className="best seller-modal modal fade" id="best sellerModal6" tabIndex={-1} aria-labelledby="best sellerModal6" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      {/* Best Seller Modal - Title*/}
                      <h2 className="best seller-modal-title text-secondary text-uppercase mb-0">Brownies Bluebery</h2>
                      {/* Icon Divider*/}
                      <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                      </div>
                      {/* Best Seller Modal - Image*/}
                      <img className="img-fluid rounded mb-5" src="6.jpg" alt="..." />
                      {/* Best Seller Modal - Text*/}
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                        <i className="fas fa-times fa-fw" />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}