import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import DashboardComponent from './components/DashboardComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreeateSalaryComponent from './components/SalaryComponents/CreateSalaryComponent';
import ListSalaryComponent from './components/SalaryComponents/ListSalaryComponent';
import ViewSalaryComponent from './components/SalaryComponents/ViewSalaryComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/dashboard" component = {DashboardComponent}></Route>
                          <Route path = "/add-salary/:id" component = {CreeateSalaryComponent}></Route>
                          <Route path = "/salaries" component = {ListSalaryComponent}></Route>
                          <Route path = "/view-salary/:id" component = {ViewSalaryComponent}></Route>



                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
