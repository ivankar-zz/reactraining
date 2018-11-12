import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container'
import Button from 'react-bootstrap/lib/Button'
class CoursePreview extends Component {
    render() {
        return (
            <Container>
                <div>Name: {this.props.course.name}</div>
                <div>Duration: {this.props.course.duration}</div>
                <div>Description: {this.props.course.description}</div>
                <div>Authors: {this.props.course.authors.map(author =><span key={author}>{author}</span>)}</div>
                <Button bsStyle="warning">Edit</Button>
                <Button bsStyle="danger">Delete</Button>
            </Container>
        )
    }
}
export default CoursePreview;