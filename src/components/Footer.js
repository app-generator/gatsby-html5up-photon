import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://github.com/app-generator/gatsby-html5up-photon" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://twitter/webappseed" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; AppSeed</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
