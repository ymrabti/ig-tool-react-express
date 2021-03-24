import { Component } from "react";
import { connect } from "react-redux"

class Pdp extends Component {
    handleClick(target) {
        target.preventDefault();
        console.log("Im clicked");
    }
    render() {
        return <center>
            <img style={{ borderRadius: "10px", width: "100%", maxWidth: "320px" }} alt={this.props.username} decoding="auto" src={this.props.profile_pic_url_hd} />
            <br />
            <button name="download" onClick={this.handleClick}>
                <i className="fa fa-download"></i>Download All
        </button>
        </center>
    }
}

const mapStateToPropsPdp = state => ({
    profile_pic_url_hd: state.user.profile_pic_url_hd,
    username: state.user.username
})

const mapDispatchToPropsPdp = dispatch => ({
    toggleTodo: () => console.log("mapDispatchToPropsPdp")
})
export default connect(
    mapStateToPropsPdp,
    mapDispatchToPropsPdp
)(Pdp)