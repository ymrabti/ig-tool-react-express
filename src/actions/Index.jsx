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

export const setVisiMP = (Display) => ({
    type: "SHOW_MODAL_POST",
    Display
})



export const updateUsername = (username) => ({
    type: "UPDATE_USERNAME",
    username
})

