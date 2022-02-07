import React, {Component} from "react";
import Header from "./AppHeader";
import Body from "./AppBody";


export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}