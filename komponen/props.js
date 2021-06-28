export default function Props(props){
    return(
        <div className="col mb-5">
            <center> <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>terbaru</div>
            <img src={props.Imgurl} height={250} width={200} />
            <h5>{props.NamaProduk}</h5>
            {props.Price}
            <br/>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="produk">Beli</a></div>
            </div>
            </center>
        </div>
    )
}
