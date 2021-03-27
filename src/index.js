import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./reducers/mainReducer"
import React, { Component } from 'react';
import Profile from "./Components/Profile";
import { setVisiMP } from "./actions/Index";
import { connect } from "react-redux";
import MyNavbar from "./Components/navbar";
import ModalContent from "./Components/Post";
import ModernPost,{Postt} from "./Components/Index";

import "./css/igtool1.css";
import "./css/igtool2.css";
import "./css/igtool3.css";
import "./css/igtool.css";
import "./css/progress.css";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


class App extends Component {
    
    render() {
        let showPost = { display: this.props.displayPostModal ? "block" : "none" };
        return <>
            <section className="_9eogI E3X2T">
                <main className="SCxLW  o64aR" role="main">
                    <div id="ModalPost" className="modal" style={showPost}>
                        <div className="modal-content">
                            <span className="close" onClick={() => { this.props.closeModal() }} >×</span>
                            <h1>Header</h1>
                        </div>
                    </div>
                    <div id="ModalDownload" className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => console.log("download")} >×</span>
                            <span id="currentFile">Starting ...</span><br />
                            <div className="w3-container">
                                <div className="w3-light-grey w3-round-xlarge">
                                    <div id="progressBar" className="w3-container w3-blue w3-round-xlarge" style={{ width: "0%" }}>0%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <div className="v9tJq AAaSh VfzDr" id="divtoreplace">
                        <BrowserRouter>
                            <Switch>
                                <Route path="/modern" >
                                    <ModernPost />
                                    {/* <Postt /> */}
                                </Route>
                                <Route path="/p/:shortcode" >
                                    <ModalContent />
                                </Route>
                                <Route path="/:username" >
                                    <Profile />
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </main>
                <MyNavbar />
            </section>
        </>
    }
}
const mapStateToPropsApp = state => ({
    profile_pic_url_hd: state.user.profile_pic_url_hd,
    username: state.user.username
})

const mapDispatchToPropsApp = dispatch => ({
    closeModal: () => dispatch(setVisiMP(false))
})
const AppConnected = connect(
    mapStateToPropsApp,
    mapDispatchToPropsApp
)(App)

const render = () => ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppConnected />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);