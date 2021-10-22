import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
import { Provider } from 'react-redux';
import {
    BrowserRouter, Redirect,
    Switch, Route,
    withRouter, // Link, useParams, useLocation,
} from "react-router-dom";
import { connect } from "react-redux";
import { Home,TopSearchdUsers, TopSearchdPosts, TopSearchdHashtags, TopSearchdLocations } from "./Components/statistics";
import Profile from "./Components/Profile";
import store from "./reducers/store";
import MyNavbar from "./Components/navbar";
import { ExploreHash, ExploreLoc } from "./Components/explore";
import Post, { ModalPostWithRouter } from "./Components/Post";
import { action_types } from "./tools";
import PropTypes from "prop-types";
import "./css/igtool1.css";
import "./css/igtool2.css";
import "./css/igtool3.css";
import "./css/igtool.css";
import "./css/progress.css";
import "./css/font-awesome.min.css";
import { RegisterForm } from './Components/Auth';

class App extends React.Component {
    handleClick(){
        let {toggle_modal} = this.props;
        toggle_modal();
    }
    render() {
        let location = this.props.location;
        let background = location.state && location.state.background;
        let display = this.props.modal_download ? "block" : "none";
        return <>
            <section className="_9eogI E3X2T">
                <main className="SCxLW  o64aR" role="main">
                    <div
                        style={{ display}}
                        onClick={this.handleClick.bind(this)}
                        className="_2dDPU CkGkG"
                        role="dialog"
                    >
                        <div style={{margin:"10px",border:"2px green solid",backgroundColor:"#DDDDDD"}} >
                            <span id="currentFile">Starting ...</span>
                            <br />
                            <div className="w3-container">
                                <div className="w3-light-grey w3-round-xlarge">
                                    <div id="progressBar" className="w3-container w3-blue w3-round-xlarge" style={{ width: "0%" }}>0%</div>
                                </div>
                            </div>
                        </div>
                        <div className="Igw0E IwRSH eGOV_ _4EzTm BI4qX qJPeX fm1AK TxciK yiMZG">
                            <button name="x" className="wpO6b" type="button">
                                <div name="x" className="QBdPU ">
                                    <svg name="x" aria-label="Fermer" className="_8-yf5 " fill="#ffffff" height="24" viewBox="0 0 48 48" width="24">
                                        <path name="x" clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>

                    </div>
                    <br />
                    <div className="v9tJq AAaSh VfzDr">
                        <Switch location={background || location}>
                            <Route exact path="/" >
                                <Home />
                            </Route>
                            <Route exact path="/Login" >
                                <RegisterForm />
                            </Route>
                            <Route exact path="/statistics/users/" >
                                <TopSearchdUsers page={1} />
                            </Route>
                            <Route exact path="/statistics/posts/" >
                                <TopSearchdPosts page={1} />
                            </Route>
                            <Route exact path="/statistics/hashtags/" >
                                <TopSearchdHashtags page={1} />
                            </Route>
                            <Route exact path="/statistics/locations/" >
                                <TopSearchdLocations page={1} />
                            </Route>

                            <Route exact path="/p/:shortcode/" >
                                <Post />
                            </Route>
                            <Redirect from="/tv/:shortcode/" to="/p/:shortcode/" />
                            <Redirect from="/reel/:shortcode/" to="/p/:shortcode/" />
                            <Route exact path="/:username/" >
                                <Profile />
                            </Route>
                            <Route exact path="/explore/tags/:tag/" >
                                <ExploreHash />
                            </Route>
                            <Route exact path="/explore/locations/:location/" >
                                <ExploreLoc />
                            </Route>
                            <Route path="/*">
                                <NotExist />
                            </Route>
                        </Switch>
                        <Route exact path="/:username/channel/" >
                            <Profile opt={"channel"} />
                        </Route>
                        {/* <Route exact path="/:username/guides/" >
                            <Profile opt={"guides"} />
                        </Route> */}
                        {
                            background && <Route path="/p/:shortcode" >
                                <ModalPostWithRouter>
                                    <Post />
                                </ModalPostWithRouter>
                            </Route>
                        }

                    </div>
                </main>
                <MyNavbar />
            </section>
        </>
    }
}
const mapStateToPropsApp = state => ({
    modal_download: state.ig_reducer.modal_download
})
const mapDispatchToPropsApp = dispatch => ({
    toggle_modal: () => dispatch({ type: action_types.ig.TOGGLE_MODAL_DOWNLOAD })
})
const AppConnected = connect(
    mapStateToPropsApp,
    mapDispatchToPropsApp
)(App)
const AppConnectedWithRouter = withRouter(AppConnected)

AppConnectedWithRouter.propTypes = {
    modal_download:PropTypes.bool,
    toggle_modal:PropTypes.func
}

function NotExist() {
    return <main className="SCxLW  o64aR " role="main">
        <div className="Igw0E IwRSH YBx95 _4EzTm pwoi_ xUzvG ">
            <h2 className="_7UhW9 x-6xq qyrsm KV-D4 uL8Hv l4b0S">Cette page n’est malheureusement pas disponible.</h2>
            <div className="Igw0E IwRSH eGOV_ _4EzTm oxOrt yMvbc">
                <div className="_7UhW9 vy6Bb MMzan KV-D4 uL8Hv l4b0S">Le lien que vous avez suivi est peut-être rompu, ou la page a été supprimée. <a href="/">Revenir à Instagram.</a>
                </div>
            </div>
        </div>
    </main>;
}

const render = () => ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppConnectedWithRouter />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);