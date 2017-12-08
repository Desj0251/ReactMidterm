import React, {Component} from "react";
import PropTypes from "prop-types";
import {dob, titleCase} from "../format.js";



export default class ContactsPage extends Component {
    
    render() {
        return (
            <div className="column-list">
                <ul>
                    {this.props.items.map( item => (
        
                        <li className="contact" key={item.key} >
                            <a href={"#contact/" + item.id}>
                                <div className="row">
                                    <div className="column-image">
                                        <img src={item.picture.thumbnail} alt={item.name}></img>
                                    </div>
                                    <div className="column-data">
                                        <span>{titleCase(item.name.first)} {titleCase(item.name.last)}</span>
                                        <br></br>
                                        {dob(item.dob)}
                                        <br></br>
                                        {item.phone}
                                    </div>
                                </div>
                            </a><hr></hr>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
}

ContactsPage.propTypes = {
    items: PropTypes.array
};