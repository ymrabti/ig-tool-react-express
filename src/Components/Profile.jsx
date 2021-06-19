import React, { Component } from 'react';
import { setStateProfile } from "../actions/Index";
import { connect } from 'react-redux';
import { text2Html, size_plain, beautify_numbers, download, AllPosts, GetFilename, get_daba, action_types } from "../tools";
import { pathspubs, pathigtv, waitaminute/* ,pathreels,pathtagged,pathsguides */ } from "./svgs";
import JSZip from "jszip";
import { JS_ZipUtils } from "../utils/jsziputils";
import { IgtvLinks, LinksPosts } from "./links2IGTV";
import { saveAs } from "file-saver";
import { Link, withRouter } from "react-router-dom";

//#region PDP
class Pdp extends Component {
    downloadpdp() {
        download(this.props.profile_pic_url_hd, this.props.username)
    }
    render() {
        return <center>
            <br />
            <img
                onClick={this.downloadpdp.bind(this)}
                alt={this.props.username} decoding="auto"
                src={this.props.profile_pic_url_hd}
                crossOrigin="anonymous"
                style={
                    {
                        borderRadius: "10px",
                        width: "100%",
                        maxWidth: "320px",
                        boxShadow: "0 -8px 18px 0 rgba(0, 0, 0, 0.4)"
                    }
                }
            />
            <br />

        </center>
    }
}

const mapStateToPropsPdp = state => ({
    profile_pic_url_hd: state.ig_reducer.user.profile_pic_url_hd,
    username: state.ig_reducer.user.username
})

const mapDispatchToPropsPdp = dispatch => ({
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
                    <div className="_2dbep" role="link" style={{ width: "150px", height: "150px", boxShadow: "1px 1px 10px 4px rgba(0, 0, 0, 0.3)" }}>
                        <img alt={this.props.full_name}
                            crossOrigin="anonymous" className="_6q-tv" data-testid="user-avatar" draggable="false" src={this.props.profile_pic_url} />
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
                    <a className="yLUwa" href={this.props.external_url_linkshimmed} target="_blank" rel="noreferrer">{this.props.external_url}</a>
                </div>
            </section>
        </header>
    }
}
//#endregion head

class DldAllBtn extends Component {
    /**
     * @param {any[]} edges
     */
    downloadAll(edges) {
        if (edges.length) {
            let toggle = this.props.toggle_modal;
            toggle();
            let textCon = this.props.textMark;
            var timeoutDefault = 60000;// var timeoutRetry = 300000;
            var xhrsStatus = { aborted: false, };
            var elements = edges.filter(item => !item.is_video);
            var cPhotos = elements.filter(item => !item.is_video).length;
            var cVideos = elements.filter(item => item.is_video).length;
            var cElemts = elements.length;
            var confirmText = "Download " + cElemts + " elements (" + cPhotos + " photos";
            cVideos !== 0 ? confirmText += " and " + cVideos + " videos) ?" : confirmText += ") ?";
            if (window.confirm(confirmText)) {
                var zip = new JSZip();
                elements.forEach(function (item, index) {
                    var link_down = item.linkDownload;
                    // username__ = item["owner"]? `${item["owner"]} `:"Instagram ";
                    JS_ZipUtils.getBinaryContent(link_down,
                        function (err, data) {
                            if (err) {
                                if (!(err.code === 404 || err.code === 410)) {
                                    alert(`error code ${err.code}`);
                                }
                            } else {
                                zip.file(GetFilename(link_down), data, { binary: true });
                            }
                        }, xhrsStatus, timeoutDefault
                    );
                });
                var elemnt = document.querySelector("#progressBar");
                let currentFile = document.querySelector("#currentFile");
                setTimeout(function () {
                    zip.generateAsync({ type: "blob" },
                        function (meta) {
                            var file_curr = meta.currentFile;
                            var percent = Math.floor(meta.percent);
                            var strpct = `${percent}%`;
                            elemnt.style.width = strpct; elemnt.innerHTML = strpct;
                            currentFile.innerHTML = file_curr;
                            if (!file_curr) {
                                currentFile.innerHTML = "Zipping complete !";
                                setTimeout(function () {
                                    toggle();
                                }, 1000)
                            }
                        })
                        .then(function (content) {
                            // var date = new Date();
                            saveAs(content, `${textCon + " " + get_daba()}.zip`);
                        });
                }, 1000)
            }
        }
    }
    render() {
        let edges2dld = this.props.edges;
        let edges = AllPosts(edges2dld);
        return <button name="download" onClick={() => { this.downloadAll(edges) }}>
            <i className="fa fa-download">
            </i>Download All</button>;
    }
}
const mapStateToPropsDld = state => ({})

const mapDispatchToPropsDld = (dispatch) => ({
    toggle_modal: () => dispatch({ type: action_types.ig.TOGGLE_MODAL_DOWNLOAD })
})

export const DownloadAll = connect(mapStateToPropsDld, mapDispatchToPropsDld)(DldAllBtn);

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
            document.title = `${user.full_name} (@${user.username}) sur Instagram • Photos et vidéos`
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
                category_name: user.category_name,
                external_url_linkshimmed: user.external_url_linkshimmed
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
                {
                    edge_owner_to_media.edges.length!==0 && <DownloadAll
                        edges={edge_owner_to_media.edges}
                        textMark={`@${username}`}
                    />
                }
                <PdpConnected />
            </>;
        }
        else {
            return waitaminute;
        }

    }
}
const mapStateToPropsProfile = state => ({ user: state.ig_reducer.user })

const mapDispatchToPropsProfile = (dispatch) => ({
    fetchProfile: (username) => {
        fetch(`/instagram/${username}`)
            .then(response => response.json())
            .then(data => {
                data.graphql && dispatch(setStateProfile(data.graphql.user));
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

