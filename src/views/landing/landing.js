import React, { Component } from 'react';
import NavBar from './../../components/navbar'
import Footer from './../../components/footer';

export default class LandingView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <NavBar/>
                <Footer/>
            </div>
        )
    }


}