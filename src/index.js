import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./reducers/mainReducer"
import React from 'react';
import Profile from "./Components/Profile";
import { Waiting } from "./tools";

import "./css/igtool1.css";
import "./css/igtool2.css";
import "./css/igtool3.css";
import "./css/igtool.css";
import "./css/progress.css";
const user = store.getState().user;
let objectFilter = Object.values(user);
const render = () => ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {
                objectFilter.length !== 0 ? <Profile /> :
                    <div className="divLoader"><Waiting /></div>
            }
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);