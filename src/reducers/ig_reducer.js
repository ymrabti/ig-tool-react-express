import { action_types } from "../tools";
export function ig_reducer(state = {
    user: {},
    post: {},
    username: "",
    modal_download: false,
    location: {},
    hashtag: {}
}, action) {
    switch (action.type) {
        case action_types.ig.SET_STATE_PROFILE:
            return { ...state, user: action.data };
        case action_types.ig.UPDATE_USERNAME:
            return { ...state, username: action.username };

        case action_types.ig.FETCH_POST:
            return { ...state, post: action.data };
        case action_types.ig.TOGGLE_MODAL_DOWNLOAD:
            return { ...state, modal_download: !state.modal_download };

        case action_types.ig.FETCH_HASHTAG:
            return { ...state, hashtag: action.data };
        case action_types.ig.FETCH_LOCATION:
            return { ...state, location: action.data };

        default:
            return state;
    }
}
