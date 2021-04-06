import React, { Component } from "react";
import logo from '../image/logo.png';
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <img src={logo} alt="Logo" />;
            <ul style = {{ float: 'left',}}>
           <li style = {{ float: 'left',}}><Link to="/employees">Home</Link></li>
            <li style = {{ float: 'left',}} ><Link to="/employees" >Employees</Link></li>
            <li  style = {{ float: 'left',}}><Link to="/salaries">Salary</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
