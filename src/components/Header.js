import React,{useEffect} from 'react';
import './navbar.css';
import logo from '../images/flag.jpg';
import App from '../App';
import Sites from './Sites';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

class Navbar extends React.Component {
    listener = null;
    state = {
      nav:false
    }
    componentDidMount() {
       window.addEventListener("scroll", this.handleScroll);
     }
     componentWillUnmount() {
        window.removeEventListener('scroll');
      }
     handleScroll= () => {
       if (window.pageYOffset > 40) {
           if(!this.state.nav){
             this.setState({ nav: true });
           }
       }else{
           if(this.state.nav){
             this.setState({ nav: false });
           }
       }
  
     }
  
    render(){
    return (
      <header>
        <Router>
      <nav className={`Nav ${this.state.nav && 'Nav__black'} navbar-expand-lg navbar-light mb-3 py-0` }>
              <div className="d-flex bColor textDet">
              <a href="/" className="navbar-brand"><img src={logo} style={{width:65, marginTop: -7}} /></a>
                  <ul className="navbar-nav mx-auto">
                      <li >
                        <Link className="menubutton" to="/sites">Sites</Link>
                      </li>
                      <li>
                        <Link className="menubutton" to="/">Home</Link>
                      </li>
                  </ul>
              </div>
         
      </nav>


        <Switch>
          <Route path="/sites">
            <Sites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
      </header>
    );}
  }
export default Navbar;