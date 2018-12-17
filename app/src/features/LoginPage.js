import LoginComponent from '../_components/LoginComponent';
import { authService } from '../_services';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        loginEnabled: !state.auth.inProgress,
        error: state.auth.error
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
                        type: "LOGIN_FAILURE",
                        error: resp.error
                    })
                }
            });
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);