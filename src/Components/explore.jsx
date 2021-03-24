import React, { Component } from 'react';

class Explore extends Component {
    render() {
        return (
        <h2 className="yQ0j1" >
            <div class="Saeqz">Meilleures publications</div><br />
            <br/><br/>Plus récentes<br/>
        </h2>
        
        );
    }
}
export const DownloadAllButton = ()=>{
    return (
        <button name="download">
            <i class="fa fa-download"></i>Download All
        </button>
    );
}


export default Explore