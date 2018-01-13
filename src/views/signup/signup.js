import React, { Component } from 'react';
import { bindAll } from 'lodash'
import Toggle from 'react-toggle';
import './signup.css';

export default class SignUpView extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            organization: true
        };
        bindAll(this, [
            'checkToggle'
        ]);
    }



    handleEventTemp() {

    }

    checkToggle(event) {
        console.log(event.target.checked);
        this.setState({
            organization: event.target.checked
        })
    }


    render() {


        return (
            <div className="container form-container col-6 offset-3">
                <div className="form-group">
                    <label
                        className="form-labels"
                        htmlFor="createDisplayName">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="createDisplayName"
                        aria-describedby="displayNameHelp"
                        placeholder="Enter Display Name"
                    />
                </div>
                <div className="form-group">
                    <label
                        className="form-labels"
                        htmlFor="createDisplayName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="createDisplayName"
                        aria-describedby="displayNameHelp"
                        placeholder="Enter Display Name"
                    />
                </div>
                <div className="form-group">
                    <label className="form-labels" htmlFor="createEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="createEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label
                        className="form-labels"
                        htmlFor="createPassword">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="createPassword"
                        placeholder="Password"
                        onChange={this.handleEventTemp}
                    />
                </div>
                <div className="form-group">
                    <div className="toggle-button-container">
                        <label>
                            <Toggle
                                defaultChecked={true}
                                // icons={{
                                //     // checked: "Public",
                                //     // unchecked: "Private",
                                // }}
                                icons={false}
                                value="public"
                                onChange={this.checkToggle} />
                            <div className="toggle-label-container">
                                <p className="toggle-label">
                                    {this.state.organization ? "I'm looking to hire"
                                        : "I'm looking to get hired"
                                    }
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
                {
                    this.state.organization ? (
                        <div className="form-group">
                            <label
                                className="form-labels"
                                htmlFor="createOrganizationName">
                                Organization
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="createOrganizationName"
                                aria-describedby="organizationNameHelp"
                                placeholder="Organization"
                            />
                        </div>
                    ) : ("")
                }

                <div className="form-group-spacing">
                    <button
                        className="btn btn-primary signup-button"
                        onClick={this.handleEventTemp}
                    >Create Account</button>
                </div>
            </div>
        )
    }


}