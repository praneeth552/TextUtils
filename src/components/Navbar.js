import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch mx-5 text-${props.mode === 'light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
export default Navbar
