import React, {Component} from "react";
import PropTypes from "prop-types";
import {getAge, dob, titleCase} from "../format.js";

export default class ContactsDetailsPage extends Component {
    
    render() {
        if(!this.props.item){
            return (
                <div className="details">
                    <p className="message">Select a Contact to View His/Her Details</p>
                </div>
            );
        } else {
            
            return(
                <div className="contact-details">
                    <h1 className="contact-name">{titleCase(this.props.item.name.first)} {titleCase(this.props.item.name.last)}</h1>
                    <div className="contact-photo"><img src={this.props.item.picture.large}></img></div>
                    <div className="contact-gender"><div><span>Gender:</span> {titleCase(this.props.item.gender)}</div>
                        <div className="contact-age"><span>DOB:</span> {dob(this.props.item.dob)}  <span>AGE:</span>  {getAge(this.props.item.dob)}</div>
                        <hr></hr>
                    </div>
                    <div className="contact-address">
                        <div className="contact-address"><span>Address:</span> {this.props.item.location.street}</div>
                        <div className="contact-location"><span>City:</span> {titleCase(this.props.item.location.city)} <span>State:</span> {titleCase(this.props.item.location.state)}</div>
                        <div className="contact-postal"><span>Postal Code:</span> {this.props.item.location.postcode}</div>
                        <hr></hr>                                                                                                 
                    </div>                                                                                                
                    <div>
                        <div className="contact-email"><span>Email:</span> <a href="mailto: {this.props.item.email}">{this.props.item.email}</a></div>
                        <div className="contact-phone"><span>Phone:</span> {this.props.item.phone} <span>Cell:</span> {this.props.item.cell} </div>
                    </div>
                </div>
            );
        }
    }
}

ContactsDetailsPage.propTypes = {
    item: PropTypes.object
};