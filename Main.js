import React, { Component } from "react";
import{
    Route, Routes, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import ForSale from "./For Sale";
import Jobs from "./Jobs";
import Cart from "./Cart.PNG";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1><img className="cart" alt="cart" src={Cart} /> <div className="title">The New Craigslist</div></h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/for sale">For Sale</NavLink></li>
            <li><NavLink exact to="/Jobs">Jobs</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/for sale" element={<ForSale />}/>
                <Route path="/jobs" element={<Jobs />}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;