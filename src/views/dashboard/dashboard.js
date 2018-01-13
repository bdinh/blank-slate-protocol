import React, { Component } from 'react';
import NavBar from './../../components/navbar'
import Footer from './../../components/footer';
import './dashboard.css'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return(
            <div id = "parent">
                <div>
                    <NavBar/>
                </div>
                <div id = "dashboard">
                {/*<div class = "landing">*/}
                    <h3 id = "recenth">Recent activity</h3>
                    <div id = "recent">
                        <div id = "picture">
                            <p>Placeholder for picture of activity</p>
                        </div>
                        <div id = "button">
                            <p>Placeholder for button</p>
                        </div>
                    </div>
                    <h3> Resume Stack Info </h3>
                    <div id = "below">
                        <div id = "stack">
                        </div>
                        <div id = "available">
                            <h3>Available Positions For My Company:</h3>
                        </div>
                    </div>
                </div>
                <div id = "right">
                    <h3>Interview appointments</h3>
                </div>



                {/*</div>*/}
                <Footer/>
            </div>
        )
    }

}

