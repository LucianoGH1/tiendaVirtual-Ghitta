import React, { useState } from "react";

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
        <div className="d-flex justify-content-around border border-dark rounded" style={{width:'10rem'}}>    
            <button className='btn btn-light'onClick={clickHandler('-')}>-</button>                
            <input className="form-control" type='number' value={state}/>
            <button className='btn btn-light' onClick={clickHandler('+')}>+</button>                                
        </div>                                      
    )
}

export default ItemCount;