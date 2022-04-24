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

         // // maybe add an intro page here start with pagenum = -1
         if (pageNum == 0) {
             return (
               <div id="introduction">
                   <div id="background">
                   </div>
                   <div id="intro">
                       <strong>Welcome to the Stroubles Creek Web Tour!</strong>
                       <br />
                       <div id="instructions">
                           Begin by clicking the "Let's begin" button located below. To move along the creek, click the
                           "forward" and "back" buttons that will appear on either sides of the screen. On each page, you
                           will have the opportunity to view several different images and access external links to learn
                           more. You can always exit the tour by clicking the exit button located at the top right corner
                           of your screen.
                       </div>

                       <button type="button" className="starter" onClick={this.props.forward}>Let's begin!</button>
                   </div>

               </div>
             );
         }
         else if (pageNum == 1) {
             return(
                 <div id="buttons">
                     <div id="background">
                     </div>
                     <button type="button" className="forward_b" onClick={this.props.forward}>Forward</button>
                     <button type="button" className="back_b" onClick={this.props.back}>Back to Instructions</button>
                     <button type="button" className="exit" onClick={this.props.exit}>Exit</button>
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
