require("./main.scss");

import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import ContactsPage from "./Components/ContactsPage.js";
import ContactsDetailsPage from "./Components/ContactInfo.js";
import {contacts} from "./data/contacts.js";

"use strict";
let state = {};

window.addEventListener("hashchange", ()=>setState({location: location.hash}));

function setState(changes){
      
    state = Object.assign({}, state, changes);
    
    let item;
    let location = state.location.replace(/^#\/?|\/$/g, "").split("/");
    
    if (location[0] === "contact" ){
        item = state.items.find(item => item.id == location[1]);
    }
    
    const rootElement = (
        <div>
            <Header title="Contacts List"/>
            <ContactsPage items = {state.items} />
            <ContactsDetailsPage item = {item}/>
            <Footer title="Copyright of John Desjardins" info="all contacts provided by Joel Lord"/>
        </div>
    ); 
    
    const app = document.getElementById("react-app");
    ReactDOM.render(rootElement, app);
}

//setting the initial state
setState({
    items: contacts,
    location: location.hash
});