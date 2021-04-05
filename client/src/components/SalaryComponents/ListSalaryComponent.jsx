import React, { Component } from 'react'
import SalaryService from '../../services/SalaryService'

class ListSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                salaries: [],
                filterStr: ''
        }
        this.addSalary = this.addSalary.bind(this);
        this.editSalary = this.editSalary.bind(this);
        this.deleteSalary = this.deleteSalary.bind(this);
    }

    deleteSalary(id){
        SalaryService.deleteSalary(id).then( res => {
            this.setState({salaries: this.state.salaries.filter(salary => salary.id !== id)});
        });
    }
    viewSalary(id){
        this.props.history.push(`/view-salary/${id}`);
    }
    editSalary(id){
        this.props.history.push(`/add-salary/${id}`);
    }
    changeSearchHandler= (event) => {

        this.setState({filterStr: event.target.value});
        

    }

    componentDidMount(){
        SalaryService.getSalaries().then((res) => {
            this.setState({ salaries: res.data});
        });
    }

    addSalary(){
        this.props.history.push('/add-salary/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Salary List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSalary}> Add Salary</button>
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
                                    
                                    <th>  Salary</th>
                                    
                                    <th> Actions</th>
                                    
                                </tr>
                                
                            </thead>

                            
                            <tbody>
                                {
                                    this.state.salaries.filter(salary => salary.firstName.toLowerCase().includes(this.state.filterStr.toLowerCase())).map(
                                        salary =>  
                                        <tr key = {salary._id}>
                                             <td> { salary.firstName} </td>   
                                             <td> {salary.lastName}</td>
                                              
                                             <td> {salary.salary}</td>
                                             <td>
                                                 <button onClick={ () => this.editSalary(salary._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSalary(salary._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewSalary(salary._id)} className="btn btn-info">View </button>
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

export default ListSalaryComponent
