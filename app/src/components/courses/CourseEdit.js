import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Form from 'react-bootstrap/lib/Form'
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export class CourseEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: {
                authors: ['Misha', 'Pasha']
            },
            allAuthors: ['Petya','Vasya']
        }
        this.toogleAuthor.bind(this)
    }
    toogleAuthor(index) {
        this.setState(state=>({activeAuthor: index}));
    }
    toogleNewAuthor(index) {
        this.setState(state=>({newActiveAuthor: index}));
    }
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Course name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" placeholder="Duration" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Course description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Authors</Form.Label>
                    <Container>
                        <ListGroup>
                            {this.state.course.authors.map((item, index) => <ListGroupItem active = {this.state.activeAuthor === index} key={item} onClick={this.toogleAuthor.bind(this, index)}>{item}</ListGroupItem>)}
                        </ListGroup>
                    </Container>
                    <Container>
                        <Button>Add</Button>
                        <Button>Remove</Button>
                    </Container>
                    <Container>
                    <ListGroup>
                            {this.state.allAuthors.map((item, index) => <ListGroupItem active = {this.state.newActiveAuthor === index} key={item} onClick={this.toogleNewAuthor.bind(this, index)}>{item}</ListGroupItem>)}
                        </ListGroup>
                    </Container>
                </Form.Group>
                <Button variant="primary">
                    Save
                </Button>
                <Button variant="primary">
                    Cancel
                </Button>
            </Form>
        )
    }
}
export default CourseEdit;