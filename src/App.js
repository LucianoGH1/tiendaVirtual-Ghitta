import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
  <>
  <NavBar/>
  <ItemCount stock='10' initial='1' onAdd=''/>
  <ItemListContainer/>
  </>
  );
}

export default App;
