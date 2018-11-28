import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

export default class Course extends Component {

    render() {
        return (
            <div>
            <div>Name: {this.props.course.name}</div>
            <div>Duration: {this.props.course.duration}</div>
            <div>Description: {this.props.course.description}</div>
            <div>Authors: {this.props.course.authors.map((author,i) =><span key={author}>{!!i && ", "}{author}</span>)}</div>
            <Button bsStyle="warning">Edit</Button>
            <Button bsStyle="danger">Delete</Button>
        </div>
        )
    }
}
