import "../css/wait.css";

export const Waiting = () => (<div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        </path>
    </svg>
</div>)
export const SvgPaste = () => {
    return (
        <svg className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 2h-4.2C14.4.8 13.3 0 12 0c-1.3 0-2.4.8-2.8 2H5C4 2 3 3 3 4v16c0 1 1 2 2 2h14c1 0 2-1 2-2V4c0-1-1-2-2-2zm-7 0c.6 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm7 18H5V4h2v3h10V4h2v16z">
            </path>
        </svg>
    );
}

export const WaitingPost = (
    <>
        <div className="zZYga" role="dialog">
            <div className="PdwC2 fXiEu " role="dialog" style={{ width: "75", maxWidth: "673px" }}>
                <div className="jdnLC" style={{ width: "75", maxWidth: "673px" }}>
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
export const SvgClearText = () => {
    return (
        <svg aria-label="Enregistrer" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
            </path>
        </svg>
    );
}

export const SVGheart = () => {
    return (
        <svg aria-label="J’aime" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
            </path>
        </svg>
    );
}
export const SVGminiheart = () => {
    return (
        <svg aria-label="J’aime" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
            </path>
        </svg>
    );
}

export const SvgIg = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 50 50" style={{ fill: "#262626" }}>
            <path d="M25 1c-6.52 0-7.34.03-9.9.14-2.55.12-4.3.53-5.82 1.12a11.76 11.76 0 0 0-4.25 2.77 11.76 11.76 0 0 0-2.77 4.25c-.6 1.52-1 3.27-1.12 5.82C1.03 17.66 1 18.48 1 25c0 6.5.03 7.33.14 9.88.12 2.56.53 4.3 1.12 5.83a11.76 11.76 0 0 0 2.77 4.25 11.76 11.76 0 0 0 4.25 2.77c1.52.59 3.27 1 5.82 1.11 2.56.12 3.38.14 9.9.14 6.5 0 7.33-.02 9.88-.14 2.56-.12 4.3-.52 5.83-1.11a11.76 11.76 0 0 0 4.25-2.77 11.76 11.76 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.83.12-2.55.14-3.37.14-9.89 0-6.51-.02-7.33-.14-9.89-.12-2.55-.52-4.3-1.11-5.82a11.76 11.76 0 0 0-2.77-4.25 11.76 11.76 0 0 0-4.25-2.77c-1.53-.6-3.27-1-5.83-1.12A170.2 170.2 0 0 0 25 1zm0 4.32c6.4 0 7.16.03 9.69.14 2.34.11 3.6.5 4.45.83 1.12.43 1.92.95 2.76 1.8a7.43 7.43 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.12 2.53.14 3.29.14 9.7 0 6.4-.02 7.16-.14 9.69-.1 2.34-.5 3.6-.82 4.45a7.43 7.43 0 0 1-1.8 2.76 7.43 7.43 0 0 1-2.76 1.8c-.84.32-2.11.72-4.45.82-2.53.12-3.3.14-9.7.14-6.4 0-7.16-.02-9.7-.14-2.33-.1-3.6-.5-4.45-.82a7.43 7.43 0 0 1-2.76-1.8 7.43 7.43 0 0 1-1.8-2.76c-.32-.84-.71-2.11-.82-4.45a166.5 166.5 0 0 1-.14-9.7c0-6.4.03-7.16.14-9.7.11-2.33.5-3.6.83-4.45a7.43 7.43 0 0 1 1.8-2.76 7.43 7.43 0 0 1 2.75-1.8c.85-.32 2.12-.71 4.46-.82 2.53-.11 3.29-.14 9.7-.14zm0 7.35a12.32 12.32 0 1 0 0 24.64 12.32 12.32 0 0 0 0-24.64zM25 33a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.68-20.8a2.88 2.88 0 1 0-5.76 0 2.88 2.88 0 0 0 5.76 0z">
            </path>
        </svg>
    );
}

export const SVGcmnt = () => {
    return (
        <svg aria-label="Commenter" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
            <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd">
            </path>
        </svg>
    );
}

export const SVGFindpeople = () => {
    return (
        <svg aria-label="Trouver des personnes" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
            <path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd">
            </path>
        </svg>
    );
}

export const SVGshare = () => {
    return (
        <svg aria-label="Partager la publication" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
            </path>
        </svg>
    );
}


export const SVGplay = () => {
    return (
        <svg aria-label="Icône du nombre de vues" className="_8-yf5 " fill="#ffffff" stroke="black" height="16" viewBox="0 0 48 48" width="16">
            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z">
            </path>
        </svg>
    );
}

// export const SVGheartfilled = () => {
//     return (
//         <svg aria-label="Je n’aime plus" className="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" stroke="black" width="16">
//             <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
//             </path>
//         </svg>
//     );
// }

export const waitaminute = <svg
    aria-label="Chargement..."
    style={{ height: "320px", width: "320px" }}
    className="By4nA"
    viewBox="0 0 100 100"
>
    <rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47">
    </rect>
    <rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47">
    </rect>
</svg>

export const pathtagged = "M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
export const pathigtv = "M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
export const pathreels = "M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z";


export const pathspubs = "M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"

export const pathsguides = <><path d="M24 48h-.3L1.2 43c-.7-.2-1.2-.8-1.2-1.5v-40C0 1 .2.6.6.3s.8-.4 1.2-.3l22.5 5c.7.2 1.2.8 1.2 1.5v40c0 .5-.2.9-.6 1.2-.2.2-.6.3-.9.3zM3 40.3l19.5 4.3V7.7L3 3.4v36.9z"></path><path d="M24 48c-.3 0-.7-.1-.9-.3-.4-.3-.6-.7-.6-1.2v-40c0-.7.5-1.3 1.2-1.5l22.5-5c.4-.1.9 0 1.3.3.3.3.5.7.5 1.2v40c0 .7-.5 1.3-1.2 1.5l-22.5 5H24zm1.5-40.3v36.9L45 40.3V3.4L25.5 7.7z"></path><path d="M30.5 38.8c-.7 0-1.3-.5-1.5-1.2-.2-.8.3-1.6 1.1-1.8l9.5-2.1c.8-.2 1.6.3 1.8 1.1.2.8-.3 1.6-1.1 1.8l-9.5 2.1c-.1.1-.2.1-.3.1zm-13 0h-.3l-9.5-2.1c-.8-.2-1.3-1-1.1-1.8.2-.8 1-1.3 1.8-1.1l9.5 2.1c.8.2 1.3 1 1.1 1.8-.2.6-.8 1.1-1.5 1.1zm0-14h-.3l-9.5-2.1c-.7-.2-1.2-.8-1.2-1.5V10.7c0-.5.2-.9.6-1.2.4-.3.8-.4 1.3-.3l9.5 2.1c.7.2 1.2.8 1.2 1.5v10.5c0 .5-.2.9-.6 1.2-.3.2-.7.3-1 .3zm-8-4.8l6.5 1.4V14l-6.5-1.4V20zm21 4.8c-.3 0-.7-.1-.9-.3-.4-.3-.6-.7-.6-1.2V12.8c0-.7.5-1.3 1.2-1.5l9.5-2.1c.4-.1.9 0 1.3.3s.6.7.6 1.2v10.5c0 .7-.5 1.3-1.2 1.5l-9.5 2.1h-.4zM32 14v7.4l6.5-1.4v-7.4L32 14zm8 7.2zm-9.5 11.6c-.7 0-1.3-.5-1.5-1.2-.2-.8.3-1.6 1.1-1.8l9.5-2.1c.8-.2 1.6.3 1.8 1.1s-.3 1.6-1.1 1.8l-9.5 2.1c-.1.1-.2.1-.3.1z"></path></>

export const sound = "M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z";
export const muted = "M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z";