import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';



const CartWidget = () => {
    return (
        
        <a href="#" className=''>
            <FontAwesomeIcon size="2x" icon={faCartShopping} />
        </a>
    )
}

export default CartWidget;