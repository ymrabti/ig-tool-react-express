import { Component } from "react";
import { Switch, Route, Link, useParams, useHistory, withRouter } from "react-router-dom";
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
        /* console. log(location);
        console. log(background); */
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


export const hoverr = <div className="qn-0x" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
    <ul className="Ln-UN">
        <li className="-V_eO">
            <span>50k</span>
            <span className="_1P1TY coreSpriteHeartSmall">50k</span>
        </li>
        <li className="-V_eO">
            <span>50k</span>
            <span className="_1P1TY coreSpriteSpeechBubbleSmall">50k</span>
        </li>
    </ul>
</div>


export const carouselWithVid = <div className="_97aPb">
    <div className="rQDP3">
        <div className="pR7Pc">
            <div className="tR2pe" style="padding-bottom: 125%;">
            </div>
            <div className="Igw0E IwRSH eGOV_ _4EzTm O1flK D8xaz fm1AK TxciK yiMZG">
                <div className="EcJQs">
                    {/* Carousel Here */}
                </div>
            </div>
        </div>

    </div>
</div>


export const CarouselIG = <div className="pR7Pc">
    <div className="tR2pe" style="padding-bottom: 125%;">
    </div>
    <div className="Igw0E IwRSH eGOV_ _4EzTm O1flK D8xaz fm1AK TxciK yiMZG">
        <div className="EcJQs">
            <div className="ekfSF" role="presentation" >
                <div className="_9nCnY" >
                    <ul className="vi798">
                        <li style="transform: translateX(955px); width: 1px;">
                        </li>
                        <li className="Ckrof" style="transform: translateX(0px);">
                            <div className="Igw0E IwRSH eGOV_ _4EzTm" style="width: 478px;">
                                <div role="button" className="ZyFrc">
                                    <div className="RzuR0 kHt39  plVq-">
                                        <div className="eLAPa _23QFA" role="button">
                                            <div className="KL4Bh" style="padding-bottom: 125%;">
                                                <img className="FFVAD" crossOrigin="anonymous" decoding="auto" style={{ objectFit: "cover" }} sizes="478px" srcset="" src="" />
                                            </div>
                                            <div className="_9AhH0">
                                            </div>
                                        </div>
                                        <button className="G_hoz LcKDX _6JfJs">
                                            <div className="HBUJV">
                                                <span aria-label="Identifications" className="glyphsSpriteUser__filled__24__grey_0 u-__7">
                                                </span>
                                            </div>
                                        </button>
                                        <div className="xUdfV" style="left: 90.5797%; margin-top: -6px; top: 98.366%; transform: translate(-66.0668%, -100%);">
                                            <a className="JYWcJ " href="/um6p_officiel/">
                                                <span className="wCuNw">
                                                    <div className="Mu0TI  _6XC01" style="left: 66.0668%;">
                                                    </div>
                                                    <span className="eg3Fv">um6p_officiel</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="Ckrof" style="transform: translateX(478px);">
                            <div className="Igw0E IwRSH eGOV_ _4EzTm" style="width: 478px;">
                                <div role="button" className="ZyFrc">
                                    <div className="eLAPa RzuR0">
                                        <div className="KL4Bh" style="padding-bottom: 125%;">
                                            <img className="FFVAD" crossOrigin="anonymous" decoding="auto" style={{ objectFit: "cover" }} sizes="478px" srcset="" src="" />
                                        </div>
                                        <div className="_9AhH0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button className=" POSa_">
                <div className="coreSpriteLeftChevron">
                </div>
            </button>
        </div>
    </div>
    <>
        <div className="ekfSF" role="presentation" >
            <div className="_9nCnY" >
                <ul className="vi798">
                    <li style="transform: translateX(3359px); width: 1px;">
                    </li>
                    <li className="Ckrof" style="transform: translateX(960px);">
                        <div className="Igw0E IwRSH eGOV_ _4EzTm" style="width: 480px;">
                            <div role="button" className="ZyFrc">
                                <div className="eLAPa RzuR0">
                                    <div className="KL4Bh" style="padding-bottom: 125%;">
                                        <img alt="Photo by Ihssane Benalluch احسان بنعلوش on February 14, 2021. May be a closeup of 2 people, people standing and outdoors." className="FFVAD" crossOrigin="anonymous" decoding="auto" sizes="480px" srcset="" src="" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="_9AhH0">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="Ckrof" style="transform: translateX(1440px);">
                        <div className="Igw0E IwRSH eGOV_ _4EzTm" style="width: 480px;">
                            <div>
                                <div className="RzuR0 B1JlO OAXCp  " style="padding-bottom: calc(124.933% - 1px);">
                                    <div style="height: calc(100% + 1px); position: absolute; width: 100%;">
                                        <div className="GRtmf wymO0 ">
                                            <div className="_5wCQW">
                                                <video className="tWeCl" crossOrigin="anonymous" playsInline="" poster="" preload="none" type="video/mp4" src="" style="display: block;">
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="PyenC">
                                        <span aria-label="Lire" className="qBUYS _7CSz9 FGFB7 videoSpritePlayButton" role="button">
                                        </span>
                                    </div>
                                    <div aria-label="Contrôler" className="fXIG0" role="button">
                                    </div>
                                    <span className="">
                                        <div className="_41V_T IhCmn Igw0E IwRSH eGOV_ _4EzTm MGdpg y2rAt lC6p0 HVWg4 O1flK  fm1AK TxciK">
                                            <svg aria-label="L’audio est en cours de lecture" className="_8-yf5 " fill="#ffffff" height="12" viewBox="0 0 48 48" width="12">
                                                <path clipRule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fillRule="evenodd">
                                                </path>
                                            </svg>
                                        </div>
                                        <button className="FqZhB" label="Activer/Désactiver le son">Activer/Désactiver le son</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="Ckrof" style="transform: translateX(1920px);">
                        <div className="Igw0E IwRSH eGOV_ _4EzTm" style="width: 480px;">
                            <div>
                                <div className="RzuR0 B1JlO OAXCp  " style="padding-bottom: calc(124.8% - 1px);">
                                    <div style="height: calc(100% + 1px); position: absolute; width: 100%;">
                                        <div className="GRtmf wymO0 ">
                                            <div className="_5wCQW">
                                                <video className="tWeCl" crossOrigin="anonymous" playsInline="" poster="" preload="none" type="video/mp4" src="" style="display: block;">
                                                </video>
                                                <img className="_8jZFn" crossOrigin="anonymous" src="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="PyenC">
                                        <span aria-label="Lire" className="qBUYS _7CSz9 FGFB7 videoSpritePlayButton" role="button">
                                        </span>
                                    </div>
                                    <div aria-label="Contrôler" className="fXIG0" role="button">
                                    </div>
                                    <span className="">
                                        <div className="_41V_T IhCmn Igw0E IwRSH eGOV_ _4EzTm MGdpg y2rAt lC6p0 HVWg4 O1flK fm1AK TxciK ">
                                            <svg aria-label="L’audio est en cours de lecture" className="_8-yf5 " fill="#ffffff" height="12" viewBox="0 0 48 48" width="12">
                                                <path clipRule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fillRule="evenodd">
                                                </path>
                                            </svg>
                                        </div>
                                        <button className="FqZhB" label="Activer/Désactiver le son">Activer/Désactiver le son</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <button className="POSa_">
            <div className="coreSpriteLeftChevron">
            </div>
        </button>
        <button className="_6CZji">
            <div className="coreSpriteRightChevron">
            </div>
        </button>
    </>
