<ul key={username_comment + " " + index} className="Mr508">
    <div role="button" className="ZyFrc" tabIndex="0">
        <li className="gElp9 rUo9f" role="menuitem">
            <div className="P9YgZ">

            </div>
        </li>
    </div>
</ul>

// https://drive.google.com/file/d/1usOA18_7UGWsndyr5tIQsCIq8N15-Qsp/view?usp=sharing

var options = { year: 'numeric', month: 'long', day: 'numeric' };
var opt_weekday = { weekday: 'long' };
var today = new Date();
var weekday = toTitleCase(today.toLocaleDateString("fr-FR", opt_weekday));

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

var the_date = weekday + ", " + today.toLocaleDateString("fr-FR", options)


const myobj = { gameOver: Runner.prototype.gameOver }
Runner.prototype.gameOver = () => { }
setTimeout(() => {
    console.log("its time to save record!");
    Runner.prototype.gameOver = myobj.gameOver;
}, 15 * 60 * 1000);

const w;

<>
    <>
        <div className="zZYga" role="dialog">
            <div className="PdwC2 fXiEu " role="dialog" style={{ maxWidth: "673px" }}>
                <div className="jdnLC" style={{ maxWidth: "673px" }}>
                    <div className="bCRRR">
                        <div className="HaS-3" style={{ paddingBottom: "177.778%" }}>
                        </div>
                    </div>
                    <div className="c0Dmy">
                        <div className="JrZbN">
                            <div className="VcOAj">
                            </div>
                            <div className="eURnM">
                                <div className="qfAOE">
                                </div>
                                <div className="kAlZ6">
                                </div>
                            </div>
                        </div>
                        <div className="XvoX1">
                            <div className="HE3mO">
                            </div>
                            <div className="EIuhb">
                            </div>
                            <div className="RdURl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="EfHg9">
            <div className="nf1Jg ">
                <div className="DdSX2">
                    <a className="ITLxV  coreSpriteLeftPaginationArrow " tabindex="0">Précédent</a>
                    <a className=" _65Bje  coreSpriteRightPaginationArrow" tabindex="0">Suivant</a>
                </div>
            </div>
        </div>
    </>
    <>
        <div className="Igw0E   rBNOH eGOV_ ybXk5 _4EzTm MGdpg _5VUwz O1flK fm1AK">
            <div className=" Igw0E     IwRSH eGOV_ _4EzTm JI_ht">
                <svg aria-label="Icône du nombre de vues" className="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16">
                    <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z">
                    </path>
                </svg>
            </div>
            <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                <span style={{boxShadow:"1px black"}}>2,3m</span>
            </div>
        </div>
    </>
</>

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function ModalGalleryExample() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

function ModalSwitch() {
    let location = useLocation();

    // This piece of state is set when one of the
    // gallery links is clicked. The `background` state
    // is the location that we were at when one of
    // the gallery links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the gallery in the background, behind
    // the modal.
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
