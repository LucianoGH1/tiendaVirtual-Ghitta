import 'bootstrap/dist/css/bootstrap.css';
const Item = ({item}) => {
    const {title, price, stock, pictureUrl} = item;
    return (
        <div className="card border-dark" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" style={{ height: "10rem" }}/>
            <div className="card-body text-center d-flex flex-column align-items-center">
                <h5 className="card-title">{title}</h5>
                <a href='#' className="w-75 btn btn-primary">Porduct detail</a>
            </div>
            <div className='card-footer text-muted'>Stock: {stock}</div>
        </div>
    )
}
export default Item;