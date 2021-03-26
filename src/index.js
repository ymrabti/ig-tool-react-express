import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./reducers/mainReducer"
import React from 'react';
import Profile from "./Components/Profile";
import { setVisiMP } from "./actions/Index";
import { setStateProfile } from "./actions/Index";
import MyNavbar from "./Components/navbar";
import ModalContent from "./Components/Post";

// import "./css/igtool1.css";
// import "./css/igtool2.css";
// import "./css/igtool3.css";
// import "./css/igtool.css";
// import "./css/progress.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";


function ModalGalleryExample() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

function ModalSwitch() {
    let location = useLocation();

    let background = location.state && location.state.background;

    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<Home />} />
                <Route path="/gallery" children={<Gallery />} />
                <Route path="/img/:id" children={<ImageView />} />
            </Switch>

            {/* Show the modal when a background page is set */}
            {background && <Route path="/img/:id" children={<Modal />} />}
        </div>
    );
}

const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
    return (
        <div
            style={{
                width: 50,
                height: 50,
                background: color
            }}
        />
    );
}

function Image({ color }) {
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                background: color
            }}
        />
    );
}

function Home() {
    return (
        <div>
            <Link to="/gallery">Visit the Gallery</Link>
            <h2>Featured Images</h2>
            <ul>
                <li>
                    <Link to="/img/2">Tomato</Link>
                </li>
                <li>
                    <Link to="/img/4">Crimson</Link>
                </li>
            </ul>
        </div>
    );
}

function Gallery() {
    let location = useLocation();

    return (
        <div>
            {IMAGES.map(i => (
                <Link
                    key={i.id}
                    to={{
                        pathname: `/img/${i.id}`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        state: { background: location }
                    }}
                >
                    <Thumbnail color={i.color} />
                    <p>{i.title}</p>
                </Link>
            ))}
        </div>
    );
}

function ImageView() {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color} />
        </div>
    );
}

function Modal() {
    let history = useHistory();
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];

    if (!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <h1>{image.title}</h1>
                <Image color={image.color} />
                <button type="button" onClick={back}>
                    Close
        </button>
            </div>
        </div>
    );
}


function Child() {
    let { username } = useParams();
    fetch(`/${username}`)
        .then(response => response.json())
        .then(data => {
            store.dispatch(setStateProfile(data.graphql.user));
        }).catch(e => {
            alert(`User ${username} not found !`)
        });
    let showPost = { display: store.getState().displayPostModal ? "block" : "none" };
    return <section className="_9eogI E3X2T">
        <main className="SCxLW  o64aR" role="main">
            <div id="ModalPost" className="modal" style={showPost}>
                <div className="modal-content">
                    <span className="close" onClick={() => store.dispatch(setVisiMP(false))} >×</span>
                    <ModalContent />
                </div>
            </div>
            <div id="ModalDownload" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => store.dispatch(setVisiMP(false))} >×</span>
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
                <Profile />
            </div>
        </main>
        <MyNavbar />
    </section>
}
const render = () => ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <Router>
                <Switch>
                    <Route path="/:username" children={<Child />} />
                </Switch>
            </Router> */}
            <ModalGalleryExample />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


render();
// store.subscribe(render);