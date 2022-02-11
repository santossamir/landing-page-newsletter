import React, {Component} from "react";
import Header from "./AppHeader";
import Body from "./AppBody";
import Footer from "./AppFooter"
import "./AppStyle.css";


export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}