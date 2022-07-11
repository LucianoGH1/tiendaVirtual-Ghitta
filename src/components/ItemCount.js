import React, { useState } from "react";
import guitarra1 from '../guitarra1.jpg';
const ItemCount = ({stock, initial, onAdd}) => {
    const [state, setState] = useState(Number(initial));

    const clickHandler = (event) => {
       if (event === '-' && state > 0) {
           return () => setState(state - 1)
        } else if (event === '+' && state < stock) {
            return () => setState(state + 1)
        }
    } 

    return (
        <div className="card border-primary w-25">
            <div className="card-body text-center d-flex flex-column align-items-center">
                <h5 className="card-title">Acoustic guitar</h5>
                <img className="card-img-top h-50" src={guitarra1} alt="Card image"></img>
                <div className="d-flex justify-content-around w-75">
                    <button className='btn btn-light'onClick={clickHandler('-')}>-</button>
                    <input className="form-control" type='number' value={state}/>
                    <button className='btn btn-light' onClick={clickHandler('+')}>+</button>
                </div>
                <a className="w-75 btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default ItemCount;