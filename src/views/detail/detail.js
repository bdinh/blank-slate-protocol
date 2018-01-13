import React, { Component } from 'react';
import NavBar from './../../components/navbar'
import Footer from './../../components/footer';
import './detail.css'

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return(
            <div id = "parent">
                <div>
                    <NavBar/>
                </div>
                <div id = "information">
                    <h4> About Person </h4>
                </div>
                <div id = "profile">
                    <h4>Profile</h4>
                </div>

                <div id = "decision">
                    <div id = "green" class = "decision-button"/>
                    <div id = "yellow" class = "decision-button"/>
                    <div id = "red" class = "decision-button"/>
                </div>

                <Footer/>
            </div>
        )
    }

}
