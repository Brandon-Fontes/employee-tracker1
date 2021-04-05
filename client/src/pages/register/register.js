import CreateEmployeeComponent from "../../components/CreateEmployeeComponent";
import React, { useEffect, useState } from "react";
import API from "../../utils/api";

function Register() {
    const [register, setRegister] = useState([])
    const [formObject, setFormObject] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        salary: 0,
    })

    useEffect(() => {
        loadRegister()
    }, [])

    function loadRegister() {
        API.getRegister()
            .then(res =>
                setRegister(res.data)
                )
                    .catch(err => console.log(err));
    };
    function deleteRegister(id) {
        API.deleteRegister(id)
            .then(res => loadRegister())
                .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.firstName && formObject.lastName) {
            API.saveRegister({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email
            })
                .then(() => setFormObject({
                    firstName: "",
                    lastName: "",
                    email: ""
                }))
                    .then(() => loadRegister())
                        .catch(err => console.log(err));
        }
    };

    return (
        <CreateEmployeeComponent />
    )
}