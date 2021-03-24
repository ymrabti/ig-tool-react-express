import React, { Component } from 'react';
import { setVisiMP } from "../actions/Index";
import Head from "./head";
import Bar from "./bar";
import Pubs from "./Pubs";
import ModalContent from "./Post";
import { connect } from 'react-redux';
import MyNavbar from "./navbar";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.props.togglePostModal(false);
    }
    
    render() {
        let showPost = {display: this.props.showPost ? "block" : "none"};
        return <section className="_9eogI E3X2T">
            <main className="SCxLW  o64aR" role="main">
                <div id="ModalPost" className="modal" style={showPost}>
                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal} >×</span>
                        <ModalContent />
                    </div>
                </div>
                <div id="ModalDownload" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={this.closeModal} >×</span>
                        <span id="currentFile">Starting ...</span><br />
                        <div className="w3-container">
                            <div className="w3-light-grey w3-round-xlarge">
                                <div id="progressBar" className="w3-container w3-blue w3-round-xlarge" style={{ width: "0%" }}>0%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
                <div className="v9tJq AAaSh VfzDr" id="divtoreplace">
                    <Head />
                    <Bar />
                    <Pubs />
                </div>
            </main>
            <MyNavbar />
        </section>
    }
}
const mapStateToProps = state => ({
    showPost: state.displayPostModal
})

const mapDispatchToProps = dispatch => ({
    togglePostModal: (disp) => dispatch(setVisiMP(disp))
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);