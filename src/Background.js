/*
 * Stroubles Creek Web Tour
 * Background component JavaScript source code
 *
 * Author: Katrina Kosmides
 * Version: 1.0
 */

import './Background.css';
import React from "react";

class Background extends React.Component {



    /*
     * Renders the background.
     * @returns Three buttons, forward, back, and exit.
     */
     render() {

         // Returns buttons
         return(
             <div id="background">
                 <button type="button" class="forward_b" onClick={this.props.forward} >Forward</button>
                 <button type="button" class="back_b" onClick={this.props.back}>Back</button>
                 <button type="button" class="exit" onClick={this.props.exit}>Exit</button>
             </div>
         );
    }
}

export default Background;
