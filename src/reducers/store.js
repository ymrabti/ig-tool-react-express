import { createStore,combineReducers } from 'redux';
import { statisticsReducer } from "./statistics_reducer";
import { ig_reducer } from "./ig_reducer";
/* import {setStateProfile} from "../actions/Index";
const logAndAdd = amount => {
    return (dispatch, getState) => {
        const stateBefore = getState()
        console. log(`Counter before: ${stateBefore.counter}`)
        dispatch(incrementByAmount(amount))
        const stateAfter = getState()
        console. log(`Counter after: ${stateAfter.counter}`)
    }
} */

let common_reducer = combineReducers({ ig_reducer,statisticsReducer});

const store = createStore(common_reducer);

export default store;