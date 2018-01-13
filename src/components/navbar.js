import React, { Component } from 'react';
import '../include/bootstrap';

export class NavBar extends Component  {
    render()  {

        return(
            <div id="nav">
                    {/*<nav className="navbar navbar-toggleable-sm navbar-inverse fixed-top">*/}
                        {/*<button className="navbar-toggle navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                            {/*<span className="navbar-toggler-icon icon-bar"/>*/}
                        {/*</button>*/}
                        {/*<div className="collapse navbar-collapse" id="navbarNav">*/}
                            {/*<ul className="navbar-nav ml-auto">*/}
                                {/*<li className="nav-item active">*/}
                                    {/*<div className="link-centered">*/}
                                            {/*<button className="btn login-button" type="button">*/}
                                                {/*Login*/}
                                            {/*</button>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                    {/*<div className="link-centered">*/}
                                            {/*<button className="btn signup-button" type="button">*/}
                                                {/*Sign Up*/}
                                            {/*</button>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</nav>*/}
                <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>);
    }
}

export default NavBar;
