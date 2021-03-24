import React, { Component } from 'react';
import Slider from "infinite-react-carousel";
import { connect } from 'react-redux';
import { beautify_numbers, getDeffDates, text2Html } from "../tools";
import { Waiting } from "../tools";


class PostSlider extends Component {
    render() {
        const settings = {
            dots: true,
            arrowsBlock: false
        };
        let children = Object.values(this.props).map((item, index) => {
            let node = item.node;
            return <div key={node.shortcode}>
                {
                    !node.is_video ?
                        <img src={node.display_url} alt={node.accessibility_caption} width={"100%"} height={"auto"} /> :
                        <video controls={true} width={"100%"} onLoadStart={e => e.target.volume = 0.5} >
                            <source src={node.video_url} type="video/mp4"></source>
                        </video>
                }
            </div>
        })
        return (
            <div>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        );
    }
}

class HeadPost extends Component {
    // constructor(props) {
    //     super(props);
    // }
    handleClick(target) {
        target.preventDefault();
        console.log("Im clicked");
    }
    render() {

        return <header className="Ppjfr UE9AK wdOqh">
            <div className="Jv7Aj mArmR pZp3x">
                <div className="RR-M- h5uC0 mrq0Z" aria-disabled="false" role="button">
                    <canvas className="CfWVH" height="42" width="42" style={{ position: "absolute", top: "-5px", left: "-5px", width: "42px", height: "42px" }}>
                    </canvas>
                    <span className="_2dbep" role="link" style={{ width: "32px", height: "32px" }}>
                        <img alt={this.props.owner.username} className="_6q-tv" data-testid="user-avatar" draggable="false" src={this.props.owner.profile_pic_url} />
                    </span>
                </div>
            </div>
            <div className="o-MQd z8cbW">
                <div className="PQo_0 RqtMr">
                    <div className="e1e1d">
                        <span className="Jv7Aj mArmR MqpiF" style={{ display: "flex", flexDirection: "row" }}>
                            <a href={"/ymrabti/" + this.props.owner.username} onClick={this.handleClick} className="sqdOP yWX7d _8A5w5 ZIAjV">{this.props.owner.username}</a>
                            {this.props.owner.is_verified && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a"><span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span></div>}
                        </span>
                    </div>
                </div>
                {this.props.localization && <div className="M30cS">
                    <div className="JF9hh">
                        <a href={"/ymrabti/" + this.props.localization.id} onClick={this.handleClick} className="O4GlU">{this.props.localization.name}</a>
                    </div>
                </div>}
            </div>
        </header>;
    }
}

class CommentsPost extends Component {
    handleClick(e) {
        e.preventDefault();
    }
    render() {
        const comments = Object.values(this.props.edges_comments);
        const owner = this.props.owner;
        const date_pub = this.props.date_pub;
        var username = owner.username;
        var pic_url = owner.profile_pic_url;
        var is_verified = owner.is_verified;
        // var full_name = owner.full_name;
        // var abonnes = owner.edge_followed_by.count;
        const comm_ents = comments.map(
            (comment, index) => {
                var node = comment.node;
                var owner_comment = node.owner;
                var username_comment = owner_comment.username;
                var pic_url_comment = owner_comment.profile_pic_url;
                var is_verified_comment = owner_comment.is_verified;
                var date_cmmnt = new Date(node.created_at * 1000);
                return <ul key={username_comment + " " + index} className="Mr508">
                    <div role="button" className="ZyFrc">
                        <li className="gElp9 rUo9f" role="menuitem">
                            <div className="P9YgZ">
                                <div className="C7I1f">
                                    <div className="Jv7Aj mArmR pZp3x">
                                        <div className="RR-M-TKzGu" aria-disabled="true" role="button">
                                            <img alt={username_comment} className="_2dbep qNELH kIKUG Gai8tTPkdjh7" data-testid="user-avatar" draggable="false" src={pic_url_comment} />
                                        </div>
                                    </div>
                                    <div className="C4VMK">
                                        <h3 className="_6lAjh">
                                            <div className="Igw0E IwRSHeGOV_ _4EzTm ItkAi">
                                                <span className="Jv7Aj mArmR MqpiF" style={{ display: "flex", flexDirection: "row" }}>
                                                    <a href={"/" + username_comment} onClick={this.handleClick} className="sqdOP yWX7d _8A5w5 ZIAjV">{username_comment}</a>
                                                    {is_verified_comment && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a"><span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span></div>}
                                                </span>
                                            </div>
                                        </h3>
                                        <span className="">{text2Html(node.text)}</span>
                                        <section className="EDfFK ygqzn">
                                            <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                                                <time className="FH9sR Nzb55" dateTime={date_cmmnt.toJSON()} title={date_cmmnt.toLocaleDateString()}>
                                                    <span className="sqdOP yWX7d _8A5w5">{getDeffDates(date_cmmnt)}</span>
                                                </time>
                                            </div>
                                            <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                                                {node.edge_liked_by.count > 0 && <span style={{ display: "flex", flexDirection: "row" }} className="FH9sR"><svg aria-label="J’aime" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>&nbsp;<span className="sqdOP yWX7d _8A5w5">{node.edge_liked_by.count}</span>
                                                </span>}
                                            </div>
                                        </section>
                                        <div className="Igw0E IwRSHeGOV_ _4EzTm pjcA_ aGBdT">
                                            <div className="_7UhW9PIoXz MMzan _0PwGv uL8Hv">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            }
        );
        return <div style={{ maxHeight: "30em" }}>
            <div className="k_Q0X NnvRN">
            </div>
            <section className="EDfFK ygqzn">
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <svg aria-label="J’aime" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                &nbsp;&nbsp;<span className="sqdOP yWX7d _8A5w5">{beautify_numbers(this.props.count_likes)}</span>
                </div>
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <svg aria-label="Commenter" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                &nbsp;&nbsp;<span className="sqdOP yWX7d _8A5w5">{this.props.count_comments}</span>
                </div>
            </section>
            <section className="EDfFK ygqzn">
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <svg aria-label="Trouver des personnes" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd"></path></svg>
                    <a href={"/p/" + this.props.shortcode} onClick={this.handleClick} className="c-Yi7">
                        <time className="FH9sR Nzb55" dateTime={date_pub.toJSON()} title={date_pub.toLocaleDateString()}>
                            <span className="sqdOP yWX7d _8A5w5">&nbsp;&nbsp;{getDeffDates(date_pub)}</span>
                        </time>
                    </a>
                </div>
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <svg aria-label="Partager la publication" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    <a rel="noreferrer" className="c-Yi7" href={"https://www.instagram.com/p/" + this.props.shortcode} target="_blank">
                        <span className="sqdOP yWX7d _8A5w5">&nbsp;&nbsp;instagram</span>
                    </a>
                </div>
            </section>

            <div className="EtaWk" margin-top="10px">
                <ul className="XQXOT pXf-y">
                    <div role="button" className="ZyFrc">
                        <li className="gElp9 rUo9f" role="menuitem">
                            <div className="P9YgZ">
                                <div className="C7I1f">
                                    <div className="Jv7Aj mArmR pZp3x">
                                        <div className="RR-M-TKzGu" aria-disabled="true" role="button">
                                            <img alt={username} className="_2dbep qNELH kIKUG Gai8tTPkdjh7" data-testid="user-avatar" draggable="false" src={pic_url} />
                                        </div>
                                    </div>
                                    <div className="C4VMK">
                                        <h3 className="_6lAjh">
                                            <div className="Igw0E IwRSHeGOV_ _4EzTm ItkAi">
                                                <span className="Jv7Aj mArmR MqpiF" style={{ display: "flex", flexDirection: "row" }}>
                                                    <a href={"/" + username} onClick={this.handleClick} className="sqdOP yWX7d _8A5w5 ZIAjV">{username}</a>
                                                    {is_verified && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a"><span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span></div>}
                                                </span>
                                            </div>
                                        </h3>
                                        <span className="">{text2Html(this.props.caption)} </span>
                                        <time className="FH9sR Nzb55" dateTime={date_pub.toJSON()} title={date_pub.toLocaleDateString()}>
                                            <span className="sqdOP yWX7d _8A5w5">{getDeffDates(date_pub)}</span>
                                        </time>
                                        <div className="Igw0E IwRSHeGOV_ _4EzTm pjcA_ aGBdT">
                                            <div className="_7UhW9PIoXz MMzan _0PwGv uL8Hv">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    {comm_ents}
                </ul>
            </div>
        </div>;
    }
}

class ModalContent extends Component {
    downloadPost() {
        console.log("download !!")
    }
    ProfileClicked(target) {
        target.preventDefault();
    }
    handleClick(target) {
        target.preventDefault();
    }

    render() {
        let objectFilter = Object.values(this.props).filter(u => typeof (u) !== "function");
        if (objectFilter.length !== 0) {
            let localization = this.props.location;
            let owner = this.props.owner;
            let edges_comments = this.props.edge_media_to_parent_comment.edges;
            var tagged_users = this.props.edge_media_to_tagged_user.edges.map(item => {
                var item_node = item.node;
                var node_user = item_node.user;
                var node_x = item_node.x; node_x = !node_x ? Math.random() : node_x;
                var node_y = item_node.y; node_y = !node_y ? Math.random() : node_y;
                var user_username = node_user["username"];
                return <div key={user_username} className="xUdfV" style={{ left: node_x * 100 + "%", marginTop: "6px", top: node_y * 100 + "%", transform: "translate(-50%, 0%)" }}>
                    <a href={"/ymrabti/" + user_username} onClick={this.handleClick} className="JYWcJ">
                        <span className="wCuNw">
                            <div className="Mu0TI Vj5NV" style={{ left: "50%" }}>
                            </div>
                            <span className="eg3Fv">{user_username}</span>
                        </span>
                    </a>
                </div>
            })
            var taken_at_timestamp = this.props.taken_at_timestamp;
            var date_pub = new Date(taken_at_timestamp * 1000);
            var __typename = this.props.__typename;
            var is_video = this.props.is_video;
            var shortcode = this.props.shortcode;
            var captions = this.props.edge_media_to_caption.edges;
            var count_likes = this.props.edge_media_preview_like.count;
            var count_comments = this.props.edge_media_preview_comment.count;
            var caption = captions.length !== 0 ? captions[0].node.text : "";
            let video_url = this.props.video_url;
            return (
                <div className="v9tJq AAaSh VfzDr" id="divModaltoreplace">
                    <HeadPost {...{ localization, owner }} />
                    <div id="_main_">
                        <div className="_left_">
                            <div role="button" className="ZyFrc sf-root-media-container" data-sf-touch="1">
                                <div id="tagsclass" className={`kPFhm kHt39 fTh_a plVq-`} data-sf-skip="1">
                                    <div className="eLAPa _23QFA" role="button">
                                        {
                                            (__typename !== "GraphSidecar") ? (
                                                !is_video ?
                                                    <img src={this.props.display_url} alt={this.props.accessibility_caption} width={"100%"} height={"auto"} /> :
                                                    <video controls={true} width={"100%"} onLoadStart={e => e.target.volume = 0.5} >
                                                        <source src={video_url} type="video/mp4"></source>
                                                    </video>
                                            )
                                                : (
                                                    <PostSlider {...this.props.edge_sidecar_to_children.edges} />
                                                )
                                        }
                                        {tagged_users}
                                    </div>

                                    {
                                        tagged_users.length > 0 && <div onClick={(e) => {}} className="G_hoz LcKDX _6JfJs">
                                            <div className="HBUJV">
                                                <span aria-label="Identifications" className="glyphsSpriteUser__filled__24__grey_0 u-__7">
                                                </span>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                            <button name="download" onClick={this.downloadPost}>
                                <i className="fa fa-download">
                                </i>Download
                        </button>
                        </div>
                        <div className="_right_">
                            <CommentsPost {...{ edges_comments, count_likes, count_comments, caption, owner, date_pub, shortcode }} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <Waiting />;
        }
    }
}

const mapStateToProps = state => state.post

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
    }
}
export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ModalContent);
