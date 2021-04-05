import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import SalaryService from '../../services/SalaryService';

class CreateSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateSalary = this.saveOrUpdateSalary.bind(this);
    }
        
    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            SalaryService.getSalaryById(this.state.id).then( (res) =>{
                let salary = res.data;
                this.setState({
                    firstName: salary.firstName,
                    lastName: salary.lastName,
                    salary: salary.salary
                });
            });
        }        
    }
    saveOrUpdateSalary = (e) => {
        e.preventDefault();
        let salary = {firstName: this.state.firstName, lastName: this.state.lastName, salary: this.state.salary};
        console.log('employee => ' + JSON.stringify(salary));

        // step 5
        if(this.state.id === '_add'){
            SalaryService.createSalary(salary).then(res =>{
                this.props.history.push('/salaries');
            });
        }else{
            SalaryService.updateSalary(salary, this.state.id).then( res => {
                this.props.history.push('/salaries');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    
   
    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
 
    cancel(){
        this.props.history.push('/salaries');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Salary</h3>
        }else{
            return <h3 className="text-center">Update Salary</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                         
                                        
                                        <div className = "form-group">
                                            <label> Salary: </label>
                                            <input placeholder="Salary" name="contact" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateSalary}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateSalaryComponent
