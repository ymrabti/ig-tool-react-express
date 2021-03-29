import ReactHtmlParser from "react-html-parser";
import "./css/wait.css";

export const sound = "M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z";
export const muted = "M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z";

export const listNames = { closeModal: "closeModal", switchSound: "switchSound", switchPlay:"switchPlay"}

export const Waiting = () => (<div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        </path>
    </svg>
</div>)

export function getDeffDates(date) {
    var diff = (new Date() - date) / 1000;
    var mults = [{ multiple: 60, unit: "minutes" }, { multiple: 3_600, unit: "hours" }, { multiple: 86_400, unit: "days" }, { multiple: 604_800, unit: "weeks" }, { multiple: 2_419_200, unit: "months" }, { multiple: 29_030_400, unit: "years" }];
    let differenceTxt = diff < 60 ? "Now" : "";
    var i = 0;
    while (i <= mults.length - 1 && diff / mults[i].multiple > 1) {
        differenceTxt = Math.floor(diff / mults[i].multiple) + " " + mults[i].unit;
        i++;
    }
    return differenceTxt;
}
export function beautify_numbers(number) {
    const list = number.toString().split('').reverse();
    const reducer= (a, b, i)=> i%3!==0||i===0?b+a:b+` ${a}`;
    return list.reduce(reducer, "");
}
// Input : 12345678910
// Output: "12 345 678 910"

export const icons = {
    GraphSidecar: "Carousel",
    GraphVideo: "Video", 
    igtv: "Igtv",
    clips:"reel" 
};
const tags = {hashtag:"hashtag",username:"username",mail:"mail"};

export function size_plain(number) {
    var tags = ["T","B","m","k"];
    var i = tags.length; var div = 1000;
    while (number >= div && i >= 0) {
        number = number / div; i -= 1;
    }
    const fix = i===tags.length-1 ? 0:2;
    return i===-1?number*(1000**(tags.length+1))
        :i<tags.length ? `${number.toFixed(fix)} ${tags[i]}`
        :number;
}
function link_(item, tag) {
    let path = "";
    switch (tag) {
        case tags.hashtag:
            path= `/explore/tags/${item.substring(1)}`;
            break;
        case tags.username:
            path= `/${item.substring(1)}`;
            break;
        default:
            path= `mailto:${item}`;
            break;
    }
    return `<a class="notranslate" href="${path}" tabIndex="0">${item}</a>`
}
export function text2Html(text) {
    const hg = /#[\u0600-\u06FFa-zA-Z0-9\-_.]{1,}/gi;
    const us = /@[\u0600-\u06FFa-zA-Z0-9\-_.]{1,}/gi;
    const m_ai = /[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9._-]{1,}\.[a-zA-Z0-9._-]{2,3}/gi;
    const htmltext = text.replaceAll(m_ai, item => link_(item))
        .replaceAll(hg, item => link_(item, tags.hashtag))
        .replaceAll(us, item => link_(item, tags.username))
        .replaceAll(/\n/gi, "<br>");
    return ReactHtmlParser(htmltext);
}

var vdefault = "Im default";
export default vdefault;


export const WaitingPost = (
    <>
        <div className="zZYga" role="dialog">
            <div className="PdwC2 fXiEu " role="dialog" style={{ width:"75",maxWidth: "673px" }}>
                <div className="jdnLC" style={{ width:"75",maxWidth: "673px" }}>
                    <div className="bCRRR">
                        <div className="HaS-3" style={{ paddingBottom: "177.778%" }}>
                        </div>
                    </div>
                    <div className="c0Dmy">
                        <div className="JrZbN">
                            <div className="VcOAj">
                            </div>
                            <div className="eURnM">
                                <div className="qfAOE">
                                </div>
                                <div className="kAlZ6">
                                </div>
                            </div>
                        </div>
                        <div className="XvoX1">
                            <div className="HE3mO">
                            </div>
                            <div className="EIuhb">
                            </div>
                            <div className="RdURl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="EfHg9">
            <div className="nf1Jg ">
                {/* <div className="DdSX2">
                    <a className="ITLxV  coreSpriteLeftPaginationArrow " tabindex="0">Précédent</a>
                    <a className=" _65Bje  coreSpriteRightPaginationArrow" tabindex="0">Suivant</a>
                </div> */}
            </div>
        </div>
    </>
)