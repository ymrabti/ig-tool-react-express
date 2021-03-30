export const setStateProfile = (data) => ({
    type: "SET_STATE_PROFILE",
    data
})
export const fetchPost = (data) => {
    return {
        type: "FETCH_POST",
        data
    }
}
export const updateUsername = (username) => ({
    type: "UPDATE_USERNAME",
    username
})
export const fetchLocation = (data) => {
    return {
        type: "FETCH_LOCATION",
        data
    }
}
export const fetchHashtag = (data) => {
    return {
        type: "FETCH_HASHTAG",
        data
    }
}
