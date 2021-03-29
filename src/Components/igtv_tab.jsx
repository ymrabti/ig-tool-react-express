import { Component } from "react";
import { size_plain } from "../tools";

class IgtvPost extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        const data = this.props.data;
        const likes = data.edge_media_preview_like.count;
        const edge_media_to_comment = data.edge_media_to_comment.count;
        return <div className="b9_1r" style={{ marginLeft: "5%", marginRight: "5%"}}>
            <div className="Tjpra">
                <a href={`/reel/${data.shortcode}/`}>
                    <div className="A-NpN" role="button">
                        <div
                            className="lVhHa _hpij"
                            style={
                                {
                                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.27%), url(${data.thumbnail_src})`,
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

                </a>
            </div>
        </div>;
    }
}

export class IgtvPosts extends Component {
    //constructor(props) {
    //    super(props);
    //}
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
                        <IgtvPost data={edge_i} />
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
                        <IgtvPost data={edge_i} />
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