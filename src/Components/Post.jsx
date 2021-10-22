import React from "react";
import { connect } from "react-redux";
import {
    listNames,
    text2Html,
    getDeffDates,
    toHHMMSS
} from "../tools";
import Slider from "infinite-react-carousel";
// import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { fetchPost } from "../actions/Index";
import { size_plain } from "../tools";
import "../css/videoplayer.css";
import { WaitingPost, sound, muted } from "./svgs";
import { DownloadAll } from "./Profile";

const SubSection = (props) => {
    const size = props.data.size;
    const count_comments = props.data.count_comments;
    const count_likes = props.data.count_likes;
    return (
        <>
            {
                count_likes !== 0 && <span className="fr66n">
                    <button className="wpO6b" type="button">
                        <div className="QBdPU ">
                            <span className="">
                                <svg
                                    aria-label="J’aime"
                                    className="_8-yf5 "
                                    fill="#262626"
                                    height={size}
                                    width={size}
                                    viewBox="0 0 48 48"
                                >
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                    </path>
                                </svg>
                                {size_plain(count_likes)}
                            </span>
                        </div>
                    </button>
                </span>
            }
            {
                count_comments !== 0 && <span className="_15y0l">
                    <button className="wpO6b" type="button">
                        <div className="QBdPU ">
                            <svg
                                aria-label="Commenter"
                                className="_8-yf5 "
                                fill="#262626"
                                height={size}
                                width={size}
                                viewBox="0 0 48 48"
                            >
                                <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd">
                                </path>
                            </svg>
                            {size_plain(count_comments)}
                        </div>
                    </button>
                </span>
            }
        </>
    );
}
function ImageView(params) {
    return <div className="kPFhm B1JlO OAXCp">
        <div style={{ height: "100%", position: "absolute", width: "100%" }}>
            <div className="GRtmf wymO0 ">
                <div className="_5wCQW">
                    <img
                        onClick={
                            () => {
                                window.open(
                                    params.display_url,
                                    'Image',
                                    `scrollbars=yes,resizable=yes,status=no,
                                    fullscreen=yes,width=${window.screen.width},
                                    height=${window.screen.height}`);
                                return false;
                            }}
                        alt={params.accessibility_caption}
                        className="FFVAD"
                        crossOrigin="anonymous"
                        decoding="auto"
                        src={'/instagram/image/'+params.display_url.replaceAll('/', '(')}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    </div>;
}

class VideoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
            muted: false,
            length: 0,
            formattedLength: 0,
            currentTime: 0,
            formattedTime: 0,
            volume: 0.6
        };
    }
    duration() {
        let dur = document.getElementById("v").duration;
        dur = dur.toFixed();
        let formattedLength = toHHMMSS(dur);
        this.setState({
            length: dur,
            formattedLength: formattedLength
        });
        return dur;
    }

    currentTime() {
        let cur = document.getElementById("v").currentTime;
        cur = cur.toFixed();
        let formattedTime = toHHMMSS(cur);

        this.setState({
            currentTime: cur,
            formattedTime: formattedTime
        });
        if (parseInt(this.state.currentTime) === parseInt(this.state.length)) {
            this.setState({ paused: true });
        }

        return cur;
    }
    customTime() {
        const time_range = document.querySelector(".time_range");
        document.getElementById("v").currentTime = time_range.value;

        this.setState({
            currentTime: time_range.value
        });
    }
    customVolume() {
        const volume_range = document.querySelector(".volume_range");
        document.getElementById("v").volume = volume_range.value;

        this.setState({
            volume: volume_range.value
        });

        if (volume_range.value === 0) {
            this.setState({
                muted: true
            });
        } else {
            this.setState({
                muted: false
            });
        }
    }
    switchPlay(event) {
        let video = event.target.parentNode.querySelector("video");
        video.paused ? video.play() : video.pause();
        this.setState({
            paused: !this.state.paused
        });
    }
    switchSound(event) {
        let tagName = Object.values(event.target)[0].type;
        let tagSearch;
        switch (tagName) {
            case "path":
                tagSearch = event.target.parentNode.parentNode.parentNode.parentNode;
                break;
            case "svg":
                tagSearch = event.target.parentNode.parentNode.parentNode;
                break;
            case "div":
                tagSearch = event.target.parentNode.parentNode;
                break;
            default:
                break;
        }
        let video = tagSearch.querySelector("video");
        video.muted = !video.muted;
        this.setState({
            muted: !this.state.muted
        });
    }
    render() {
        return (<div className="kPFhm B1JlO OAXCp">
            <div style={{ height: "100%", position: "absolute", width: "100%" }}>
                <div className="GRtmf wymO0 ">
                    <div className="_5wCQW">
                        <video
                            className="tWeCl"
                            crossOrigin="anonymous"
                            playsInline=""
                            poster={this.props.display_url}
                            preload="none"
                            type="video/mp4"
                            src={'/instagram/image/'+this.props.video_url.replaceAll('/', '(')}
                            onLoadStart={e => e.target.volume = this.state.volume}
                            loop={true}
                            style={{ display: "block" }}
                        >
                        </video>
                    </div>
                </div>
                <input
                    type="range"
                    className="time_range"
                    onChange={this.customTime.bind(this)}
                    value={this.state.currentTime}
                    step={0.1}
                    min={0}
                    max={this.state.length}
                />
            </div>

            <div className="PyenC">
                <span
                    aria-label="Lire"
                    className={`qBUYS _7CSz9 ${!this.state.paused ? "" : "FGFB7"} videoSpritePlayButton`}
                    role="button"
                >
                </span>
            </div>
            <div
                onClick={this.switchPlay.bind(this)}
                aria-label="Controler"
                className="fXIG0"
                role="button"
            >
            </div>
            <span className="">
                <input
                    type="range"
                    className="time_range"
                    onChange={this.customTime.bind(this)}
                    value={this.state.currentTime}
                    step={0.1}
                    min={0}
                    max={this.state.length}
                />
                <div
                    onClick={this.switchSound.bind(this)}
                    className="_41V_T IhCmn Igw0E IwRSH eGOV_ _4EzTm MGdpg y2rAt lC6p0 HVWg4 O1flK fm1AK TxciK"
                    style={{ cursor: "pointer" }}
                >
                    <svg
                        aria-label="L’audio est mis en sourdine."
                        className="_8-yf5 "
                        fill="#ffffff"
                        height="12"
                        viewBox="0 0 48 48"
                        width="12"
                    >
                        <path
                            clipRule="evenodd"
                            d={!this.state.muted ? sound : muted}
                            fillRule="evenodd"
                        >
                        </path>
                    </svg>
                </div>
                <button className="FqZhB" label="Activer/Désactiver le son">Activer/Désactiver le son</button>
            </span>

        </div>
        );
    }
}
class Post extends React.Component {
    componentWillUnmount() {
        this.props.unsetPostData();
    }
    componentDidMount() {
        let { shortcode } = this.props.match.params;
        this.props.fetchDataPost(shortcode);
    }
    render() {
        const post = this.props.post;
        let objectFilter = Object.values(post)
            .filter(u => typeof (u) !== "function");
        if (objectFilter.length !== 0) {
            var __typename = post.__typename;
            let display_url = post.display_url;
            let video_url = post.video_url;
            var is_video = post.is_video;
            let localization = post.location;
            let owner = post.owner;
            let edges_comments = post.edge_media_to_parent_comment.edges;
            var taken_at_timestamp = post.taken_at_timestamp;
            var date_pub = new Date(taken_at_timestamp * 1000);
            var shortcode = post.shortcode;
            var captions = post.edge_media_to_caption.edges;
            var count_likes = post.edge_media_preview_like.count;
            var count_comments = post.edge_media_preview_comment.count;
            var caption = captions.length !== 0 ? captions[0].node.text : "";
            const settings = {
                dots: true,
                speed: 500,
                duration: 100,
                className: "backWhite",
                prevArrow: <button className="POSa_">
                    <div className="coreSpriteLeftChevron">
                    </div>
                </button>,
                nextArrow: <button className="_6CZji">
                    <div className="coreSpriteRightChevron">
                    </div>
                </button>
            };
            const Comnts = edges_comments.map(comment => {
                var node = comment.node;
                var owner_comment = node.owner;
                let comment_id = node.id;
                var username_comment = owner_comment.username;
                var pic_url_comment = owner_comment.profile_pic_url;
                var is_verified_comment = owner_comment.is_verified;
                var date_cmmnt = new Date(node.created_at * 1000);
                let count_likes_in_comment = node.edge_liked_by.count;
                let count_cmnts_in_comment = node.edge_threaded_comments.count;
                return <ul key={comment_id} className="Mr508 ">
                    <div role="button" className="ZyFrc">
                        <li className="gElp9 rUo9f " role="menuitem">
                            <div className="P9YgZ">
                                <div className="C7I1f ">
                                    <div className="Jv7Aj mArmR   pZp3x">
                                        <div className="RR-M-  TKzGu" aria-disabled="true" role="button">
                                            <canvas className="CfWVH" height="42" width="42" style={
                                                {
                                                    position: "absolute",
                                                    top: "-5px",
                                                    left: "-5px", width: "42px",
                                                    height: "42px"
                                                }
                                            }>
                                            </canvas>
                                            <a
                                                className="_2dbep qNELH kIKUG"
                                                href={"/" + username_comment}
                                                style={
                                                    {
                                                        width: "32px",
                                                        height: "32px"
                                                    }
                                                }
                                            >
                                                <img
                                                    alt={username_comment}
                                                    className="_6q-tv"
                                                    crossOrigin="anonymous"
                                                    data-testid="user-avatar"
                                                    draggable="false"
                                                    src={'/instagram/image/'+pic_url_comment.replaceAll('/', '(')} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="C4VMK">
                                        <h3 className="_6lAjh ">
                                            <div className="Igw0E IwRSH eGOV_ _4EzTm ItkAi">
                                                <span
                                                    className="Jv7Aj mArmR MqpiF"
                                                    style={
                                                        {
                                                            display: "flex",
                                                            flexDirection: "row"
                                                        }
                                                    }
                                                >
                                                    <a
                                                        className="sqdOP yWX7d _8A5w5 ZIAjV"
                                                        href={"/" + username_comment}>{username_comment}
                                                    </a>
                                                    {is_verified_comment && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a">
                                                        <span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span>
                                                    </div>
                                                    }
                                                </span>
                                            </div>
                                        </h3>
                                        <span className="">{text2Html(node.text)}</span>
                                        <div className="Igw0E IwRSH eGOV_ _4EzTm pjcA_ aGBdT">
                                            <div className="_7UhW9 PIoXz MMzan _0PwGv uL8Hv">
                                                <a className="gU-I7" href={"/p/" + shortcode + "/c/" + comment_id + "/"}>
                                                    <time
                                                        className="FH9sR Nzb55"
                                                        dateTime={date_cmmnt.toJSON()}
                                                        title={date_cmmnt.toString()}
                                                    >
                                                        {getDeffDates(date_cmmnt)}
                                                    </time>
                                                </a>

                                            </div>
                                        </div>
                                        {
                                            (count_cmnts_in_comment + count_likes_in_comment) !== 0 &&
                                            <section className="ltpMr  Slqrh">
                                                <SubSection
                                                    data={
                                                        {
                                                            count_comments: count_cmnts_in_comment,
                                                            count_likes: count_likes_in_comment,
                                                            size: 12
                                                        }
                                                    }
                                                />
                                            </section>
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>;
            });
            /* const links = (__typename !== "GraphSidecar") ? [{ linkDownload: is_video ? video_url : display_url }]
                :
                post.edge_sidecar_to_children.edges.map(item => ({ 
                    linkDownload: item.node.is_video ? item.node.video_url : item.node.display_url
                })); */
            const media = (__typename !== "GraphSidecar") ? (
                !is_video ?
                    (
                        <ImageView
                            accessibility_caption={post.accessibility_caption}
                            display_url={post.display_url}
                        />
                    )
                    :
                    (
                        <VideoView
                            display_url={display_url}
                            video_url={video_url}
                            vdeoPlayed={this.props.vdeoPlayed}
                            vdeoSound={this.props.vdeoSound}
                        />
                    )


            )
                :

                (
                    <Slider {...settings}>
                        {
                            post.edge_sidecar_to_children.edges.map(item => {
                                let node = item.node;
                                return <div style={{ backgroundColor: "pink" }} key={node.shortcode}>
                                    {
                                        !node.is_video ?
                                            <ImageView
                                                display_url={node.display_url}
                                                accessibility_caption={node.accessibility_caption}
                                            /> :
                                            <VideoView
                                                display_url={node.display_url}
                                                video_url={node.video_url}
                                                vdeoPlayed={false}
                                                vdeoSound={false}
                                            />
                                    }
                                </div>
                            })
                        }
                    </Slider>

                );
            document.title = `Post by ${owner.full_name} (@${owner.username})`;
            return (
                <div className="PdwC2 fXiEu s2MYR" role="dialog">
                    <article id="articlePost" className="M9sTE L_LMM JyscU ePUX4" role="presentation">
                        <header id="headerPost" className="Ppjfr UE9AK wdOqh">
                            <div className="Jv7Aj mArmR   pZp3x">
                                <div className="RR-M-  mrq0Z" aria-disabled="true" role="button">
                                    <a
                                        className="_2dbep qNELH kIKUG"
                                        href={owner.username}
                                        style={{ width: "32px", height: "32px" }}
                                    >
                                        <img
                                            alt={owner.username}
                                            className="_6q-tv"
                                            crossOrigin="anonymous"
                                            data-testid="user-avatar"
                                            draggable="false"
                                            src={'/instagram/image/'+owner.profile_pic_url.replaceAll('/', '(')}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="o-MQd z8cbW ">
                                <div className="PQo_0 RqtMr">
                                    <div className="e1e1d">
                                        <span
                                            className="Jv7Aj mArmR MqpiF"
                                            style={{ display: "flex", flexDirection: "row" }}
                                        >
                                            <a
                                                className="sqdOP yWX7d _8A5w5 ZIAjV"
                                                href={"/" + owner.username}>{owner.username}
                                            </a>
                                            {
                                                owner.is_verified && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a">
                                                    <span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span>
                                                </div>
                                            }
                                        </span>
                                    </div>
                                </div>
                                {
                                    localization && <div className="M30cS">
                                        <div className="JF9hh">
                                            <a href={"/explore/locations/" + localization.id} onClick={this.handleClick} className="O4GlU">{localization.name}</a>
                                        </div>
                                    </div>
                                }
                                <div className="M30cS">
                                    <div>
                                    </div>
                                    <div className="JF9hh">
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div id="mediaPost" className="_97aPb">

                            {
                                media
                            }
                        </div>
                        <div id="commentsPost" className="eo2As">
                            <section className="ltpMr  Slqrh">
                                <SubSection data={{ count_comments, count_likes, size: 24 }} />
                                {
                                    is_video && <span className="wmtNn">
                                        <div>
                                            <div aria-disabled="false" role="button">
                                                <button className="wpO6b" type="button">
                                                    <div className="QBdPU ">
                                                        <svg aria-label="Icône du nombre de vues" strokeWidth="3" fill="#FFFFFF00" className="_8-yf5 " stroke="black" height="24" viewBox="0 0 48 48" width="24">
                                                            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z">
                                                            </path>
                                                        </svg>
                                                        {size_plain(post.video_view_count)}
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </span>
                                }
                            </section>
                            <div className="EtaWk">
                                <ul className="XQXOT pXf-y ">
                                    <div role="button" className="ZyFrc">
                                        <li className="gElp9 rUo9f PpGvg" role="menuitem">
                                            <div className="P9YgZ">
                                                <div className="C7I1f X7jCj">
                                                    <div className="Jv7Aj mArmR   pZp3x">
                                                        <div className="RR-M- h5uC0 TKzGu" aria-disabled="false" role="button">
                                                            <canvas className="CfWVH" height="40" width="40" style={{ position: "absolute", top: "-4px", left: "-4px", width: "40px", height: "40px" }}>
                                                            </canvas>
                                                            <span className="_2dbep " role="link" style={{ width: "32px", height: "32px" }}>
                                                                <img
                                                                    alt={owner.username}
                                                                    className="_6q-tv"
                                                                    crossOrigin="anonymous"
                                                                    data-testid="user-avatar"
                                                                    draggable="false"
                                                                    src={'/instagram/image/'+owner.profile_pic_url.replaceAll('/', '(')}
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="C4VMK">
                                                        <h2 className="_6lAjh ">
                                                            <div className="Igw0E IwRSH eGOV_ _4EzTm ItkAi">
                                                                <span
                                                                    className="Jv7Aj mArmR MqpiF"
                                                                    style={
                                                                        {
                                                                            display: "flex",
                                                                            flexDirection: "row"
                                                                        }
                                                                    }
                                                                >
                                                                    <a
                                                                        className="sqdOP yWX7d _8A5w5 ZIAjV"
                                                                        href={"/" + owner.username}
                                                                    >
                                                                        {owner.username}
                                                                    </a>
                                                                    {
                                                                        owner.is_verified && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a">
                                                                            <span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span>
                                                                        </div>
                                                                    }
                                                                </span>
                                                            </div>
                                                        </h2>
                                                        <span className="">
                                                            {text2Html(caption)}
                                                        </span>
                                                        <div className="Igw0E IwRSH eGOV_ _4EzTm pjcA_ aGBdT">
                                                            <div className="_7UhW9 PIoXz MMzan _0PwGv uL8Hv">
                                                                <time
                                                                    className="FH9sR Nzb55"
                                                                    dateTime={date_pub.toJSON()}
                                                                    title={date_pub.toLocaleDateString()}
                                                                >
                                                                    {getDeffDates(date_pub)}
                                                                </time>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                    {Comnts}

                                </ul>
                            </div>
                            <div className="k_Q0X I0_K8  NnvRN">
                                <a className="c-Yi7" href={"/p/" + shortcode}>
                                    <time
                                        className="_1o9PC Nzb55"
                                        dateTime={date_pub.toJSON()}
                                        title={date_pub.toLocaleDateString()}
                                    >
                                        {getDeffDates(date_pub)}
                                    </time>
                                </a>
                            </div>

                        </div>
                    </article>
                    <DownloadAll
                        edges={[{ node: post }]}
                        textMark={`Post by ${owner.username}`}
                    />
                </div>
            );
        } else {
            return WaitingPost
        }
    }
}

class ModalPostModern extends React.Component {
    handleClick(event) {
        const target = event.target;
        const keys = Object.keys(target);
        const keyName = keys[1];
        const targetName = target[keyName].name;
        switch (targetName) {
            case "x":
                {
                    this.props.history.goBack();
                    break;
                }
            case listNames.closeModal:
                {
                    this.props.history.goBack();
                    break;
                }
            default:
                break;
        }
    }
    render() {
        return (
            <div name={listNames.closeModal} onClick={this.handleClick.bind(this)} className="_2dDPU CkGkG" role="dialog">
                {this.props.children}
                <div className="Igw0E IwRSH eGOV_ _4EzTm BI4qX qJPeX fm1AK TxciK yiMZG">
                    <button name="x" className="wpO6b" type="button">
                        <div name="x" className="QBdPU ">
                            <svg name="x" aria-label="Fermer" className="_8-yf5 " fill="#ffffff" height="24" viewBox="0 0 48 48" width="24">
                                <path name="x" clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>

            </div>);
    }
}
export const ModalPostWithRouter = withRouter(ModalPostModern)

const mapStateToProps = state => (
    {
        post: state.ig_reducer.post
    }
)

const mapDispatchToProps = (dispatch) => ({
    unsetPostData: () => dispatch(fetchPost({})),
    toggleSound: () => dispatch({ type: "TOGGLE_VIDEO_SOUND" }),
    togglePlay: () => dispatch({ type: "TOGGLE_VIDEO_PLAY" }),
    fetchDataPost: (shortcode) => {
        fetch(`/instagram/p/${shortcode}`)
            .then(response => response.json())
            .then(data => {
                // dispatch(setVisiMP(true));
                dispatch(fetchPost(data.graphql.shortcode_media));
            }).catch(e => {
                // dispatch(setVisiMP(false));
                dispatch(fetchPost({}));
            });
    }
})
const PostConnected = connect(mapStateToProps, mapDispatchToProps)(Post);
const PostConnectedWithRouter = withRouter(PostConnected);
export default PostConnectedWithRouter;