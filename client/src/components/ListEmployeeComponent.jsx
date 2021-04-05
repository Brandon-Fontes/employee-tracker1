import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
                filteredEmployees: [],
                filterStr: ''
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        console.log(id, this);
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

     changeSearchHandler= (event) => {

        this.setState({filterStr: event.target.value});
        

    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <form>
                <div className = "form-group">
                    <input placeholder="Search" name="filterStr" className="form-control" 
                        value={this.state.filterStr} onChange={this.changeSearchHandler}/>
                </div>
                 </form>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  First Name</th>
                                    <th>  Last Name</th>
                                    
                                    <th>  Email</th>
                                    
                                    <th> Actions</th>
                                    
                                </tr>
                                
                            </thead>

                            
                            <tbody>
                                {
                                   this.state.employees.filter(employee => employee.firstName.toLowerCase().includes(this.state.filterStr.toLowerCase())).map(
                                        employee => 
                                        <tr key = {employee._id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                              
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee._id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