</div>

export const bb =
    <>
        <ul key={username_comment + " " + index} className="Mr508">
            <div role="button" className="ZyFrc">
                <li className="gElp9 rUo9f" role="menuitem">
                    <div className="P9YgZ">

                    </div>
                </li>
            </div>
        </ul>

        <>
            <div className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm MGdpg _5VUwz O1flK fm1AK">
                <div className=" Igw0E IwRSH eGOV_ _4EzTm JI_ht">
                    <svg aria-label="Icône du nombre de vues" className="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16">
                        <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z">
                        </path>
                    </svg>
                </div>
                <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                    <span style={{ boxShadow: "1px black" }}>2,3m</span>
                </div>
            </div>
        </>
        <span className="">
            <div className="_41V_T IhCmn Igw0E IwRSH eGOV_ _4EzTm MGdpg y2rAt lC6p0 HVWg4 O1flK  fm1Ak TxciK">
                <svg aria-label="L’audio est en cours de lecture" className="_8-yf5 " fill="#ffffff" height="12" viewBox="0 0 48 48" width="12">
                    <path clipRule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fillRule="evenodd">
                    </path>
                </svg>
            </div>
            <button className="FqZhB" label="Activer/Désactiver le son">Activer/Désactiver le son</button>
        </span>

    </>

