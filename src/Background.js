/*
 * Homework 1
 * Header component JavaScript source code
 *
 * Author: Denis Gracanin
 * Version: 1.0
 */

import './Background.css';
import React from "react";
import photo from './stroubles_creek.jpg'

class Background extends React.Component {

    /**
     * Renders the header.
     * @returns {JSX.Element}   The rendered header.
     */
    render() {

        let w = this.props.window_width;
        let h = this.props.window_height;

        return(
            <div id="background">
                <button type="button" class="forward_b" onClick={this.props.forward} >This is forward button</button>
                <button type="button" class="back_b" onClick={this.props.back}>This is back button</button>
            </div>
        );
    }

}

export default Background;
