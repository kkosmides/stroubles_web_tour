/*
 * Stroubles Creek Web Tour
 * Background component JavaScript source code
 *
 * Author: Katrina Kosmides, Matt Zambetti
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

         let pageNum = this.props.pageNum;

         // Returns buttons

         // maybe add an intro page here start with pagenum = -1
         if (pageNum == -1) {
             return (
               <div id="intro">
                   <div id="background">
                   </div>
                   <button type="button" className="starter">Let's begin!</button>
               </div>
             );
         }
         if (pageNum == 0) {
             return(
                 <div id="buttons">
                     <div id="background">
                     </div>
                     <button type="button" className="forward_b" onClick={this.props.forward}>Forward</button>
                 </div>
             );
         }
         else if (pageNum < 9) {
             return(
                 <div id="buttons">
                     <div id="background">
                     </div>
                     <button type="button" className="forward_b" onClick={this.props.forward}>Forward</button>
                     <button type="button" className="back_b" onClick={this.props.back}>Back</button>
                     <button type="button" className="exit" onClick={this.props.exit}>Exit</button>
                 </div>
             );
         }
         else {
             return(
                 <div id="buttons">
                     <div id="background">
                     </div>
                     <button type="button" className="back_b" onClick={this.props.back}>Back</button>
                     <button type="button" className="exit" onClick={this.props.exit}>Exit</button>
                 </div>
             );
         }

    }
}

export default Background;
