import { action_types } from "../tools";
export function statisticsReducer(state = {
    TopSearchedUsers: [],
    TopSearchedPosts: [],
    TopSearchedHashtags: [],
    TopSearchedLocations: []
}, action) {
    switch (action.type) {
        case action_types.statistics.top_users:
            return { ...state, TopSearchedUsers: /* state.TopSearchedUsers.concat */(action.data) };
        case action_types.statistics.top_posts:
            return { ...state, TopSearchedPosts: /* state.TopSearchedPosts.concat */(action.data) };
        case action_types.statistics.top_hashtags:
            return { ...state, TopSearchedHashtags: /* state.TopSearchedHashtags.concat */(action.data) };
        case action_types.statistics.top_locations:
            return { ...state, TopSearchedLocations: /* state.TopSearchedLocations.concat */(action.data) };

        default:
            return state;
    }
}