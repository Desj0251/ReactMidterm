import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">{this.props.title} with {this.props.info}</div>
        );
    }
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};