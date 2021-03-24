import { Component } from "react";
import { connect } from 'react-redux';
import Pdp from "./pdp";
import { icons } from "../tools";
import { fetchPost, setVisiMP } from "../actions/Index";

function EmptyPost() {
    return <div className="_bz0w"></div>;
}
class PostSingle extends Component {
    // constructor(props) {
    //     super(props);
    // }
    postClicked(target) {
        target.preventDefault();
        this.props.fetch(this.props.data.shortcode);
    }
    render() {
        const type = icons[(this.props.data.product_type === "feed" || !this.props.data.product_type) ? this.props.data.__typename : this.props.data.product_type];;
        return <div className="v1Nh3 kIKUG  _bz0w">
            <a href={`/p/${this.props.data.shortcode}/`}>
                <div className="eLAPa">
                    <div className="KL4Bh"><img alt={this.props.data.accessibility_caption} className="FFVAD" decoding="auto" style={{ objectFit: "cover" }} sizes="293px" src={this.props.data.thumbnail_src} onClick={this.postClicked.bind(this)} /></div>
                </div>
                <div className="u7YqG">
                    <div className={`mediatypesSprite${type}__filled__32 u-__7`}></div>
                </div>
            </a>
        </div>;
    }
}
class Pubs extends Component {

    render() {
        const fetchPst = this.props.fetchDataPost;
        var edgeslength = this.props.edges.length;
        var columns = 3;
        var r = edgeslength % columns;
        var q = (edgeslength - r) / columns;
        var AllPosts = []; var k = 0; var listKposts;
        var edge_i; var kposts; var current;
        for (var i = 0; i < q; i++) {// q*i+k
            listKposts = [];
            for (k = 0; k < columns; k++) {
                current = columns * i + k;
                edge_i = this.props.edges[current]["node"];
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
                edge_i = this.props.edges[k]["node"];
                listKposts.push(<PostSingle key={"reste" + k} fetch={fetchPst} data={edge_i} />);
            }
            for (var j = q * columns + r; j < (q + 1) * columns; j++) {
                current = q * columns + r - 1;
                edge_i = this.props.edges[current]["node"];
                listKposts.push(<EmptyPost />);
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
            <Pdp />
        </>
    }
}
const mapStateToProps = state => (
    {
        edges: state.user.edge_owner_to_timeline_media.edges
    }
)

const mapDispatchToProps = (dispatch) => ({
    fetchDataPost: (shortcode) => {
        fetch(`/p/${shortcode}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setVisiMP(true));
                dispatch(fetchPost(data.graphql.shortcode_media));
            }).catch(e => {
                dispatch(setVisiMP(false));
                dispatch(fetchPost({}));
            });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pubs);