import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';

export default class LoginView extends Component {
    constructor(props) {
        super(props)

    }

    handleEventTemp() {

        console.log("hi")
    }

    render() {
        return (
            <div className="container form-container col-6 offset-3">
                <div className="form-group">
                    <label  className="form-labels" htmlFor="loginEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group form-group-spacing">
                    <label className="form-labels" htmlFor="loginPassword">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder="Password"
                        onChange={this.handleEventTemp}

                    />
                </div>
                <div className="new-account-text-container">
                    <p className="new-account-text">Don't have an account? </p>
                </div>
                <div className="form-group-spacing">
                    <button
                        className="btn btn-primary login-button"
                        onClick={this.handleEventTemp}>
                        Login
                    </button>
                </div>
            </div>
        );

    }


}