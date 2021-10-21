import React from "react";
import { connect } from "react-redux";
import { TopUsersAction, TopPostsAction, TopHashtagsAction, TopLocationsAction } from "../actions/Index";
import "../css/home.css";
import { getDeffDates } from "../tools";
import { waitaminute } from "./svgs";
import { withRouter } from "react-router-dom";

var hosts = [];
//#region top_users
class TopUsersClass extends React.Component {
    componentDidMount() {
        let loxation = this.props.location;
        const queries = {};
        let urls = new URLSearchParams(loxation.search);
        urls.forEach((value, key) => queries[key] = value);
        this.props.getTopUsers(this.props.page);
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0 && !top.name) {
            let TopUsersView = top.map(function (currentValue) {
                let host = currentValue.profile_pic_url_hd.split("/")[2];
                !hosts.includes(host) && hosts.push(host);
                console.log(hosts);
                return <div name="childs" key={currentValue._id} className="card">
                    <a href={"/" + currentValue.username}>
                        <img
                            src={currentValue.profile_pic_url_hd}
                            alt={currentValue.full_name}
                            width={"100%"}
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                        />
                        <br />
                        <p>
                            {currentValue.username}
                            <br />
                            {currentValue.full_name}<br />
                        </p>
                reputaton :{currentValue.clicks}<br />
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                    </a>
                </div>;
            });
            return <div className="grid">
                {TopUsersView}
            </div>
        } else {
            return waitaminute;
        }
    }
}
const mapStateToPropsTopUsers = state => ({ top: state.statisticsReducer.TopSearchedUsers })
const mapDispatchToPropsTopUsers = (dispatch) => ({
    getTopUsers: (page) => {
        fetch(`/api/Users/search?sort=clicks&order=desc${(!!page && page !== "") ? `&page=${page}` : ""}`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopUsersAction(data));
            }).catch(e => {
            });
    }
})
export const TopSearchdUsers = connect(
    mapStateToPropsTopUsers,
    mapDispatchToPropsTopUsers
)(withRouter(TopUsersClass));
//#endregion top_users

//#region top_posts
class TopPostsClass extends React.Component {
    componentDidMount() {
        this.props.getTopPosts(this.props.page);
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0 && !top.name) {
            let TopPostsView = top.map(function (currentValue) {
                let host1 = currentValue.display_url.split("/")[2];
                let host2 = currentValue.profile_pic_url.split("/")[2];
                !hosts.includes(host1) && hosts.push(host1);
                console.log(hosts);
                !hosts.includes(host2) && hosts.push(host2);
                console.log(hosts);
                return <div key={currentValue._id} className="card">
                    <a href={"/p/" + currentValue.shortcode}>
                        <img
                            src={currentValue.display_url}
                            alt={"post by :" + currentValue.full_name}
                            width={"100%"}
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                        />
                    </a><br /> post by
                    <a href={"/" + currentValue.username}>

                        <div style={{ display: "flex", flexDirection: "row", padding: "5px" }}>
                            <img
                                src={currentValue.profile_pic_url}
                                alt={currentValue.username}
                                style={{ borderRadius: "100px", boxShadow: "0 14px 18px 0 rgba(0, 0, 0, 0.3)" }}
                                width={"30%"}
                            />
                            <p>
                                {currentValue.username}<br />
                                full_name :{currentValue.full_name}<br />
                            </p>
                        </div>
                    </a>
                le : {new Date(currentValue.taken_at_timestamp * 1000).toLocaleDateString()}<br />
                    reputaton :{currentValue.clicks}<br />
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                </div>;
            });
            return <div>
                <div className="grid">
                    {TopPostsView}
                </div>
            </div>
        } else {
            return waitaminute;
        }

    }
}

const mapStateToPropsTopPosts = state => ({ top: state.statisticsReducer.TopSearchedPosts })
const mapDispatchToPropsTopPosts = (dispatch) => ({
    getTopPosts: (page) => {
        fetch(`/api/Posts/search?sort=clicks&order=desc${(!!page && page !== "") ? `&page=${page}` : ""}`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopPostsAction(data));
            }).catch(e => {
            });
    }
})
export const TopSearchdPosts = connect(
    mapStateToPropsTopPosts,
    mapDispatchToPropsTopPosts
)(TopPostsClass);
//#endregion top_posts