const myobj = { gameOver: Runner.prototype.gameOver }
Runner.prototype.gameOver = () => { console. log("gameOver"); }
setTimeout(() => {
    console. log("its time to save record!");
    Runner.prototype.gameOver = myobj.gameOver;
}, 15 * 60 * 1000);

// https://drive.google.com/file/d/1usOA18_7UGWsndyr5tIQsCIq8N15-Qsp/view?usp=sharing

<div className="Nnq7C weEfm">
    <div className="v1Nh3 kIKUG  _bz0w">
        <Link to={{
            pathname: `/p/${data.shortcode}/`,
            state: { background: location }
        }}>
            <div className="eLAPa">
                <div className="KL4Bh">
                    <img
                        alt={data.accessibility_caption}
                        src={data.thumbnail_src}
                        className="FFVAD"
                        crossorigin="anonymous" decoding="auto" sizes="293px" srcset="" style={{ objectFit: "cover" }} />
                </div>
                <div className="_9AhH0">
                </div>
            </div>
            <div className="u7YqG">
                <div className={`mediatypesSprite${type}__filled__32 u-__7`}>
                </div>
            </div>
            <div className="knyT1">
                <div className="qn-0x" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <ul className="Ln-UN">
                        <li className="-V_eO">
                            <span>{(size_plain(likes))}</span>
                            <span className="_1P1TY coreSpriteHeartSmall">
                            </span>
                        </li>
                        <li className="-V_eO">
                            <span>{(size_plain(edge_media_to_comment))}</span>
                            <span className="_1P1TY coreSpriteSpeechBubbleSmall">
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="qn-0x">
                    <div className="Igw0E   rBNOH eGOV_ ybXk5 _4EzTm MGdpg _5VUwz O1flK fm1AK">
                        {
                            is_video ? <>
                                <div className=" Igw0E IwRSH eGOV_ _4EzTm JI_ht">
                                    <SVGplay />
                                </div>
                                <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                                    <span style={{ WebkitTextStrokeWidth: "0.5px", WebkitTextStrokeColor: "black" }}>
                                        {size_plain(data.video_view_count)}
                                    </span>
                                </div>
                            </>
                                :
                                <ul className="Ln-UN">
                                    {
                                        countImages !== 0 && <li className="-V_eO">
                                            <span>{countImages + " "}Images</span>
                                        </li>
                                    }
                                    {
                                        countVideos !== 0 && <li className="-V_eO">
                                            <span>{countVideos + " "}Videos</span>
                                        </li>
                                    }
                                </ul>
                        }
                    </div>
                </div>
            </div>
        </Link>
    </div>

</div>

const srcset_example = "link150" + " 150w" + "," +
    "link240" + " 240w" + "," +
    "link320" + " 320w" + "," +
    "link480" + " 480w" + "," +
    "link640" + " 640w"


let father = <article className="ySN3v" >
    <div>
        <div style={{ flexDirection: "column", paddingBottom: "0px", paddingTop: "0px" }}>
        </div>
    </div>
    <div className="_4emnV">
        <div className="Igw0E IwRSH YBx95 _4EzTm _9qQ0O ZUqME" data-visualcompletion="loading-state" style={{ height: "32px", width: "32px" }}>
            <svg aria-label="Chargement..." className="  By4nA" viewBox="0 0 100 100">
                <rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47">
                </rect>
                <rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47">
                </rect>
            </svg>
        </div>
    </div>
</article >