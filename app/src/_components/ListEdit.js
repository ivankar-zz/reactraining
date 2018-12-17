import React, { Component } from 'react';
import Course from './Course';
import { ListGroup, ListGroupItem, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
export default class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.changeSearch = this.changeSearch.bind(this)
    }
    render() {
        return (
            <div>
                <ListGroup>
                    {this.props.courses
                        .map((item) =>
                            <ListGroupItem key={item._id}>
                                <Course course={item} />
                            </ListGroupItem>
                        )}
                </ListGroup>
            </div>
        )
    }
}
