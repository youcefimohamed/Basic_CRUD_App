import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Compenents/navbar'
import Sidebar from './Compenents/Sidebar'
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import Add from './pages/Add';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-3 '>
          <Sidebar/>
        </div>
        <div className='col-9'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/category' element={<Category/>}></Route>
            <Route path='/products/add' element={<Add/>}/>
            <Route path='/products/:idProducts' element={<ProductDetails/>}/>
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
