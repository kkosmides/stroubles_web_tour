/*
 * Stroubles Creek Web Tour
 * Page component JavaScript source code
 *
 * Author: Katrina Kosmides
 * Version: 1.0
 */

import './Page.css';
import React from "react";
import img1 from "./stroubles_creek.jpg";

class Page extends React.Component {

    /*
     * Renders the information page depending on pageNum.
     * @returns The page component.
     */
     render() {

         // Page number and text to show for that page number
         let p = this.props.pageNum;
         let moreInfo = this.props.moreInfo;
         let text;
         let imgSrc;
         let imgSrc2;
         let imgSrc3;
         let imgSrc4;
         let imgFBtn;
         let imgBBtn;
         let btn;

         // Determines which page the user is on, then sets text accordingly
         if (p == 1) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
             }
             else {
                 text = <p>This is page 1.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>
             }
         }
         else if (p == 2) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
             }
             else {
                 text = <p>This is page 2.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>
             }
         }
         else if (p == 3) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 3.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 4) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 4.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 5) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 5.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 6) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 6.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 7) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 7.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 8) {
             if (moreInfo) {
                 text = <p>Some links here.</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>This is page 8.</p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else {
             text = <p>Thank you for taking our tour:)</p>
             imgSrc = img1;
         }

         if (moreInfo) {
             // Returns the proper text and image according to the page number that the user is on
             return (
                 <div id="infoTemplate">
                     {text}
                     {btn}
                 </div>
             );
         }
         else {
             // Returns the proper text and image according to the page number that the user is on
             return (
                 <div id="infoTemplate">
                     <img id="infoImg" src={imgSrc}/>
                     {text}
                     {btn}
                 </div>
             );
         }



     }

}

export default Page;