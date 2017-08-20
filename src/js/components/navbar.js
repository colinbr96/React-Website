import React from 'react';

export default function NavBar(props) {
    let page_anchors = [];

    if(!!props.pageAnchors) {
        for(let i = 0; i < props.pageAnchors.length; i++) {
            let liClass = "nav-item" + (props.activeAnchor === props.pageAnchors[i].props.to ? " active" : "");
            console.log(liClass);
            page_anchors.push(
                <li className={liClass} key={i}>
                    {props.pageAnchors[i]}
                </li>
            );
        }
    }

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        {/*Hamburger Menu*/}
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand">Colin Brown</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="active"><a>Profile</a></li>
                        <li><a>Portfolio</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {page_anchors}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
