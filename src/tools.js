import ReactHtmlParser from "react-html-parser";

export const listNames = { closeModal: "closeModal", switchSound: "switchSound", switchPlay:"switchPlay"}



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
    // const fix = i===tags.length-1 ? 1:2;
    return i===-1?number*(1000**(tags.length+1))
        : i < tags.length ? `${number.toFixed(tags.length - i)} ${tags[i]}`
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
    return `<a class="notranslate" href="${path}">${item}</a>`
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
export function toHHMMSS(sec_num) {
    sec_num = sec_num.toFixed();
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
}
export function frenshDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var opt_weekday = { weekday: 'long' };
    var weekday = toTitleCase(date.toLocaleDateString("fr-FR", opt_weekday));
    return weekday + ", " + date.toLocaleDateString("fr-FR", options);
}
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
var vdefault = "Im default";
export default vdefault;

