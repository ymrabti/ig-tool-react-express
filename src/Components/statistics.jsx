import { Component } from "react";
import { connect } from "react-redux";
import { TopUsersAction, TopPostsAction, TopHashtagsAction, TopLocationsAction } from "../actions/Index";
import "../css/home.css";
import { getDeffDates } from "../tools";
import { waitaminute } from "./svgs";
import { withRouter } from "react-router-dom";


//#region top_users
class TopUsersClass extends Component {
    componentDidMount() {
        let loxation = this.props.location;
        const queries = {};
        let urls = new URLSearchParams(loxation.search);
        urls.forEach((value, key) => queries[key] = value);
        // console.log(queries);
        this.props.getTopUsers(this.props.page);
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0) {
            let TopUsersView = top.map(function (currentValue) {
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
            return <div name="grid">
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
        fetch(`/api/Users/search?sort=clicks&order=desc${(!!page&&page!=="")?`&page=${page}`:""}`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopUsersAction(data));
            }).catch(e => {
                console.log(`Error !`)
            });
    }
})
export const TopSearchdUsers = connect(
    mapStateToPropsTopUsers,
    mapDispatchToPropsTopUsers
)(withRouter(TopUsersClass));
//#endregion top_users

//#region top_posts
class TopPostsClass extends Component {
    componentDidMount() {
        this.props.getTopPosts()
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0) {
            let TopPostsView = top.map(function (currentValue) {
                return <div key={currentValue._id} className="card">
                    <img
                        src={currentValue.display_url}
                        alt={"post by :" + currentValue.full_name}
                        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                    /><br />
                post by :{currentValue.username}<br />
                le : {new Date(currentValue.taken_at_timestamp * 1000).toLocaleDateString()}<br />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <img
                            src={currentValue.profile_pic_url}
                            alt={currentValue.username}
                            style={{ borderRadius: "100px", boxShadow: "0 14px 18px 0 rgba(0, 0, 0, 0.3)" }}
                            width={"30%"}
                        />
                        <p>
                            full_name :{currentValue.full_name}<br />
                        </p>
                    </div>
                    reputaton :{currentValue.clicks}
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                </div>;
            });
            return <div>
                <div name="grid">
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
    getTopPosts: () => {
        fetch(`/api/Posts/search?sort=clicks&order=desc`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopPostsAction(data));
            }).catch(e => {
                console.log(`Error !`)
            });
    }
})
export const TopSearchdPosts = connect(
    mapStateToPropsTopPosts,
    mapDispatchToPropsTopPosts
)(TopPostsClass);
//#endregion top_posts

//#region top_hashtags
class TopHashtagsClass extends Component {
    componentDidMount() {
        this.props.getTopHashtags()
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0) {
            let TopHashtagsView = top.map(function (currentValue) {
                return <div key={currentValue._id} className="card">
                    <img
                        src={currentValue.profile_pic_url}
                        alt={"#" + currentValue.name}
                        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)" }}
                    /><br />
                #{currentValue.name}<br />
                    reputaton :{currentValue.clicks}<br />
                last search : {getDeffDates(new Date(currentValue.lastSearch))}<br />
                </div>;
            });
            return <div>
                <div name="grid">
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
    getTopHashtags: () => {
        fetch(`/api/Hashtags/search?sort=clicks&order=desc`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopHashtagsAction(data));
            }).catch(e => {
                console.log(`Error !`)
            });
    }
})
export const TopSearchdHashtags = connect(
    mapStateToPropsTopHashtags,
    mapDispatchToPropsTopHashtags
)(TopHashtagsClass);
//#endregion top_hashtags

//#region top_locations
class TopLocationsClass extends Component {
    componentDidMount() {
        this.props.getTopLocations();
    }
    render() {
        const top = this.props.top;
        if (top.length !== 0) {
            let TopPostsView = top.map(function (currentValue) {
                return <div key={currentValue._id} className="card">
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
                </div>;
            });
            return <div>
                <div name="grid">
                    {TopPostsView}
                </div>
            </div>;
        } else {
            return waitaminute;
        }
    }
}

const mapStateToPropsTopLocations = state => ({ top: state.statisticsReducer.TopSearchedLocations })
const mapDispatchToPropsTopLocations = (dispatch) => ({
    getTopLocations: () => {
        fetch(`/api/Locations/search?sort=clicks&order=desc`)
            .then(response => response.json())
            .then(data => {
                dispatch(TopLocationsAction(data));
            }).catch(e => {
                console.log(`Error !`)
            });
    }
})
export const TopSearchdLocations = connect(
    mapStateToPropsTopLocations,
    mapDispatchToPropsTopLocations
)(TopLocationsClass);
//#endregion top_locations

class TopSearches extends Component {
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
    return <h1 style={{ color: "brown", fontFamily: "serif",margin:"2vw", fontSize: "4vw", textTransform: "uppercase" }}>
        top searched <a href={`/statistics/${params.text}`}><u>{params.text}</u></a>
    </h1>;
}

export const Home = withRouter(TopSearches)