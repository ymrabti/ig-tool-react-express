import { Component } from "react";
import { updateUsername, setStateProfile } from "../actions/Index";
import { connect } from "react-redux";
import { SvgClearText, SvgIg, SvgPaste } from "./svgs";

class MyNavbar extends Component {
    Cleartext() {
        this.props.updateUsername("");
    }
    Paste(e) {
        const clipboard2 = window.Clipboard;
        if (clipboard2) {
            clipboard2.prototype.readText()
                .then(text => {/* console. log(text) */})
                .catch(e => alert("clipboard window"))
        }
        else if (Navigator.prototype.clipboard) {
            Navigator.prototype.clipboard.readText()
                .then(text => {/* console. log(text) */})
                .catch(e => alert(e))
        }
        else {
            // var data = window.ClipboardEvent.prototype.clipboardData.getData("text");
            // console. log(data);
            // console. log(Navigator.prototype.userAgent);
        }
        // try { window.Geolocation.prototype.getCurrentPosition((position) => console. log(position), (error) => console. log(error)); }
        // catch (er) {   }
    }
    handleChange(e) {
        this.props.updateUsername(e.target.value);
    }
    getProfile() {
        this.props.getProfile(this.props.username);
    }

    render() {
        return (
            <>
                <div
                    className="ctQZg"
                    style={
                        {
                            position: "fixed",
                            backgroundColor: "#EEEEEE",
                            width: "100%",
                            padding:"0.5%"
                        }
                    }
                >
                    <a href="/">Home</a>
                    <a href="/statistics/users" style={{marginLeft:"20px"}}>Top Users</a>
                    <a href="/statistics/posts" style={{marginLeft:"20px"}}>Top Posts</a>
                    <a href="/statistics/hashtags" style={{marginLeft:"20px"}}>Top Hashtags</a>
                    <a href="/statistics/locations" style={{marginLeft:"20px"}}>Top Locations</a>
                    <div className="_47KiJ">
                        <input
                            className=""
                            placeholder="type username ..."
                            type="text"
                            id="url"
                            name="input"
                            defaultValue={this.props.username}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="_47KiJ">
                        <p onClick={this.Cleartext.bind(this)} style={{ cursor: "pointer" }}>
                            <SvgClearText />
                        </p>
                        <div className="Fifk5"><div className=""></div></div>
                        <p onClick={this.Paste.bind(this)} style={{ cursor: "pointer" }}>
                            <SvgPaste />
                        </p>
                        <div className="Fifk5"><div className=""></div></div>
                        <button
                            type="submit"
                            id="GoAction"
                            onClick={this.getProfile.bind(this)}
                            style={
                                {
                                    cursor: "pointer",
                                    backgroundColor: "transparent",
                                    border: "0px"
                                }
                            }
                        >
                            <SvgIg />
                        </button>
                    </div>
                </div>
            </>

        );
    }
}
const mapStateToProps = state => ({ username: state.username })

const mapDispatchToProps = (dispatch) => {
    return {
        updateUsername: (username) => dispatch(updateUsername(username)),
        getProfile: (username) => {
            fetch(`/${username}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(setStateProfile(data.graphql.user));
                }).catch(e => {
                    alert(`User ${username} not found !`)
                });
        }
    }
}
export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MyNavbar);