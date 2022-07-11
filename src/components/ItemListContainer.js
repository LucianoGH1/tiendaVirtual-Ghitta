import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <ItemCount stock='10' initial='1' onAdd=''/>
        <h2 className='display-1 w-50 m-auto text-center'>{props.greeting}</h2>
        </>
    )
}

export default ItemListContainer