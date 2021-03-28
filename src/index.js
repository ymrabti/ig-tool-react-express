import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./reducers/mainReducer"
import React, { Component } from 'react';
import Profile from "./Components/Profile";
import { setVisiMP } from "./actions/Index";
import { connect } from "react-redux";
import MyNavbar from "./Components/navbar";
import ModalContent from "./Components/Post";
import ModernPost, { ModalPostWithRouter } from "./Components/Index";
import { ModalSwitchWithRouter } from "./setupTests";
import "./css/igtool1.css";
import "./css/igtool2.css";
import "./css/igtool3.css";
import "./css/igtool.css";
import "./css/progress.css";
import {
    BrowserRouter,
    Switch,
    Link,
    Route,
    withRouter,
} from "react-router-dom";


class App extends Component {
    // componentDidMount() {
    //     console.log(this.props);
    // }
    render() {
        let location = this.props.location;
        let background = location.state && location.state.background;
        console.log(location);
        console.log(background);
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
                    <br />
                    <div className="v9tJq AAaSh VfzDr" id="divtoreplace">
                        <Switch location={background || location}>
                            <Route exact path="/modern/:shortcode" >
                                <ModernPost />
                            </Route>
                            <Route exact path="/p/:shortcode" >
                                <ModalContent />
                            </Route>
                            <Route exact path="/pubs">
                                <div style={
                                    {
                                        width:"20em",
                                        height:"30em",
                                        padding:"8em",
                                        border:"3px red solid"
                                    }
                                }>
                                    <Link to={{
                                        pathname: `/modern/shortcode`,
                                        state: { background: location }
                                    }}>show modal</Link>
                                </div>
                            </Route>
                            <Route exact path="/:username" >
                                <Profile />
                            </Route>
                            <Route path="*">
                                <NotExist />
                            </Route>
                        </Switch>
                        {
                            background && <Route path="/p/:shortcode" 
                            children={
                                <div
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        background: "rgba(0, 0, 0, 0.29)"
                                    }}
                                >
                                    <ModernPost />
                                </div>
                            }
                            />
                        }

                    </div>
                </main>
                <MyNavbar />
            </section>
        </>
    }
}
function NotExist() {
    return <h1>not found</h1>;
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


const AppConnectedWithRouter = withRouter(AppConnected)

const render = () => ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppConnectedWithRouter />
                {/* <ModalSwitchWithRouter/> */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);