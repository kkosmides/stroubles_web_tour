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
         let text;
         let imgSrc;

         // Determines which page the user is on, then sets text accordingly
         if (p == 1) {
             text = <p>This is page 1.</p>
             imgSrc = img1;
         }
         else if (p == 2) {
             text = <p>This is page 2.</p>
             imgSrc = img1;
         }
         else if (p == 3) {
             text = <p>This is page 3.</p>
             imgSrc = img1;
         }
         else if (p == 4) {
             text = <p>This is page 4.</p>
             imgSrc = img1;
         }
         else if (p == 5) {
             text = <p>This is page 5.</p>
             imgSrc = img1;
         }
         else if (p == 6) {
             text = <p>This is page 6.</p>
             imgSrc = img1;
         }
         else if (p == 7) {
             text = <p>This is page 7.</p>
             imgSrc = img1;
         }
         else if (p == 8) {
             text = <p>This is page 8.</p>
             imgSrc = img1;
         }
         else {
             text = <p>Thank you for taking our tour:)</p>
             imgSrc = img1;
         }

         // Returns the proper text and image according to the page number that the user is on
         return (
             <div id="infoTemplate">
                <img id="infoImg" src={imgSrc}/>
                 {text}
                 <button type="button" className="moreInfo">More Information</button>
             </div>
         );
     }
}

export default Page;