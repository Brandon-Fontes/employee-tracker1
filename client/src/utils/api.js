import axios from "axios";

export default {
    getRegisters: function() {
        return axios.get('/api/register');
        },
    
        getRegister: function (id) {
            return axios.get("/api/register" + id);
        },

        deleteRegister: function(id) {
            return axios.delete("/api/register");
        },
    
        saveRegister: function(registerData) {
            
            return axios.post("/api/register", registerData);
        },

         getSalaries: function() {
        return axios.get('/api/salary');
        },
    
        getSalary: function (id) {
            return axios.get("/api/salary" + id);
        },

        deleteSalary: function(id) {
            return axios.delete("/api/salary");
        },
    
        saveSalary: function(salaryData) {
            
            return axios.post("/api/salary", salaryData);
        },
    
};