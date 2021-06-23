import Topbar from "./components/top/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./app.css";
import AccountList from "./pages/accountlist/AccountList";
import Account from "./pages/account/Account";
import NewAccount from "./pages/newAccount/NewAccount";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/accounts">
              <AccountList/>
            </Route>
            <Route path="/account/:accountId">
              <Account/>
            </Route>
            <Route path="/newAccount">
              <NewAccount/>
            </Route>
            <Route path="/products">
              <ProductList/>
            </Route>
            <Route path="/product/:productId">
             <Product/>
            </Route>
            <Route path="/newProduct">
              <NewProduct/>
            </Route>
        </Switch>
        
      </div>      
    </Router>
  );
}

export default App;
