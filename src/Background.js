/*
 * Stroubles Creek Web Tour
 * Background component JavaScript source code
 *
 * Author: Katrina Kosmides, Matt Zambetti, Camille Blaine, Jacob Neigh
 * Version: 1.0
 */

import './Background.css';
import React from "react";

class Background extends React.Component {

    /*
     * Renders the background.
     */
     render() {

         // Keeps track of the page number the user is on
         let pageNum = this.props.pageNum;

         // Introduction page to give instructions on how to use the UI
         if (pageNum === 0) {
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
         // First page with buttons to move forward or back to instructions
         else if (pageNum === 1) {
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
         // All middle pages have forward and back buttons
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
         // Last page does not have a forward button
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