//#region top_hashtags
class TopHashtagsClass extends React.Component {
    componentDidMount() {
        this.props.getTopHashtags(this.props.page);
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0 && !top.name) {
            let TopHashtagsView = top.map(function (currentValue) {
                let host = currentValue.profile_pic_url.split("/")[2];
                !hosts.includes(host) && hosts.push(host);
                console.log(hosts);
                return (
                    <a className="card" key={currentValue._id} href={`/explore/tags/${currentValue.name}`}>
                        <div>
                            <img
                                src={currentValue.profile_pic_url}
                                alt={"#" + currentValue.name}
                                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                            /><br />
                #{currentValue.name}<br />
                    reputaton :{currentValue.clicks}<br />
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                        </div>
                    </a>
                );
            });
            return <div>
                <div className="grid">
                    {TopHashtagsView}
                </div>
            </div>
        } else {
            return waitaminute;
        };
    }
}

const mapStateToPropsTopHashtags = state => ({ top: state.statisticsReducer.TopSearchedHashtags })
const mapDispatchToPropsTopHashtags = (dispatch) => ({
    getTopHashtags: (page) => {
        fetch(`/api/Hashtags/search?sort=clicks&order=desc${(!!page && page !== "") ? `&page=${page}` : ""}`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopHashtagsAction(data));
            }).catch(e => {
            });
    }
})
export const TopSearchdHashtags = connect(
    mapStateToPropsTopHashtags,
    mapDispatchToPropsTopHashtags
)(TopHashtagsClass);
//#endregion top_hashtags

//#region top_locations
class TopLocationsClass extends React.Component {
    componentDidMount() {
        this.props.getTopLocations();
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0 && !top.name) {
            let TopLocationsView = top.map(function (currentValue) {
                let host = currentValue.profile_pic_url.split("/")[2];
                !hosts.includes(host) && hosts.push(host);
                console.log(hosts);
                return <a className="card" key={currentValue._id} href={`/explore/locations/${currentValue.id}`}>
                    <div>
                        <img
                            src={currentValue.profile_pic_url}
                            alt={"#" + currentValue.name}
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                        /><br />
                        <p>{currentValue.name}</p><br />
                        <p>{currentValue.blurb}</p><br />
                        <p>latitude :{currentValue.lat}</p><br />
                        <p>longitude :{currentValue.lng}</p><br />
                    reputaton :{currentValue.clicks}<br />
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                    </div>
                </a>;
            });
            return <div>
                <div className="grid">
                    {TopLocationsView}
                </div>
            </div>;
        } else {
            return waitaminute;
        }
    }
}

const mapStateToPropsTopLocations = state => ({ top: state.statisticsReducer.TopSearchedLocations })
const mapDispatchToPropsTopLocations = (dispatch) => ({
    getTopLocations: (page) => {
        fetch(`/api/Locations/search?sort=clicks&order=desc${(!!page && page !== "") ? `&page=${page}` : ""}`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopLocationsAction(data));
            }).catch(e => {
            });
    }
})
export const TopSearchdLocations = connect(
    mapStateToPropsTopLocations,
    mapDispatchToPropsTopLocations
)(TopLocationsClass);
//#endregion top_locations

class TopSearches extends React.Component {
    render() {
        return <div className="_2z6nI" style={{ paddingBottom: "2em" }}>
            <article className="ySN3v" >
                <GetHeaderText text="users" />
                <TopSearchdUsers />
                <GetHeaderText text="posts" />
                <TopSearchdPosts />

                <GetHeaderText text="hashtags" />
                <TopSearchdHashtags />
                <GetHeaderText text="locations" />
                <TopSearchdLocations />
            </article >
        </div>;
    }
}


function GetHeaderText(params) {
    return <h1 style={{ color: "brown", fontFamily: "serif", margin: "2vw", fontSize: "4vw", textTransform: "uppercase" }}>
        top searched <a href={`/statistics/${params.text}`}><u>{params.text}</u></a>
    </h1>;
}

export const Home = withRouter(TopSearches)