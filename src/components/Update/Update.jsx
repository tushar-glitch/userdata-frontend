import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './update.css'
function Update() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [userid, setUserid] = useState('')
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
    function handleuserid(e) {
        setUserid(e.target.value)
    }
    const data = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email
    }
    function patchdata() {
        axios.patch(`http://localhost:3002/people/${userid}`, data)
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return (
        <div id="bg">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" placeholder="User Id" onChange={handleuserid}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" onChange={handlefname}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" onChange={handlelname}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" onChange={handleage}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={handleemail}/>
                </Form.Group>
                <Button variant="primary" onClick={patchdata}>
                    Submit
                </Button>
            </Form >
        </div>
    );
}

export default Update;