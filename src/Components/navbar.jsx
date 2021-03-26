import { Component } from "react";
import { updateUsername, setStateProfile } from "../actions/Index";
import { connect } from "react-redux";
import { SvgClearText,SvgIg,SvgPaste } from "./svgs";


class MyNavbar extends Component {
    Cleartext() {
        this.props.updateUsername("");
    }
    Paste(e) {
        const clipboard2 = window.Clipboard;
        if (clipboard2) {
            clipboard2.prototype.readText()
                .then(text => console.log(text))
                .catch(e => alert("clipboard window"))
        } 
        else if (Navigator.prototype.clipboard) {
                Navigator.prototype.clipboard.readText()
                .then(text => console.log(text))
                .catch(e => alert(e))
        } 
        else {
            var data = window.ClipboardEvent.prototype.clipboardData.getData("text");
            console.log(data);
            console.log(Navigator.prototype.userAgent);
        }
        try{window.Geolocation.prototype.getCurrentPosition((position)=>console.log(position),(error)=>console.log(error));}
        catch(er){console.log(er);}
    }
    handleChange(e) {
        this.props.updateUsername(e.target.value);
    }
    getProfile() {
        this.props.getProfile(this.props.username);
    }

    render() {
        return (
            <nav className="NXc7H jLuN9">
                <div className="_8MQSO Cx7Bp">
                    <div className="_lz6s aUCRo Hz2lF">
                        <div className="MWDvN buoMu nfCOa">
                            <div className="ctQZg">
                                <div className="_47KiJ">
                                    <div className="Fifk5">
                                        <div className="">
                                            <input className="XTCLo x3qfX" placeholder="type username ..." type="text" id="url" name="input" defaultValue={this.props.username} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
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
                                    <button type="submit" id="GoAction" onClick={this.getProfile.bind(this)} style={{ cursor: "pointer", backgroundColor: "transparent", border: "0px" }}>
                                        <SvgIg />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
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