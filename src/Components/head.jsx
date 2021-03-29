import React, { Component } from "react";
import { text2Html, size_plain, beautify_numbers } from "../tools";
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
                    <div className="_2dbep" role="link" style={{ width: "150px", height: "150px" }}>
                        <img alt={this.props.full_name} className="_6q-tv" data-testid="user-avatar" draggable="false" src={this.props.profile_pic_url} />
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
                    <a className="yLUwa" href={this.props.external_url} target="_blank" rel="noreferrer">{this.props.external_url}</a>
                </div>
            </section>
        </header>
    }
}



export default Head;