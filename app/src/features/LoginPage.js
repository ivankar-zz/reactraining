import LoginComponent from '../_components/LoginComponent';
import { authService } from '../_services';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        loginEnabled: !state.auth.inProgress
    }
}
const mapDispatchToProps = dispatch => ({
    doLogin: (username, password) => {
        dispatch({
            type: "LOGIN_REQUEST"
        });
        authService
            .login(username, password)
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        username: resp.username
                    })
                } else {
                    dispatch({
                        type: "LOGIN_FAILURE"
                    })
                }
            });
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);