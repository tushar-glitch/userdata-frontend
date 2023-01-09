import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Delete() {
    const [id, setId] = useState('')
    function handleuserid(e) {
        setId(e.target.value)
    }
    function deleteuser() {
        axios.delete(`http://localhost:3002/people/${id}`)
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message)
            })
    }
    return (
        <div id="bg">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" placeholder="User Id" onChange={handleuserid} />
                </Form.Group>
                <Button variant="primary" onClick={deleteuser}>
                    Submit
                </Button>
            </Form >
        </div>
    );
}

export default Delete;