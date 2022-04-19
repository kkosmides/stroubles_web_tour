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
import img2 from "./Daisy_beach.JPG";

class Page extends React.Component {

    /*
     * Renders the information page depending on pageNum.
     * @returns The page component.
     */
     render() {

         // Page number and text to show for that page number
         let p = this.props.pageNum;
         let n = this.props.picNum;
         let moreInfo = this.props.moreInfo;
         let text;
         let imgSrc;
         let imgSrc1;
         let imgSrc2;
         let imgSrc3;
         let imgSrc4;
         let imgFBtn;
         let imgBBtn;
         let btn;

         // Determines which page the user is on, then sets text accordingly
         if (p == 1) {
             if (moreInfo) {
                 text = <p>https://reports.aashe.org/institutions/virginia-tech-va/report/2013-03-19/OP/water/OP-23/</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
             }
             else {
                 text = <p>The Smithfield Lot has three parts to it. 
                     The first is the Smithfield lot Bioretention Pretreatment. This is upstream of the bioretention and uses a natural filter
                     to keep out solid debris. The water is distributed evenely into the bioretention pond. The next part is the biorention pond.
                     Using filtration media, the Smithfield Biorention pond filters the water to remove sediment and pollutants before its flows 
                     back into the storm water system. The final part to the Smithfield lot is the extended detention. The extended detetion 
                     gradually release water to increase settling polluntants and protect downstream channels. </p>
                 imgSrc1 = img1;
                 imgSrc2 = img2;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>
                 if (imgSrc1 != null) {
                     imgBBtn = <button type="button" className="imgFBtn">Previous Image</button>
                     imgFBtn = <button type="button" className="imgFBtn">Next Image</button>

                 }
                 if (n == 1) {
                     imgSrc = imgSrc1;
                 }
                 else if (n == 2) {
                     imgSrc = imgSrc2;
                 }
             }
         }
         else if (p == 2) {
             if (moreInfo) {
                 text = <p>https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf</p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
             }
             else {
                 text = <p>The Grove Lane Detention pond was constructed in the late 90s but underwent renovations. 
                     They replaced low flow outlet structure to handle runoff and volume better. The low flow channel directs water to the outlet,
                     while the inflow channel collects parking lot runoff into the pond. The renovations helped the pond look better instead 
                     of a muddy mess filled with sediment and debris. 
                 </p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>
                 if (imgSrc2 != null) {
                     imgFBtn = <button type="button" className="imgFBtn">Next Image</button>
                     imgBBtn = <button type="button" className="imgFBtn">Previous Image</button>
                 }
             }
         }
         else if (p == 3) {
             if (moreInfo) {
                 text = <p>https://www.nps.gov/tps/sustainability/new-technology/green-roofs/define.html
                     https://vtx.vt.edu/articles/2012/07/070312-caus-greenroof.html
                 </p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>The Life Sciences Green Roof has a planted layers of vegetation to reduce urban stormwater runoff. 
                     This environmental design is to support healthy equilibrium between manmade and natural storm drainage systems.
                 </p>
                 imgSrc = img1;
                 btn = <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>

             }
         }
         else if (p == 4) {
             if (moreInfo) {
                 text = <p>https://www.epa.gov/soakuptherain/soak-rain-rain-gardens
                     https://resilientvirginia.org/vsbn_archives/20071026_016_Va_Tech.pdf
                     https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf
                 </p>
                 btn = <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>

             }
             else {
                 text = <p>The ICTAS II Rain Garden is a depressed area that collects rain and allows it to soak into the ground. 
                     The purpose of this is to reduce runoff from the property and filter out pollutants.
                 </p>
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
                     {imgFBtn}
                     {imgBBtn}
                     {text}
                     {btn}
                 </div>
             );
         }



     }

}

export default Page;