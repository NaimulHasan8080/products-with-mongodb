import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProducts from './Component/AddProducts';
import Products from './Component/Products';
import Home from './Component/Home';
import Update from './Component/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Switch>

          <Route exact path="/">
            <AddProducts></AddProducts>
          </Route>

          <Route path="/addproducts/update/:id">
            <Update></Update>
          </Route>
          <Route path="/addproducts">
            <AddProducts></AddProducts>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
