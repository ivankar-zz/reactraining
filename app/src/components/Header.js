import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container'
import Logo from './Logo'

class UserInfo extends Component {
    render() {
        return (
            <p class="font-italic">{this.props.username}</p>
        );
    }
}
class Header extends Component {
    render() {
        return (
            <Container>
                <Logo />
                {this.props.authorized ? <UserInfo username={this.props.username}></UserInfo> : <p>"Need to login"</p>}
            </Container>
        );
    }
}

export default Header;
