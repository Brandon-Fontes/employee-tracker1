import React, { Component } from 'react'
import SalaryService from '../../services/SalaryService'

class ViewSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            salary: {}
        }
    }

    componentDidMount(){
        SalaryService.getSalaryById(this.state.id).then( res => {
            this.setState({salary: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Salary Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: &nbsp; </label>
                            <div> { this.state.salary.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: &nbsp; </label>
                            <div> { this.state.salary.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Salary: &nbsp; </label>
                            <div> { this.state.salary.salary }</div>
                        </div>
                                     

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSalaryComponent
