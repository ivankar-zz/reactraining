import React, { Component } from 'react';
import CoursePreview from './CoursePreview';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Container from 'react-bootstrap/lib/Container';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormLabel from 'react-bootstrap/lib/FormLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

class CoursesList extends Component {
    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            courses: this.props.courseService.listAll()
        }
    }
    handleSearch() {
        this.setState(state=>({ 
            courses: this.props.courseService.find(this.search.value)
        }));
    }

    render() {

        return (
            <div>
                <Container>
                    <Form>
                        <FormGroup>
                            <FormLabel>Search</FormLabel>
                            <FormControl type="text" placeholder="Search text" defaultValue='' ref={ref => this.search = ref}/>
                        </FormGroup>
                        <Button variant="primary" onClick={this.handleSearch}>Search</Button>
                        <Button variant="primary">Add new course</Button>
                    </Form>
                </Container>
                <ListGroup>
                    {this.state.courses
                    .map((item) =>
                        <ListGroupItem key={item._id}>
                            <CoursePreview course={item} />
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )
    }
}
export default CoursesList;