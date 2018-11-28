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

    changeSearch(e) {
        this.setState({
            searchText: e.target.value
        })
    }
    componentDidMount() {
        this.props.requestAll()
    }
    render() {
        return (
            <div>
                <div>
                    <FormGroup>
                        <ControlLabel>Search</ControlLabel>
                        <FormControl type="text" placeholder="Search text" defaultValue='' onChange={this.changeSearch} />
                    </FormGroup>
                    <Button variant="primary" disabled={!this.props.searchEnabled} onClick={() => this.props.filterCourses(this.state.searchText)}>Search</Button>
                    <Button variant="primary">Add new course</Button>

                </div>
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
