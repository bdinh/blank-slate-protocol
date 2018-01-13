import React, { Component } from 'react';

//Standard footer component I use for my applications
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container footer">
                    <p>Fill in content later </p>
                    <p className="footer-text">Made with &hearts; for Winfo 2018 Hackathon </p>
                </div>
            </footer>
        );
    }
}