import { Switch, Route } from 'react-router-dom';
import SingleProduct from './components/single-product/SingleProduct';
import Shop from './components/pages/shop/Shop';
import './App.scss';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import CartPage from './components/pages/cart-page/CartPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage}/>
        <Route path='*' component={NotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
