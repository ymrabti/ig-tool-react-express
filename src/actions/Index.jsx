import { action_types } from "../tools";
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

// Statistics actions

export const TopUsersAction = (data) => {
    return {
        type: action_types.statistics.top_users,
        data
    }
}
export const TopPostsAction = (data) => {
    return {
        type: action_types.statistics.top_posts,
        data
    }
}
export const TopHashtagsAction = (data) => {
    return {
        type: action_types.statistics.top_hashtags,
        data
    }
}
export const TopLocationsAction = (data) => {
    return {
        type: action_types.statistics.top_locations,
        data
    }
}
