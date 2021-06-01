import React from 'react';
import './App.css';
import MediaGallery from './components/MediaGallery/MediaGallery';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import Navbars from './components/Navbar/Navbars';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Page404 from './components/Page404/Page404';


function App() {
  return (
    <Router>
            <div>
              <Navbars />
              <Switch>
                <Route exactly component={Login} pattern="/Login" />
                <Route exactly component={App} pattern="/" />
                <Route exactly component={MediaGallery} pattern="/MediaGallery" />
                <Route exactly component={AboutUs} pattern="/AboutUs" />
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
  );
}



export default App;
