import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './ItemList';
import data from './data.json'
import { useState, useEffect } from "react";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const promise = new Promise(resolve => {
        setTimeout(()=> resolve(data), 2000)
    })

    useEffect(() => {
        promise.then(() => setItems(data));
    }, []);

    return (   
    <div className="mt-5">
        <ItemList items={items} />
    </div>
    );

}

export default ItemListContainer