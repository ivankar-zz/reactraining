import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserInfoComponent extends Component {
    render() {
        return(
            <span>{this.props.username}</span>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      username: state.auth.username
    }
  }
export default connect(mapStateToProps)(UserInfoComponent);
