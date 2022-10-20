import React from "react"

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navigation">
                        <li className="navi">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="navi">
                            <a className="nav-link" href="https://github.com/Yuji-Sakata0110/portfolio_20221020">
                                <img src="/images/github.png" className="navi-github" alt="" width="20px" height="20px" />
                                Source
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}