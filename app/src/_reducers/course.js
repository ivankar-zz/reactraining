export const course = (state = { filter: '', inProgress: false, courses: []}, action) => {
    console.log(action)
    switch (action.type) {
        case "COURSES_REQUEST":
            return {
                ...state,
                inProgress: true
            }
        case "COURSES_REQUEST_SUCCESS":
            return {
                ...state,
                courses: action.courses,
                inProgress: false
            }
        case "COURSES_REQUEST_FAILURE":
            return {
                ...state,
                inProgress: false
            }
        default:
            return state;
    }
}
