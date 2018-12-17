import CourseListComponent from '../_components/CourseList';
import { courseService } from '../_services';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses.courses,
        filter: state.courses.filter,
        searchEnabled: !state.course.inProgress
    }
}
const mapDispatchToProps = dispatch => ({
    requestAll: () => {
        dispatch({
            type: "COURSES_REQUEST"
        });
        courseService
            .listAll()
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "COURSES_REQUEST_SUCCESS",
                        courses: resp.courses
                    })
                } else {
                    dispatch({
                        type: "COURSES_REQUEST_FAILURE",
                        error: resp.error
                    })
                }
            });
  
    },
    filterCourses: (text) => {
        dispatch({
            type: "COURSES_REQUEST",
            filter: text
        });
        courseService
            .filter(text)
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "COURSES_REQUEST_SUCCESS",
                        courses: resp.courses
                    })
                } else {
                    dispatch({
                        type: "COURSES_REQUEST_FAILURE",
                        error: resp.error
                    })
                }
            });
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseListComponent);