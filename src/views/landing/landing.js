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
            <div>
                <div>
                    <NavBar/>
                </div>
                <div class = "landing">
                    <div id = "mission">
                        <p>Mission Statement</p>
                    </div>
                    <div id = "for">

                        <div id = "tech_description">
                            <p>For tech professionals:</p>
                            <p>blah blah blah blah </p>
                        </div>

                        <div id = "recruiter_description">
                            <p>For recruiters:</p>
                            <p>blah blah blah blah </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }


}