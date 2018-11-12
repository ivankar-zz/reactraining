import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container'
import Login from './components/Login';
import CoursesList from './components/courses/CoursesList'
import CourseEdit from './components/courses/CourseEdit'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CourseService from './services/CourseService'
var courseService = new CourseService();
class App extends Component {
  render() {
    return (
      <Container>
        <Header username="Test user" authorized="true"/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/courses/_new">New Course</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Login} />
            <Route exact path="/courses" render={() => <CoursesList courseService={courseService} />} />
            <Route path="/courses/_new" component={CourseEdit} />
          </div>
        </Router>
        <Footer/>
      </Container>
    );
  }
}

export default App;
