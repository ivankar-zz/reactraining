import CourseEdit from '../_components/CourseEdit';
import { courseService, authorService } from '../_services';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        course: state.course.course,
        loading: state.course.inProgress,
        loadingAuthors: state.authors.inProgress,
        allAuthors: state.authors.authors
    }
}
const mapDispatchToProps = dispatch => ({
    save: (course) => {
        dispatch({
            type: "SAVE_COURSE_REQUEST",
            course: course
        });
        courseService
            .save(course)
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "SAVE_COURSE_REQUEST_SUCCESS",
                        course: resp.course
                    })
                } else {
                    dispatch({
                        type: "SAVE_COURSE_REQUEST_FAILURE",
                        error: resp.error
                    })
                }
            });
    },
    getCourse: (id) => {
        dispatch({
            type: "COURSE_REQUEST",
            _id: id
        });
        courseService
            .get(id)
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "COURSE_REQUEST_SUCCESS",
                        course: resp.course
                    })
                } else {
                    dispatch({
                        type: "COURSE_REQUEST_FAILURE",
                        error: resp.error
                    })
                }
            });
    },
    getAuthors: () => {
        dispatch({
            type: "AUTHORS_REQUEST"
        });
        authorService
            .get()
            .then(resp => {
                if (resp.status === "success") {
                    dispatch({
                        type: "AUTHORS_REQUEST_SUCCESS",
                        authors: resp.authors
                    })
                } else {
                    dispatch({
                        type: "AUHTORS_REQUEST_FAILURE",
                        error: resp.error
                    })
                }
            });
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseEdit);