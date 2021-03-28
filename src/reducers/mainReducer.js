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
    displayPostModal: false,
    isLoading:true,
    username:"",
    vdeoPlayed:false,
    vdeoSound:false
}, action) {
    switch (action.type) {
        case 'SHOW_MODAL_POST':
            if (action.Display) {
                return { ...state, displayPostModal: action.Display };
            }else{
                return { ...state, displayPostModal: action.Display,post:{} };
            }
        case 'SET_STATE_PROFILE':
            return { ...state, user: action.data };
        case 'FETCH_POST':
            return { ...state, post: action.data };
        case 'UPDATE_USERNAME':
            return { ...state, username: action.username };
        
        case 'TOGGLE_VIDEO_SOUND':
            return { ...state, vdeoPlayed: !state.vdeoPlayed };
        case 'TOGGLE_VIDEO_PLAY':
            return { ...state, vdeoSound: !state.vdeoSound };
        default:
            return state;
    }
}
const store = createStore(mainReducer);

export default store;