import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'

class Login extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" placeholder="Login" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">
                    Submit
                </Button>
            </Form>
        )
    }
}
export default Login;