import { createStore } from 'redux';
// import {setStateProfile} from "../actions/Index";

// const logAndAdd = amount => {
//     return (dispatch, getState) => {
//         const stateBefore = getState()
//         console.log(`Counter before: ${stateBefore.counter}`)
//         dispatch(incrementByAmount(amount))
//         const stateAfter = getState()
//         console.log(`Counter after: ${stateAfter.counter}`)
//     }
// }
function mainReducer(state = {
    user:{},
    post: {},
    username:"",
    modal_download:false,
    location:{},
    hashtag:{}
}, action) {
    switch (action.type) {
        case 'SET_STATE_PROFILE':
            return { ...state, user: action.data };
        case 'UPDATE_USERNAME':
            return { ...state, username: action.username };
            
        case 'FETCH_POST':
            return { ...state, post: action.data };
        case 'TOGGLE_MODAL_DOWNLOAD':
            return { ...state, modal_download: !state.modal_download };

        case 'FETCH_HASHTAG':
            return { ...state, hashtag: action.data };
        case 'FETCH_LOCATION':
            return { ...state, location: action.data };
        
        default:
            return state;
    }
}
const store = createStore(mainReducer);

export default store;