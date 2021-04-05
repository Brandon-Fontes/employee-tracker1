import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/salary";

class SalaryService {

    getSalaries(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createSalary(salary){
        return axios.post(EMPLOYEE_API_BASE_URL, salary);
    }

    getSalaryById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateSalary(salary, salaryId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + salaryId, salary);
    }

    deleteSalary(salaryId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + salaryId);
    }
}

export default new SalaryService()