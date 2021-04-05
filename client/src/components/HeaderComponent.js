import React, { Component } from "react";
import logo from '../image/logo.png';

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
           <li style = {{ float: 'left',}}><a href="/employees">Home</a></li>
            <li style = {{ float: 'left',}} ><a href="/employees">Employees</a></li>
            <li  style = {{ float: 'left',}}><a href="/salaries">Salary</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
