import React, { Component } from 'react';
import Slider from "infinite-react-carousel";
import { connect } from 'react-redux';
import { beautify_numbers, getDeffDates, text2Html } from "../tools";
import { Waiting } from "../tools";
import { SVGheart, SVGminiheart, SVGcmnt, SVGFindpeople, SVGshare } from "./svgs";
import { withRouter } from "react-router-dom";
import { fetchPost } from "../actions/Index";

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
        const owner = this.props.owner;
        const date_pub = this.props.date_pub;
        var username = owner.username;
        var pic_url = owner.profile_pic_url;
        var is_verified = owner.is_verified;
        // var full_name = owner.full_name;
        // var abonnes = owner.edge_followed_by.count;
        const comm_ents = this.props.edges_comments.map(
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
                                                    <a
                                                        href={"/" + username_comment} onClick={this.handleClick} className="sqdOP yWX7d _8A5w5 ZIAjV">
                                                        {username_comment}
                                                    </a>
                                                    {is_verified_comment && <div className="Igw0E IwRSH eGOV_ _4EzTm WKY0a"><span className="mTLOB Szr5J  coreSpriteVerifiedBadgeSmall" title="Verified">Verified</span></div>}
                                                </span>
                                            </div>
                                        </h3>
                                        <span className="">{text2Html(node.text)}</span>
                                        <section className="EDfFK ygqzn">
                                            <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                                                <time className="FH9sR Nzb55" dateTime={date_cmmnt.toJSON()} title={date_cmmnt.toString()}>
                                                    <span className="sqdOP yWX7d _8A5w5">{getDeffDates(date_cmmnt)}</span>
                                                </time>
                                            </div>
                                            <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                                                {node.edge_liked_by.count > 0 && <span style={{ display: "flex", flexDirection: "row" }} className="FH9sR">
                                                    <SVGheart />
                                                &nbsp;<span className="sqdOP yWX7d _8A5w5">{node.edge_liked_by.count}</span>
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
                    <SVGminiheart />
                &nbsp;&nbsp;<span className="sqdOP yWX7d _8A5w5">{beautify_numbers(this.props.count_likes)}</span>
                </div>
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <SVGcmnt />
                &nbsp;&nbsp;<span className="sqdOP yWX7d _8A5w5">{this.props.count_comments}</span>
                </div>
            </section>
            <section className="EDfFK ygqzn">
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <SVGFindpeople />
                    <a href={"/p/" + this.props.shortcode} onClick={this.handleClick} className="c-Yi7">
                        <time className="FH9sR Nzb55" dateTime={date_pub.toJSON()} title={date_pub.toLocaleDateString()}>
                            <span className="sqdOP yWX7d _8A5w5">&nbsp;&nbsp;{getDeffDates(date_pub)}</span>
                        </time>
                    </a>
                </div>
                <div className="Igw0E IwRSHeGOV_ ybXk5 vwCYk">
                    <SVGshare />
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
    componentWillUnmount() {
        this.props.unsetPostData();
    }
    componentDidMount() {
        let { shortcode } = this.props.match.params;
        this.props.fetchDataPost(shortcode);
        console.log(this.props);
        console.log(shortcode);
    }
    render() {
        console.log(this.props);
        const post = this.props.post;
        let objectFilter = Object.values(post)
            .filter(u => typeof (u) !== "function");
        if (objectFilter.length !== 0) {
            let localization = post.location;
            let owner = post.owner;
            let edges_comments = post.edge_media_to_parent_comment.edges;
            var taken_at_timestamp = post.taken_at_timestamp;
            var date_pub = new Date(taken_at_timestamp * 1000);
            var __typename = post.__typename;
            var is_video = post.is_video;
            var shortcode = post.shortcode;
            var captions = post.edge_media_to_caption.edges;
            var count_likes = post.edge_media_preview_like.count;
            var count_comments = post.edge_media_preview_comment.count;console.log(edges_comments);
            var caption = captions.length !== 0 ? captions[0].node.text : "";
            let video_url = post.video_url;
            var tagged_users = post.edge_media_to_tagged_user.edges.map(item => {
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
                                                    <img src={post.display_url} alt={post.accessibility_caption} width={"100%"} height={"auto"} /> :
                                                    <video controls={true} width={"100%"} onLoadStart={e => e.target.volume = 0.5} >
                                                        <source src={video_url} type="video/mp4"></source>
                                                    </video>
                                            )
                                                : (
                                                    <PostSlider {...post.edge_sidecar_to_children.edges} />
                                                )
                                        }
                                        {tagged_users}
                                    </div>

                                    {
                                        tagged_users.length > 0 && <div onClick={(e) => { }} className="G_hoz LcKDX _6JfJs">
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

const mapStateToProps = state => ({ post: state.post })

const mapDispatchToProps = (dispatch) => ({
    unsetPostData: () => dispatch(fetchPost({})),
    fetchDataPost: (shortcode) => {
        fetch(`/p/${shortcode}`)
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
const PostConnected = connect(mapStateToProps, mapDispatchToProps)(ModalContent);
const PostConnectedWithRouter = withRouter(PostConnected);
export default PostConnectedWithRouter;
