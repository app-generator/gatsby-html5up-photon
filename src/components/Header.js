import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>
                        GatsbyJS Html5Up
                    </h1>
                    <p>
                        <a href="https://github.com/app-generator/gatsby-html5up-photon">Open-Source</a> app with Photon design
                    </p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
