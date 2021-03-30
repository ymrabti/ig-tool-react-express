import { Component } from "react";
import { size_plain,icons } from "../tools";
import { SVGplay } from "./svgs";
import { Link, withRouter } from "react-router-dom";

class IgtvPost extends Component {
    render() {
        let location = this.props.location;
        const data = this.props.data;
        const likes = data.edge_media_preview_like.count;
        const edge_media_to_comment = data.edge_media_to_comment.count;
        return <div className="b9_1r" style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}>
            <div className="Tjpra">
                <Link to={{
                    pathname: `/p/${data.shortcode}/`,
                    state: { background: location }
                }}>
                    <div
                        className="A-NpN"
                        role="button"
                        style={{
                            backgroundColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.27%)"
                        }}
                    >
                        <div
                            className="lVhHa _hpij"
                            style={
                                {
                                    backgroundImage: `url(${data.thumbnail_src})`,
                                    display: "block",
                                    paddingTop: " 155.66%",
                                    width: "100%"
                                }
                            }
                        >
                        </div>
                        <div className="knyT1">
                            <div className="qn-0x" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
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
                                <div className="_5cOAs">
                                    <div className="Rsx-c">
                                        <div className="zncDM">{data.video_duration}</div>
                                    </div>
                                    <div className="pu1E0">
                                        <div className="_2XLe_">{data.title}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kfcNv">
                            <div className="HjIRG">
                                <div className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm MGdpg _5VUwz O1flK fm1AK">
                                    <div className="Igw0E IwRSH eGOV_ _4EzTm JI_ht">
                                        <svg aria-label="Icône du nombre de vues" className="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16">
                                            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                                        <span>{size_plain(data.video_view_count)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>;
    }
}

const IgtvPostWithR = withRouter(IgtvPost)

export class IgtvPosts extends Component {
    render() {
        const edges = this.props.edge_owner_to_media;
        var edgeslength = edges.edges.length;
        var columns = 4;
        var r = edgeslength % columns;
        var q = (edgeslength - r) / columns;
        var AllPosts = []; var k = 0; var listKposts;
        var edge_i; var kposts; var current;
        for (var i = 0; i < q; i++) {// q*i+k
            listKposts = [];
            for (k = 0; k < columns; k++) {
                current = columns * i + k;
                edge_i = edges.edges[current]["node"];
                listKposts.push(
                    <div key={"currentIGTV" + current} className="Nnq7C ryi-h">
                        <IgtvPostWithR data={edge_i} />
                    </div>
                );
            }
            kposts = <div key={"rowIGTV" + i} className="Nnq7C weEfm">
                {listKposts}
            </div>;
            AllPosts.push(kposts);
        }
        if (r !== 0) {
            listKposts = [];
            for (k = q * columns; k < q * columns + r; k++) {
                edge_i = edges.edges[k]["node"];
                listKposts.push(
                    <div key={"resteIGTV" + k} className="Nnq7C ryi-h">
                        <IgtvPostWithR data={edge_i} />
                    </div>
                );
            }
            for (var j = q * columns + r; j < (q + 1) * columns; j++) {
                listKposts.push(<div key={`EmptyPost${j}`} />);
            }
            kposts = <div key={"rowIGTV" + i + 1} className="Nnq7C weEfm">
                {listKposts}
            </div>;
            AllPosts.push(kposts);
        }
        return <div className=" _2z6nI">
            <div className="Igw0E IwRSH eGOV__4EzTm" style={{ width: "100%" }}>
                <div>
                    <div style={{ flexDirection: "column", paddingBottom: "0px", paddingTop: "0px" }}>
                        {AllPosts}
                    </div>
                </div>
            </div>
        </div>
    }
}

/////////////////////


class FeedPost extends Component {
    render() {
        let location = this.props.location;
        const data = this.props.data;
        const product_type = data.product_type;
        let edges_children_sidecar = this.props.data.edge_sidecar_to_children;
        const __typename = data.__typename;
        const type = icons[(product_type === "feed" || !product_type) ? __typename : product_type];
        const likes = data.edge_media_preview_like.count;
        const is_video = data.is_video;
        const edge_media_to_comment = data.edge_media_to_comment.count;
        let countVideos = 0;
        let countImages = 0;
        if (edges_children_sidecar) {
            countVideos = edges_children_sidecar.edges.filter(i => i.node.__typename === "GraphVideo").length;
            countImages = edges_children_sidecar.edges.filter(i => i.node.__typename === "GraphImage").length;
        }
        return <div className="b9_1r" style={{ marginLeft: "0.5vw", marginRight: "0.5vw" }}>
            <div className="Tjpra">
                <Link to={{
                    pathname: `/p/${data.shortcode}/`,
                    state: { background: location }
                }}>
                    <div
                        className="A-NpN"
                        role="button"
                        style={{
                            backgroundColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.27%)"
                        }}
                    >
                        
                        <div className="eLAPa">
                            <div className="KL4Bh">
                                <img
                                    alt={data.accessibility_caption}
                                    className="FFVAD"
                                    decoding="auto"
                                    style={{ objectFit: "cover" }}
                                    sizes="293px"
                                    src={data.thumbnail_src} /* onClick={this.postClicked.bind(this)}  */
                                />
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
                    </div>
                </Link>
            </div>
        </div>;
    }
}

export const FeedPostPub = withRouter(FeedPost)