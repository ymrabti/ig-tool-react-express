import { Component } from "react";
import { updateUsername, setStateProfile } from "../actions/Index";
import { connect } from "react-redux";

const SvgPaste = () => {
    return (
        <svg className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 2h-4.2C14.4.8 13.3 0 12 0c-1.3 0-2.4.8-2.8 2H5C4 2 3 3 3 4v16c0 1 1 2 2 2h14c1 0 2-1 2-2V4c0-1-1-2-2-2zm-7 0c.6 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm7 18H5V4h2v3h10V4h2v16z">
            </path>
        </svg>
    );
}

const SvgClearText = () => {
    return (
        <svg aria-label="Enregistrer" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
            </path>
        </svg>
    );
}

const SvgIg = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 50 50" style={{ fill: "#262626" }}>
            <path d="M25 1c-6.52 0-7.34.03-9.9.14-2.55.12-4.3.53-5.82 1.12a11.76 11.76 0 0 0-4.25 2.77 11.76 11.76 0 0 0-2.77 4.25c-.6 1.52-1 3.27-1.12 5.82C1.03 17.66 1 18.48 1 25c0 6.5.03 7.33.14 9.88.12 2.56.53 4.3 1.12 5.83a11.76 11.76 0 0 0 2.77 4.25 11.76 11.76 0 0 0 4.25 2.77c1.52.59 3.27 1 5.82 1.11 2.56.12 3.38.14 9.9.14 6.5 0 7.33-.02 9.88-.14 2.56-.12 4.3-.52 5.83-1.11a11.76 11.76 0 0 0 4.25-2.77 11.76 11.76 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.83.12-2.55.14-3.37.14-9.89 0-6.51-.02-7.33-.14-9.89-.12-2.55-.52-4.3-1.11-5.82a11.76 11.76 0 0 0-2.77-4.25 11.76 11.76 0 0 0-4.25-2.77c-1.53-.6-3.27-1-5.83-1.12A170.2 170.2 0 0 0 25 1zm0 4.32c6.4 0 7.16.03 9.69.14 2.34.11 3.6.5 4.45.83 1.12.43 1.92.95 2.76 1.8a7.43 7.43 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.12 2.53.14 3.29.14 9.7 0 6.4-.02 7.16-.14 9.69-.1 2.34-.5 3.6-.82 4.45a7.43 7.43 0 0 1-1.8 2.76 7.43 7.43 0 0 1-2.76 1.8c-.84.32-2.11.72-4.45.82-2.53.12-3.3.14-9.7.14-6.4 0-7.16-.02-9.7-.14-2.33-.1-3.6-.5-4.45-.82a7.43 7.43 0 0 1-2.76-1.8 7.43 7.43 0 0 1-1.8-2.76c-.32-.84-.71-2.11-.82-4.45a166.5 166.5 0 0 1-.14-9.7c0-6.4.03-7.16.14-9.7.11-2.33.5-3.6.83-4.45a7.43 7.43 0 0 1 1.8-2.76 7.43 7.43 0 0 1 2.75-1.8c.85-.32 2.12-.71 4.46-.82 2.53-.11 3.29-.14 9.7-.14zm0 7.35a12.32 12.32 0 1 0 0 24.64 12.32 12.32 0 0 0 0-24.64zM25 33a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.68-20.8a2.88 2.88 0 1 0-5.76 0 2.88 2.88 0 0 0 5.76 0z">
            </path>
        </svg>
    );
}



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