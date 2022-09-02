import React from 'react';
import WalletData from "../web3"
const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">ESTEBAN W. VILCA ZUÑIGA</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <WalletData className="wallet"></WalletData>
                    <li key={1} className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li key={2} className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li key={3} className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li key={4} className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li key={5} className="nav-item"><a className="nav-link js-scroll-trigger" href="#languages">Languages</a></li>
                    <li key={6} className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li key={7} className="nav-item"><a className="nav-link js-scroll-trigger" href="#research">Research</a></li>
                    <li key={8} className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Sidebar