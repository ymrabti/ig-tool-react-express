import React, { Component } from 'react';
import { setVisiMP,fetchPost,setStateProfile } from "../actions/Index";
import Head from "./head";
import Pubs from "./Pubs";
import { connect } from 'react-redux';
import { Waiting } from "../tools"; 
import { PUBSsvg,IGTVsvg } from "./svgs";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    withRouter
} from "react-router-dom";

class Bar extends Component {
    elementBarClicked(target) {
        console.log(target)
    }

    render() {
        return <div className="fx7hk">
            <p className="_9VEo1 T-jvg">
                <span className="smsjF">
                    {PUBSsvg}
                    <span className="PJXu4" onClick={this.elementBarClicked}>Publications</span>
                </span>
            </p>
            <p className="_9VEo1">
                <span className="qzihg">
                    {IGTVsvg }
                    <span className="PJXu4" onClick={this.elementBarClicked}>IGTV</span>
                </span>
            </p>
        </div>;
    }
}

class Profile extends Component {
    componentDidMount(){
        let { username } = this.props.match.params;
        this.props.fetchProfile(username);
    }
    render() {
        const user = this.props.user;
        console.log(this.props);
        let objectFilter = Object.values(user)
            .filter(u => typeof (u) !== "function")
            .filter(u => !!u);
        if (objectFilter.length !== 0) {
            const fetchDataPost = this.props.fetchDataPost;
            const dataHead = {
                username: user.username,
                full_name: user.full_name,
                profile_pic_url: user.profile_pic_url,
                edge_owner_to_timeline_media: user.edge_owner_to_timeline_media,
                edge_followed_by: user.edge_followed_by,
                edge_follow: user.edge_follow,
                biography: user.biography,
                external_url: user.external_url,
                is_verified: user.is_verified,
                category_name: user.category_name
            };
            const dataPubs = {
                edge_owner_to_media: user.edge_owner_to_timeline_media,
                fetchDataPost
            }
            return <>
                <Head {...dataHead} />
                <Bar />
                <Pubs {...dataPubs} />
            </>;
        }
        else {
            return <Waiting />;
        } 
        
    }
}
const mapStateToPropsProfile = state => ({user:state.user})

const mapDispatchToPropsProfile = (dispatch) => ({
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
    },
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

