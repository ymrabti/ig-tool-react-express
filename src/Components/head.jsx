import React, { Component } from "react";
import { connect } from 'react-redux';
import { text2Html, size_plain } from "../tools";

class Head extends Component {
    // constructor(props) {
    //     super(props);
    // }
    shouldComponentUpdate(after) {
        // console.log(this.props);
        // console.log(after);
        return true;
    }
    clickHandler = () => {
        this.props.changeDispModalPost();
    }
    render() {
        const verified = <div className="Igw0E IwRSH eGOV_ _4EzTm soMvl">
            <span className="mTLOB Szr5J coreSpriteVerifiedBadge" title="Verified">Verified</span>
        </div>;
        return <header id="HeadSwitch" className="vtbgv" style={{display:"flex",marginTop:"1em"}}>
            <div className="XjzKX">
                <div className="RR-M- " aria-disabled="true" role="button" data-ext-skip="1">
                    <div className="_2dbep" role="link" style={{ width: "150px", height: "150px" }}>
                        <img onClick={this.clickHandler.bind(this)} alt={this.props.full_name} className="_6q-tv" data-testid="user-avatar" draggable="false" src={this.props.profile_pic_url} />
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
                                {this.props.edge_owner_to_timeline_media}
                            </span>
                            <span> Publications</span>
                            <br />
                        </span>
                    </li>
                    <li className="Y8-fY">
                        <span className="-nal3">
                            <span className="g47SY">
                                {size_plain(this.props.edge_followed_by)}
                            </span>
                            <span> Followers</span>
                            <br />
                        </span>
                    </li>
                    <li className="Y8-fY">
                        <span className="-nal3">
                            <span className="g47SY">
                                {this.props.edge_follow}
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
const mapStateToProps = state => {
    return {
        username: state.user.username,
        full_name: state.user.full_name,
        profile_pic_url: state.user.profile_pic_url,
        edge_owner_to_timeline_media: state.user.edge_owner_to_timeline_media.count,
        edge_followed_by: state.user.edge_followed_by.count,
        edge_follow: state.user.edge_follow.count,
        biography: state.user.biography,
        external_url: state.user.external_url,
        is_verified: state.user.is_verified,
        category_name: state.user.category_name,
        showPost: state.displayPostModal
    };
}

// const changeDispModalPost = () => { return { type: "SHOW_MODAL_POST" }; }

const mapDispatchToProps = (dispatch) => {
    return {
        changeDispModalPost: () => dispatch({ type: 'SHOW_MODAL_POST' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head);