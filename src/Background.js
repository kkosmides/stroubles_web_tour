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
        return(
            /**<img src={photo} />*/
            <div id={"img"}>  </div>
        );
    }
}

export default Background;
