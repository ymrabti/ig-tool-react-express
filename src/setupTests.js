import { Component } from "react";
import { Switch,Route,Link,useParams,useHistory,withRouter } from "react-router-dom";
// import { ModalPostWithRouter } from "./Components/Index";

const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
];
class ModalSwitch extends Component {
    render() {
        let location = this.props.location;
        let background = location.state && location.state.background;
        console.log(location);
        console.log(background);
        return (
            <div>
                <Switch location={background || location}>
                    <Route exact path="/" children={
                        <div>
                            <Link to="/gallery">Visit the Gallery</Link>
                            <h2>Featured Image_s</h2>
                            <ul>
                                <li>
                                    <Link to="/gallery/2">Tomato</Link>
                                </li>
                                <li>
                                    <Link to="/gallery/4">Crimson</Link>
                                </li>
                            </ul>
                        </div>
                    } />
                    <Route path="/gallery" children={<GalleryWithRouter />} />
                    <Route path="/gallery/:id" children={<ImageView />} />
                </Switch>

                {background && <Route path="/gallery/:id" children={<Modal />} />}
            </div>
        );
    }
}

class Gallery extends Component {
    render() {
        let location = this.props.location;
        return (
            <div>
                {IMAGES.map(i => (
                    <Link
                        key={i.id}
                        to={{
                            pathname: `/gallery/${i.id}`,
                            state: { background: location }
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                background: i.color
                            }}
                        />
                        <p>{i.title}</p>
                    </Link>
                ))}
            </div>
        );
    }
}
function ImageView() {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
    if (!image) return <div>Image not found</div>;
    return (
        <div>
            <h1>{image.title}</h1>
            <div
                style={{
                    width: "100%",
                    height: 400,
                    background: image.color
                }}
            />
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
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.29)"
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
                <div
                    style={{
                        width: "100%",
                        height: 400,
                        background: image.color
                    }}
                />
                <button type="button" onClick={back}>
                    Close
        </button>
            </div>
        </div>
    );
}
export const ModalSwitchWithRouter = withRouter(ModalSwitch);
const GalleryWithRouter = withRouter(Gallery);

// function ImageTest({ children }) {
//     let { shortcode } = useParams();
//     if (!shortcode) return <div>Image not found</div>;
//     return (
//         <>
//             <h1>{shortcode}</h1>
//             <div style={{
//                 width: "300px",
//                 height: '300px',
//                 border: "3px yellow solid",
//                 backgroundColor: shortcode
//             }}>
//                 {children}

//             </div>
//         </>
//     );
// }

