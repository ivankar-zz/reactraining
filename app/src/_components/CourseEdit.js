import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Form, Button } from 'react-bootstrap';

export default class CourseEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            duration: 0,
            description: '',
            authors: [],
            availableAuthors: [],
            addAuthor: [],
            removeAuthor: [],
            allAuthors: []
        }
        this.changeInput = this.changeInput.bind(this)
        this.removeAuthor = this.removeAuthor.bind(this)
        this.addAuthor = this.addAuthor.bind(this)
        this.changeSelect = this.changeSelect.bind(this)
    }

    changeInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    changeSelect(e) {
        const name = e.target.name;
        this.setState({
            [name]: [e.target.value]
        })
    }
    componentDidMount() {
        if (this.props.match.params.course_id) {
            this.props.getCourse(this.props.match.params.course_id)
        }
        this.props.getAuthors();
    }

    componentWillReceiveProps(newProps, oldProps) {
        let courseAuthors = this.state.courses
        let allAuthors = this.state.allAuthors
        if (newProps.course) {
            const { name, duration, description, authors = [] } = newProps.course ? newProps.course : {};
            this.setState({
                name: name,
                duration: duration,
                description: description,
                authors: authors
            })
            courseAuthors = authors;
        }
        if (newProps.allAuthors) {
            this.setState({
                allAuthors: newProps.allAuthors
            })
            allAuthors = newProps.allAuthors;
        }

        let authorIds = courseAuthors.map(item => item._id);
        let availableAuthors = allAuthors.filter(item => !authorIds.includes(item._id))
        this.setState({
            availableAuthors: availableAuthors
        })

    }


    addAuthor() {
        if (this.state.addAuthor.length > 0) {
            let availableAuthors = this.state.availableAuthors.filter(item => item._id !== this.state.addAuthor[0])
            let addedAuthor = this.state.availableAuthors.find(item => item._id === this.state.addAuthor[0]);
            let newAuthors = this.state.authors.slice();
            newAuthors.push(addedAuthor);
            this.setState({
                authors: newAuthors,
                availableAuthors: availableAuthors,
                addAuthor: []
            })
        }
    }

    removeAuthor() {
        if (this.state.removeAuthor.length > 0) {
            let removedAuthor = this.state.authors.find(item => item._id === this.state.removeAuthor[0]);
            let newAuthors = this.state.authors.filter(item => item._id !== this.state.removeAuthor[0])
            let availableAuthors = this.state.availableAuthors.slice();
            availableAuthors.push(removedAuthor)
            this.setState({
                authors: newAuthors,
                availableAuthors: availableAuthors,
                removeAuthor: []
            })
        }
    }

    doSubmit() {
        console.log("sumbit course")
    }

    render() {
        return (
            <div>
                <h1>Editing course</h1>
                {this.props.loading || this.props.loadingAuthors
                    ? <div>Loading Course</div>
                    :
                    <Form onSubmit={e => { e.preventDefault(); this.doSubmit(); }}>
                        <FormGroup >
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" name="name" value={this.state.name} onChange={this.changeInput} />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Duration (minutes)</ControlLabel>
                            <FormControl type="number" name="duration" value={this.state.duration} onChange={this.changeInput} />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Desciption</ControlLabel>
                            <FormControl type="textarea" componentClass="textarea" name="desciption" value={this.state.description} onChange={this.changeInput} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Authors</ControlLabel>
                            <FormControl componentClass="select" multiple name="removeAuthor" onChange={this.changeSelect} value={this.state.removeAuthor}>
                                {this.state.authors.map((author, i) => <option key={author._id} value={author._id}>{author.name}</option>)}
                            </FormControl>
                            <Button variant="primary" onClick={this.removeAuthor}>Remove</Button>
                            <FormControl componentClass="select" multiple name="addAuthor" onChange={this.changeSelect} value={this.state.addAuthor}>
                                {this.state.availableAuthors.map((author, i) => <option key={author._id} value={author._id}>{author.name}</option>)}
                            </FormControl>
                            <Button variant="primary" onClick={this.addAuthor}>Add</Button>
                        </FormGroup>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form>
                }
            </div>
        )
    }
}
