import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from './ItemCount';
import React, { useEffect, useState } from 'react';


const Item = ({item}) => {
    const {title, price, stock, pictureUrl} = item;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="card border-dark" style={{ width: "15rem" }}>
            <img className="card-img-top" src={pictureUrl} alt="Card image cap" style={{ height: "10rem" }}/>
            <div className="card-body text-center d-flex flex-column align-items-center">
                <h5 className="card-title">{title}</h5>
                <a onClick={() => setIsOpen(true)} href='#' className="w-75 btn btn-primary">Porduct detail</a>
                <ItemCount stock={item.stock} initial={1} onAdd/>
            </div>
            <div className='card-footer text-muted'>Stock: {stock}</div>
            {isOpen && <ItemDetailContainer item={item} setIsOpen={setIsOpen} />}
        </div>
    )
}
export default Item;