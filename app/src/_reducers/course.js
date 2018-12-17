export const course = (state = { inProgress: false, course: {}}, action) => {
    switch (action.type) {
        case "COURSE_REQUEST":
            return {
                ...state,
                inProgress: true
            }
        case "COURSE_REQUEST_SUCCESS":
            return {
                ...state,
                course: action.course,
                inProgress: false
            }
        case "COURSE_REQUEST_FAILURE":
            return {
                ...state,
                inProgress: false
            }
        case "SAVE_COURSE_REQUEST":
            return {
                ...state,
                course: course,
                inProgress: true
            }
        case "SAVE_COURSE_REQUEST_SUCCESS":
            return {
                ...state,
                course: action.course,
                inProgress: false
            }
        case "SAVE_COURSE_REQUEST_FAILURE":
            return {
                ...state,
                inProgress: false
            }
        
        default:
            return state;
    }
}
