import React, { Component } from 'react';
import { setStateProfile } from "../actions/Index";
import { connect } from 'react-redux';
import {  text2Html, size_plain, beautify_numbers  } from "../tools";
import { pathspubs, pathigtv,waitaminute/* ,pathreels,pathtagged,pathsguides */ } from "./svgs";

import { IgtvLinks,LinksPosts } from "./links2IGTV";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    withRouter
} from "react-router-dom";
//#region PDP
class Pdp extends Component {
    render() {
        return <center>
            <br />
            <br />
            <img
                style={{ borderRadius: "10px", width: "100%", maxWidth: "320px" }}
                alt={this.props.username} decoding="auto"
                src={this.props.profile_pic_url_hd}
            />

            {/* <button name="download" onClick={this.handleClick}>
                <i className="fa fa-download">
                </i>Download All
        </button> */}
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

//#endregion PDP

//#region bar
class Bar extends Component {
    render() {
        let username = this.props.username;
        let path = this.props.path;
        return <div className="fx7hk">
            <Link to={"/" + username + "/"} className={`_9VEo1 ${!path ? "T-jvg" : ""}`}>
                <span className="smsjF">
                    <svg aria-label="Publications" className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"
                        fill={"#" + (!path ? "262626" : "8e8e8e")}
                    >
                        <path d={pathspubs}>
                        </path>
                    </svg>
                    <span className="PJXu4" >Publications</span>
                </span>
            </Link>
            {/* <Link to={"/" + username + "/guides/"} className={`_9VEo1 ${path === "guides" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    <svg aria-label="Guides" className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"
                        fill={"#" + (path === "guides" ? "262626" : "8e8e8e")}
                    >
                        {pathsguides}
                    </svg>
                    <span className="PJXu4" >guides</span>
                </span>
            </Link>
            <Link to={"/" + username + "/reels/"} className={`_9VEo1 ${path === "reels" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    <svg aria-label="Reels" className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"
                        fill={"#" + (path === "reels" ? "262626":"8e8e8e")}
                    >
                        <path d={pathreels}>
                        </path>
                    </svg>
                    <span className="PJXu4" >reels</span>
                </span>
            </Link> */}
            <Link to={"/" + username + "/channel/"} className={`_9VEo1 ${path === "channel" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    <svg aria-label="Igtv" className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"
                        fill={"#" + (path === "channel" ? "262626" : "8e8e8e")}
                    >
                        <path d={pathigtv}>
                        </path>
                    </svg>
                    <span className="PJXu4" >IGTV</span>
                </span>
            </Link>
            {/* <Link to={"/" + username + "/tagged/"} className={`_9VEo1 ${path === "tagged" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    <svg aria-label="Tagged" className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24"
                        fill={"#" + (path === "tagged" ? "262626" : "8e8e8e")}
                    >
                        <path d={pathtagged}>
                        </path>
                    </svg>
                    <span className="PJXu4" >Tagged</span>
                </span>
            </Link> */}
        </div>;
    }
}
//#endregion bar

//#region head
class Head extends Component {
    // constructor(props) {
    //     super(props);
    // }
    shouldComponentUpdate(after) {
        // console.log(this.props);
        // console.log(after);
        return true;
    }

    render() {
        const edge_count_timeline = this.props.edges;
        const followed_by = this.props.edge_followed_by;
        const follows = this.props.edge_follow;
        const verified = <div className="Igw0E IwRSH eGOV_ _4EzTm soMvl">
            <span className="mTLOB Szr5J coreSpriteVerifiedBadge" title="Verified">Verified</span>
        </div>;
        return <header id="HeadSwitch" className="vtbgv" style={{ display: "flex", marginTop: "1em" }}>
            <div className="XjzKX">
                <div className="RR-M- " aria-disabled="true" role="button" data-ext-skip="1">
                    <div className="_2dbep" role="link" style={{ width: "150px", height: "150px" }}>
                        <img alt={this.props.full_name} className="_6q-tv" data-testid="user-avatar" draggable="false" src={this.props.profile_pic_url} />
                    </div>
                </div>
            </div>
            <section className="zwlfE">
                <div className="nZSzR">
                    <a className="_7UhW9 fKFbl yUEEX KV-D4 fDxYl" href={`https://www.instagram.com/${this.props.username}/`} target="_blank" rel="noreferrer">
                        {this.props.username}
                    </a>
                    {this.props.is_verified && verified}
                </div>
                <ul className="k9GMp">
                    <li className="Y8-fY">
                        <span className="-nal3">
                            <span className="g47SY">
                                {beautify_numbers(edge_count_timeline.count)}
                            </span>
                            <span> Publications</span>
                            <br />
                        </span>
                    </li>
                    <li className="Y8-fY">
                        <span className="-nal3">
                            <span className="g47SY" title={beautify_numbers(followed_by.count)}>
                                {size_plain(followed_by.count)}
                            </span>
                            <span> Followers</span>
                            <br />
                        </span>
                    </li>
                    <li className="Y8-fY">
                        <span className="-nal3">
                            <span className="g47SY">
                                {beautify_numbers(follows.count)}
                            </span>
                            <span> Following</span>
                            <br />
                        </span>
                    </li>
                </ul>
                <div className="-vDIg">
                    <h1 className="rhpdm">{this.props.full_name}</h1><br />
                    <div className="Igw0E IwRSH eGOV_ _4EzTm">
                        <span className="_8FvLi">
                            {this.props.category_name}
                        </span>
                    </div>
                    <span>
                        {text2Html(this.props.biography)}
                    </span>
                    <a className="yLUwa" href={this.props.external_url} target="_blank" rel="noreferrer">{this.props.external_url}</a>
                </div>
            </section>
        </header>
    }
}
//#endregion head

class Profile extends Component {
    componentDidMount() {
        let { username } = this.props.match.params;
        this.props.fetchProfile(username);
        // console.log(this.props);
    }
    render() {
        let { username } = this.props.match.params;
        const user = this.props.user;
        let objectFilter = Object.values(user)
            .filter(u => typeof (u) !== "function")
            .filter(u => !!u);
        if (objectFilter.length !== 0) {
            const path = this.props.opt;
            const dataHead = {
                username: user.username,
                full_name: user.full_name,
                profile_pic_url: user.profile_pic_url,
                edges: user.edge_owner_to_timeline_media,
                edge_followed_by: user.edge_followed_by,
                edge_follow: user.edge_follow,
                biography: user.biography,
                external_url: user.external_url,
                is_verified: user.is_verified,
                category_name: user.category_name
            };
            let edge_owner_to_media = path ? user.edge_felix_video_timeline : user.edge_owner_to_timeline_media;
            const dataPubs = {
                edge_owner_to_media, path
            }
            const barSettings = { username, path };
            const is_private = user.is_private;
            let _private = <div className="_4Kbb_ _54f4m">
                <div className="QlxVY">
                    <h2 className="rkEop">This account is private</h2>
                    <div className="VIsJD">Send a follow request to see their pictures and videos</div>
                </div>
            </div>
            let _public = path === "channel" ?
                <IgtvLinks {...dataPubs} /> :
                <LinksPosts {...dataPubs} />;

            return <>
                <Head {...dataHead} />
                <Bar {...barSettings} />
                {is_private ? _private : _public}
                <PdpConnected />
            </>;
        }
        else {
            return waitaminute;
        }

    }
}
const mapStateToPropsProfile = state => ({ user: state.user })

const mapDispatchToPropsProfile = (dispatch) => ({
    fetchProfile: (username) => {
        fetch(`/instagram/${username}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setStateProfile(data.graphql.user));
            }).catch(e => {
                console.log(e);
                // console.log(`User ${username} not found !`);
            });
    }
})

export default connect(
    mapStateToPropsProfile,
    mapDispatchToPropsProfile
)(withRouter(Profile));

