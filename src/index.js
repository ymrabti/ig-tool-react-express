import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./reducers/mainReducer"
import React, { Component } from 'react';
import Profile from "./Components/Profile";
import { setVisiMP } from "./actions/Index";
import { connect } from "react-redux";
import MyNavbar from "./Components/navbar";
import ModalContent from "./Components/Post";
import Post, { ModalPostWithRouter } from "./Components/Index";
import "./css/igtool1.css";
import "./css/igtool2.css";
import "./css/igtool3.css";
import "./css/igtool.css";
import "./css/progress.css";
import {
    BrowserRouter,
    Switch,
    // Link,
    useParams,
    Route,
    withRouter,
    // useLocation,
} from "react-router-dom";


class App extends Component {
    // componentDidMount() {
    //     console.log(this.props);
    // }
    render() {
        let location = this.props.location;
        let background = location.state && location.state.background;
        // let showPost = { display: this.props.displayPostModal ? "block" : "none" };
        return <>
            <section className="_9eogI E3X2T">
                <main className="SCxLW  o64aR" role="main">
                    <div className="modal">
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
                            <Route exact path="/" >
                                <h1>Welcome home</h1>
                            </Route>
                            <Route exact path="/p/:shortcode" >
                                <Post />
                            </Route>
                            <Route exact path="/old/:shortcode" >
                                <ModalContent />
                            </Route>
                            <Route exact path="/:username" >
                                <Profile />
                            </Route>
                            <Route exact path="/:username/igtv" >
                                <Igtv />
                            </Route>
                            <Route path="*">
                                <NotExist />
                            </Route>
                        </Switch>
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


function Igtv() {
    const {username} = useParams();
    return <h1>Igtv {" "+username}</h1>;
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
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);