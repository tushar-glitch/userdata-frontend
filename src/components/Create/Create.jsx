import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './create.css'
import { useState } from 'react';
import axios from 'axios';
function Create() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    function handlefname(e) {
        setFirstname(e.target.value)
        console.log(firstname);
    }
    function handlelname(e) {
        setLastname(e.target.value)
    }
    function handleage(e) {
        setAge(e.target.value)
    }
    function handleemail(e) {
        setEmail(e.target.value)
    }
    const data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email
    }
    function postdata() {
        axios.post('http://localhost:3002/people', data)
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    alert(res.data.message)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div id="bg">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" onChange={handlefname} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" onChange={handlelname} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" onChange={handleage} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={handleemail} />
                </Form.Group>
                <Button variant="primary" onClick={postdata}>
                    Submit
                </Button>
            </Form >
        </div>
    );
}

export default Create;