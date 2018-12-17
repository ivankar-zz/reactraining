export const authors = (state = { inProgress: false, authors: []}, action) => {
    switch (action.type) {
        case "AUTHORS_REQUEST":
            return {
                ...state,
                inProgress: true
            }
        case "AUTHORS_REQUEST_SUCCESS":
            console.log(action)
            return {
                ...state,
                authors: action.authors,
                inProgress: false
            }
        case "AUTHORS_REQUEST_FAILURE":
            return {
                ...state,
                inProgress: false
            }
        default:
            return state;
    }
}
