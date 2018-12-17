import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class Course extends Component {

    render() {
        return (
            <div>
                <div>Name: {this.props.course.name}</div>
                <div>Duration: {this.props.course.duration}</div>
                <div>Description: {this.props.course.description}</div>
                <div>Authors: {this.props.course.authors.map((author, i) => <span key={author._id}>{!!i && ", "}{author.name}</span>)}</div>
                <Link to={"/courses/" + this.props.course._id}>
                    <Button bsStyle="warning">Edit</Button>
                </Link>
                <Button bsStyle="danger">Delete</Button>
            </div>
        )
    }
}
