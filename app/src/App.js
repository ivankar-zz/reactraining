import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './features/LoginPage';
import Courses from './features/CoursesPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Logo from './features/Logo'
import UserInfo from './features/UserInfo'
import CourseEditPage from './features/CourseEditPage'
class AppComponent extends Component {
  render() {
    return (
      <div>
        <Logo />
        {this.props.authorized ? <UserInfo /> : null}
        <Router>
          <Switch>
            <Route exact path="/login" render={props => this.props.authorized ? <Redirect to="/courses" /> : <Login />}>
            </Route>
            <Route exact path="/courses" render={props => this.props.authorized ? <Courses /> : <Redirect to="/login" />} s>
            </Route>
            <Route exact path="/courses/_new">
              {this.props.authorized ? <CourseEditPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/courses/:course_id" render={props => this.props.authorized ? <CourseEditPage {...props} /> : <Redirect to="/login" />} />
            <Route>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    authorized: state.auth.authorized,
    username: state.auth.username
  }
}
export default connect(mapStateToProps)(AppComponent);
