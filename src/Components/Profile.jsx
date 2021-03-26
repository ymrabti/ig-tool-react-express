import React, { Component } from 'react';
import { setVisiMP,fetchPost } from "../actions/Index";
import Head from "./head";
import Bar from "./bar";
import Pubs from "./Pubs";
import { connect } from 'react-redux';
import { Waiting } from "../tools";

class Profile extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        const user = this.props;
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
const mapStateToPropsProfile = state => ({...state.user})

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
    }
})

export default connect(
    mapStateToPropsProfile,
    mapDispatchToPropsProfile
)(Profile);

