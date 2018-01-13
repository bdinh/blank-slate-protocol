import React, { Component } from 'react';
import '../include/bootstrap';

export default class NavBar extends Component  {
    render()  {

        return(
            <div id="nav">
                <nav className="navbar navbar-expand-md fixed-top navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <a className="navbar-brand" href="#">(App Name Here)</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <button className="btn login-button" type="button">
                                    Login
                                </button>
                                {/*<a className="nav-link" href="#">Login<span className="sr-only">(current)</span></a>*/}
                            </li>
                            <li className="nav-item">
                                <button className="btn signup-button" type="button">
                                    Sign Up
                                </button>
                                {/*<a className="nav-link" href="#">Features</a>*/}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>);
    }
}
