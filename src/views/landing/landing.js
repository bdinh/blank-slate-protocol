import React, { Component } from 'react';
import NavBar from './../../components/navbar'
import Footer from './../../components/footer';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return(
            <div>
                <NavBar/>
                <div>
                    Ani fill in content here
                </div>
                <Footer/>
            </div>
        )
    }


}