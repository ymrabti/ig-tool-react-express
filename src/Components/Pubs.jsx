import { Component } from "react";
import { icons, size_plain } from "../tools";
import { SVGplay } from "./svgs";
import { connect } from "react-redux";
import {
    Link, withRouter
} from "react-router-dom";
import { FeedPostPub } from "./igtv_tab";

class Pdp extends Component {
    handleClick(target) {
        target.preventDefault();
        console.log("Im clicked");
    }
    render() {
        return <center>
            <img style={{ borderRadius: "10px", width: "100%", maxWidth: "320px" }} alt={this.props.username} decoding="auto" src={this.props.profile_pic_url_hd} />
            <br />
            <button name="download" onClick={this.handleClick}>
                <i className="fa fa-download">
                </i>Download All
        </button>
        </center>
    }
}

const mapStateToPropsPdp = state => ({
    profile_pic_url_hd: state.user.profile_pic_url_hd,
    username: state.user.username
})

const mapDispatchToPropsPdp = dispatch => ({
    toggleTodo: () => console.log("mapDispatchToPropsPdp")
})
const PdpConnected = connect(
    mapStateToPropsPdp,
    mapDispatchToPropsPdp
)(Pdp)

function EmptyPost() {
    return <div className="_bz0w">

    </div>;
}
class PostSingle extends Component {
    // constructor(props) {
    //     super(props);
    // }
    postClicked(target) {
        target.preventDefault();
    }
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
        return <div className="v1Nh3 kIKUG  _bz0w">
            <Link to={{
                pathname: `/p/${data.shortcode}/`,
                state: { background: location }
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

                <div className="qn-0x" style={{ backgroundColor: "rgba(0,0,0,0.29)" }}>
                    <ul className="Ln-UN">
                        <li className="-V_eO">
                            <span>{size_plain(likes)}</span>
                            <span
                                className="_1P1TY coreSpriteHeartSmall"
                            >
                            </span>
                        </li>
                        <li className="-V_eO">
                            <span>{(size_plain(edge_media_to_comment))}</span>
                            <span
                                className="_1P1TY coreSpriteSpeechBubbleSmall"
                            >
                            </span>
                        </li>
                    </ul>

                </div>

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
            </Link>
        </div>;
    }
}
export const PostSingleWithRouter = withRouter(PostSingle);

class Pubs extends Component {

    render() {
        const edge_owner_to_media = this.props.edge_owner_to_media;
        var edgeslength = edge_owner_to_media.edges.length;
        var columns = 3;
        var r = edgeslength % columns;
        var q = (edgeslength - r) / columns;
        var AllPosts = []; var k = 0; var listKposts;
        var edge_i; var kposts; var current;
        for (var i = 0; i < q; i++) {// q*i+k
            listKposts = [];
            for (k = 0; k < columns; k++) {
                current = columns * i + k;
                edge_i = edge_owner_to_media.edges[current]["node"];
                listKposts.push(
                    <div key={"current" + current} className="Nnq7C ryi-h">
                        <FeedPostPub data={edge_i} />
                    </div>
                );
            }
            kposts = <div key={"row" + i} className="Nnq7C weEfm">
                {listKposts}
            </div>;
            AllPosts.push(kposts);
        }
        if (r !== 0) {
            listKposts = [];
            for (k = q * columns; k < q * columns + r; k++) {
                edge_i = edge_owner_to_media.edges[k]["node"];
                listKposts.push(
                    <div key={"current" + k} className="Nnq7C ryi-h">
                        <FeedPostPub data={edge_i} />
                    </div>
                );
            }
            for (var j = q * columns + r; j < (q + 1) * columns; j++) {
                listKposts.push(<EmptyPost key={`EmptyPost${j}`} />);
            }
            kposts = <div key={"row" + i + 1} className="Nnq7C weEfm">
                {listKposts}
            </div>;
            AllPosts.push(kposts);
        }
        return <>
            <section id="publications" name="_switcher_">
                <div className="_2z6nI">
                    <article className="ySN3v">
                        <div style={{ flexDirection: "column", paddingBottom: "15px", paddingTop: "0px" }} >
                            {AllPosts}
                        </div>
                    </article>
                </div>
            </section>
            <PdpConnected />
        </>
    }
}


export default Pubs