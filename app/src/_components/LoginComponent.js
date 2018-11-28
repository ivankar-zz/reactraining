import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import {FormGroup, ControlLabel, FormControl, Form} from 'react-bootstrap';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.changeInput = this.changeInput.bind(this)
    }

    changeInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    doSubmit() {
        const { username, password } = this.state
        this.props.doLogin(username, password)
    }

    render() {
        return (
            <Form onSubmit={e => { e.preventDefault(); this.doSubmit(); }}>
                <FormGroup >
                    <ControlLabel>Login</ControlLabel>
                    <FormControl type="text" placeholder="Login" name="username" value={this.state.username} onChange={this.changeInput} />
                </FormGroup>
                <FormGroup >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeInput} />
                </FormGroup>
                <Button type="submit" disabled={!this.props.loginEnabled} variant="primary">Submit</Button>
            </Form>
        )
    }
}
