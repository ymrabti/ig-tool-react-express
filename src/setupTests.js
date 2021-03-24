<ul key={username_comment + " " + index} className="Mr508">
    <div role="button" className="ZyFrc" tabIndex="0">
        <li className="gElp9 rUo9f" role="menuitem">
            <div className="P9YgZ"></div>
        </li>
    </div>
</ul>

// https://drive.google.com/file/d/1usOA18_7UGWsndyr5tIQsCIq8N15-Qsp/view?usp=sharing

const myobj = {gameOver: Runner.prototype.gameOver}
Runner.prototype.gameOver = () => {}
setTimeout(() => {
    console.log("its time to save record!");
    Runner.prototype.gameOver = myobj.gameOver;
}, 15*60*1000);