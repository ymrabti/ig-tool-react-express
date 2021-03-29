import React, { Component } from 'react';
import { setStateProfile } from "../actions/Index";
import Head from "./head";
import Pubs from "./Pubs";
import { connect } from 'react-redux';
import { Waiting } from "../tools";
import { PUBSsvg, IGTVsvg,SVGreels,Tagged,GuidesSsvg } from "./svgs";
import { IgtvPosts } from "./igtv_tab";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    withRouter
} from "react-router-dom";

class Bar extends Component {
    render() {
        let username = this.props.username;
        let path = this.props.path;
        return <div className="fx7hk">
            <Link to={"/" + username + "/"} className={`_9VEo1 ${ !path ?"T-jvg":""}`}>
                <span className="smsjF">
                    {PUBSsvg}
                    <span className="PJXu4" >Publications</span>
                </span>
            </Link>
            <Link to={"/" + username + "/guides/"} className={`_9VEo1 ${path === "guides" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    {GuidesSsvg}
                    <span className="PJXu4" >guides</span>
                </span>
            </Link>
            <Link to={"/" + username + "/reels/"} className={`_9VEo1 ${path === "reels" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    {SVGreels}
                    <span className="PJXu4" >reels</span>
                </span>
            </Link>
            <Link to={"/" + username + "/channel/"} className={`_9VEo1 ${path === "channel" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    {IGTVsvg}
                    <span className="PJXu4" >IGTV</span>
                </span>
            </Link>
            <Link to={"/" + username + "/tagged/"} className={`_9VEo1 ${path === "tagged" ? "T-jvg" : ""}`}>
                <span className="qzihg">
                    {Tagged}
                    <span className="PJXu4" >Tagged</span>
                </span>
            </Link>
        </div>;
    }
}

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
            const path = this.props.opt ;
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
            const barSettings = { username,path };
            return <>
                <Head {...dataHead} />
                <Bar {...barSettings} />
                {!path ? <Pubs {...dataPubs} /> : <IgtvPosts {...dataPubs} />}
            </>;
        }
        else {
            return <Waiting />;
        }

    }
}
const mapStateToPropsProfile = state => ({ user: state.user })

const mapDispatchToPropsProfile = (dispatch) => ({
    fetchProfile: (username) => {
        fetch(`/${username}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setStateProfile(data.graphql.user));
            }).catch(e => {
                alert(`User ${username} not found !`)
            });
    }
})

export default connect(
    mapStateToPropsProfile,
    mapDispatchToPropsProfile
)(withRouter(Profile));

