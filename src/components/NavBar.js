import CartWidget from './CartWidget'
import logo from '../logo.png';
const NavBar = (props) => {
    return (  
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-around'>
            <div className='navbar-brand d-flex align-middle'>
                <img src={logo}/>
                <h1 className='display-5'>Guitar shop</h1>
            </div>
            <ul className='navbar-nav w-50 d-flex justify-content-around'>
                <li className='nav-item'><a className='nav-link' href='#'>Home</a></li>
                <li><a className='nav-link' href='#'>Products</a></li>
                <li><a className='nav-link' href='#'>About us</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}
 
export default NavBar;