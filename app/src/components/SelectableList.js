import React, { Component } from 'react';
import CoursePreview from './CoursePreview';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class SelectableList extends Component {
    
    constructor(props) {
        super(props)
    }
    select(index) {
        this.setState(state=>({
            selected: index
        }))
    }
    render() {
        return (
            <ListGroup>
                {this.props.items.map((item) =>
                    <ListGroupItem key={item}>
                        <CoursePreview course={item} />
                    </ListGroupItem>
                )}
            </ListGroup>
        )
    }
}
export default SelectableList;