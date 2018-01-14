import React, { Component } from 'react';
import NavBar from './../../components/navbar'
import Footer from './../../components/footer';
import './landing.css'

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return(
            <div id = "parent">
                <div>
                    <NavBar/>
                </div>
                <div class = "landing">
                    <div id = "mission">
                        <p>"It's what is on the inside that matters."
                            <br/> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-Someone probably
                        </p>
                    </div>
                    <div id = "stakeholders">

                        <div id = "tech_description">
                            <h2>Looking for a job?</h2>
                            <p> Mask your identity to prevent any bias in the hiring process</p>
                            <br/>
                            <div id = "applicant_button"  class = "signup_button"></div>
                        </div>

                        <div id = "recruiter_description">
                            <h2>Looking to hire someone?</h2>
                            <p> Ensure a completely unbiased hiring process</p>
                            <br/>
                            <div id = "recruiter_button" class = "signup_button"></div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }


}