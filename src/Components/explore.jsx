import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchHashtag,fetchLocation } from "../actions/Index";
import Publications from "./Pubs";
import { beautify_numbers, Waiting } from "../tools";

//#region 
class HeadExplore extends Component {
    render() {
        let data = this.props.data;
        return <header id="HeadSwitch" className="vtbgv" style={{ display: "flex", marginTop: "1em" }}>
            <div className="XjzKX">
                <div className="RR-M- " aria-disabled="true" role="button" data-ext-skip="1">
                    <div className="_2dbep" role="link" style={{ width: "150px", height: "150px" }}>
                        <img
                            alt={data.explore_name}
                            className="_6q-tv"
                            data-testid="user-avatar"
                            draggable="false"
                            src={data.explore_pic_url}
                        />
                    </div>
                </div>
            </div>
            <section className="zwlfE">
                <div className="nZSzR">
                    <a
                        className="_7UhW9 fKFbl yUEEX KV-D4 fDxYl"
                        href={data.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {data.explore_name}
                    </a>
                </div>
                {
                    data.nombrePub && <ul className="k9GMp">
                        <li className="Y8-fY">
                            <span className="-nal3">
                                <span className="g47SY">
                                    {beautify_numbers(data.nombrePub)}
                                </span>
                                <span> Publications</span>
                                <br />
                            </span>
                        </li>
                    </ul>
                }
            </section>
        </header>
    }
}
//#endregion

class ExploreHashtag extends Component {
    componentDidMount() {
        let { tag } = this.props.match.params;
        this.props.fetchHashtag(tag);
        // console.log(this.props);
    }

    render() {
        const hashtag = this.props.hashtag;
        let objectFilter = Object.values(hashtag)
            .filter(u => typeof (u) !== "function")
            .filter(u => !!u);
        if (objectFilter.length !== 0) {
            var nombrePub = hashtag.edge_hashtag_to_media.count;
            var edges = hashtag.edge_hashtag_to_media.edges;
            var top_edges = hashtag.edge_hashtag_to_top_posts.edges;
            var tag = hashtag.name;
            var pic_url = hashtag.profile_pic_url;
            const data_top_edges = {
                edge_owner_to_media: { edges: top_edges }
            }
            const data_edges = {
                edge_owner_to_media: { edges: edges }
            }
            return (
                <>
                    <HeadExplore data={
                        {
                            explore_name: "#" + tag,
                            explore_pic_url: pic_url,
                            nombrePub,
                            link: `https://www.instagram.com/explore/tags/${tag}/`
                        }
                    }

                    />
                    <h2 className="yQ0j1" >
                        <div className="Saeqz">Top posts</div>
                    </h2>
                    <br />
                    <Publications {...data_top_edges} />
                    <h2 className="yQ0j1" >
                        <br />Most recent<br />
                    </h2>
                    <Publications {...data_edges} />
                </>
            );
        }
        else {
            return <Waiting />;
        }
    }
}
export const DownloadAllButton = () => {
    return (
        <button name="download">
            <i className="fa fa-download">
            </i>Download All
        </button>
    );
}
const ExploreHashtagRouter = withRouter(ExploreHashtag)

const mapStateToPropsHashtag = state => ({ hashtag: state.hashtag })

const mapDispatchToPropsHashtag = (dispatch) => ({
    fetchHashtag: (tagname) => {
        fetch(`/explore/tags/${tagname}`)
            .then(response => response.json())
            .then(data => {
                dispatch(fetchHashtag(data.graphql.hashtag));
            }).catch(e => {
                alert(`Hashtag ${tagname} not found !`)
            });
    }
})

export const ExploreHash = connect(
    mapStateToPropsHashtag,
    mapDispatchToPropsHashtag
)(withRouter(ExploreHashtagRouter));


class ExploreLocation extends Component {
    componentDidMount() {
        let { location } = this.props.match.params;
        this.props.fetchLocation(location);
        // console.log(this.props);
    }

    render() {
        const location = this.props.localization;
        let objectFilter = Object.values(location)
            .filter(u => typeof (u) !== "function")
            .filter(u => !!u);
        if (objectFilter.length !== 0) {
            var nombrePub = undefined;
            var edges = location.edge_location_to_media.edges;
            var top_edges = location.edge_location_to_top_posts.edges;
            var tag = location.name;
            var pic_url = location.profile_pic_url;
            const data_top_edges = {
                edge_owner_to_media: { edges: top_edges }
            }
            const data_edges = {
                edge_owner_to_media: { edges: edges }
            }
            return (
                <>
                    <HeadExplore data={
                        {
                            explore_name: tag,
                            explore_pic_url: pic_url,
                            nombrePub,
                            link: `https://www.instagram.com/explore/locations/${location.id}/`
                        }
                    }

                    />
                    <h2 className="yQ0j1" >
                        <div className="Saeqz">Top posts</div>
                    </h2>
                    <br />
                    <Publications {...data_top_edges} />
                    <h2 className="yQ0j1" >
                        <br />Most recent<br />
                    </h2>
                    <Publications {...data_edges} />
                </>
            );
        }
        else {
            return <Waiting />;
        }
    }
}
const ExploreLocationRouter = withRouter(ExploreLocation)

const mapStateToPropsLocation = state => ({ localization: state.location })

const mapDispatchToPropsLocation = (dispatch) => ({
    fetchLocation: (location) => {
        fetch(`/explore/locations/${location}`)
            .then(response => response.json())
            .then(data => {
                dispatch(fetchLocation(data.graphql.location));
            }).catch(e => {
                alert(`Location ${location} not found !`)
            });
    }
})

export const ExploreLoc = connect(
    mapStateToPropsLocation,
    mapDispatchToPropsLocation
)(withRouter(ExploreLocationRouter));

