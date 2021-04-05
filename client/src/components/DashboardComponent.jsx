import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch   } from "react-router";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Dashboard.css';
import {
  faUsers,
  faBuilding,
 faUser,
 faUserTie,
faRupeeSign,
faCity,
} from "@fortawesome/free-solid-svg-icons";
import ListEmployeeComponent from './ListEmployeeComponent';


class DashboardComponent extends Component {
   
    render() {
        return (
            <Router  >
                  <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
                HR
              </div>
                 <ul className="navbar-ul">
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser} className="sidebar-icon" /> 
                    User 
                  </Link> 
                </li>
                <li>
                  <Link to="/salary">
                    <FontAwesomeIcon icon={faRupeeSign} className="sidebar-icon" /> 
                    Salary 
                  </Link> 
                </li>
                
                <li>
                  <Link to="/company">
                    <FontAwesomeIcon icon={faCity} className="sidebar-icon" /> 
                    company 
                  </Link> 
                </li>
                <li>
                  <Link to="/role">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Role 
                  </Link> 
                </li>
               
                <li>
                  <Link to="/department">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="sidebar-icon"
                    /> 
                    Department 
                  </Link> 
                </li>
                
              </ul>
              </div>
              </div>

              <div id = "main-area">
                  <div id = "sidebar-top-content">

                  </div>

                <Switch>
                    <Route path = "/" component = {ListEmployeeComponent} />
                    <Route path = "/salary" /> 
                </Switch>
              </div>

            </Router>
        )
    }
}

export default DashboardComponent
