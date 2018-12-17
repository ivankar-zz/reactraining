export const auth = (state = { authorized: false, inProgress: false}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                authorized: true,
                username: action.username,
                inProgress: false
            }
        case "LOGIN_REQUEST":
            return {
                username: undefined,
                authorized: false,
                inProgress: true
            }
        case "LOGIN_FAILURE":
            return {
                username: undefined,
                authorized: false,
                inProgress: false,
                error: action.error
            }
        default:
            return state;
    }
}
