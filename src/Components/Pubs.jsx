import { Component } from "react";
import { icons, size_plain } from "../tools";
import { SVGheartfilled, SVGplay } from "./svgs";
import { connect } from "react-redux";
import {
    Link,
} from "react-router-dom";

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
                <i className="fa fa-download"></i>Download All
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
    return <div className="_bz0w"></div>;
}
class PostSingle extends Component {
    // constructor(props) {
    //     super(props);
    // }
    postClicked(target) {
        target.preventDefault();
        const fetch = this.props.fetch;
        const shortcode = this.props.data.shortcode;
        fetch(shortcode);
    }
    render() {
        const product_type = this.props.data.product_type;
        const __typename = this.props.data.__typename;
        const type = icons[(product_type === "feed" || !product_type) ? __typename : product_type];
        const likes = this.props.data.edge_media_preview_like.count;
        const is_video = this.props.data.is_video;
        return <div className="v1Nh3 kIKUG  _bz0w">
            <Link to={`/p/${this.props.data.shortcode}/`}>
                <div className="eLAPa">
                    <div className="KL4Bh"><img alt={this.props.data.accessibility_caption} className="FFVAD" decoding="auto" style={{ objectFit: "cover" }} sizes="293px" src={this.props.data.thumbnail_src} /* onClick={this.postClicked.bind(this)}  *//></div>
                </div>
                <div className="u7YqG">
                    <div className={`mediatypesSprite${type}__filled__32 u-__7`}></div>
                </div>
                <div className="Igw0E   rBNOH eGOV_ ybXk5 _4EzTm MGdpg _5VUwz O1flK fm1AK">
                    <div className=" Igw0E IwRSH eGOV_ _4EzTm JI_ht">
                        <SVGheartfilled />
                    </div>
                    <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                        <span style={{ WebkitTextStrokeWidth: "0.5px", WebkitTextStrokeColor: "black" }}>
                            {size_plain(likes)}
                        </span>
                    </div>
                    {is_video && <>
                        <div className=" Igw0E IwRSH eGOV_ _4EzTm JI_ht">
                            <SVGplay />
                        </div>
                        <div className="_7UhW9 vy6Bb qyrsm h_zdq  uL8Hv">
                            <span style={{ WebkitTextStrokeWidth: "0.5px", WebkitTextStrokeColor: "black" }}>
                                {size_plain(this.props.data.video_view_count)}
                            </span>
                        </div>
                    </>}
                </div>
            </Link>
        </div>;
    }
}
class Pubs extends Component {

    render() {
        const edge_owner_to_media = this.props.edge_owner_to_media;
        const fetchPst = this.props.fetchDataPost;
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
                listKposts.push(<PostSingle key={"current" + current} fetch={fetchPst} data={edge_i} />);
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
                listKposts.push(<PostSingle key={"reste" + k} fetch={fetchPst} data={edge_i} />);
            }
            for (var j = q * columns + r; j < (q + 1) * columns; j++) {
                listKposts.push(<EmptyPost key={`EmptyPost${j}`}/>);
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