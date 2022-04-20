/*
 * Stroubles Creek Web Tour
 * Page component JavaScript source code
 *
 * Author: Katrina Kosmides
 * Version: 1.0
 */

import './Page.css';
import React from "react";
// page 1 pictures
import img1 from "./smith_bioret.jpg";
import img2 from "./smith_det.jpg";
// page 2 pictures
import img3 from "./grove1.jpg";
import img4 from "./grove2.jpg";
// page 3 pictures
import img5 from "./roof1.jpg";
import img6 from "./roof2.jpg";
// page 4 pictures
import img7 from "./rain1.jpg";
import img8 from "./rain2.jpg";

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
         let text; // text description of location/image or first link
         let text2; // second link if there is one
         let text3; // third link if there is one
         let imgAmt; // the amount of images for that specific page
         let imgSrc; // the image to show
         let p1ImgArray = [img1, img2]; // array of images for page 1
         let p2ImgArray = [img3, img4]; // array of images for page 2
         let p3ImgArray = [img5, img6]; // array of images for page 3
         let p4ImgArray = [img7, img8]; // array of images for page 4
         let imgFBtn; // button to control moving to the next image
         let imgBBtn; // button to control moving to the previous image

         // Determines which page the user is on, then sets text accordingly
         if (p === 1) {
             if (moreInfo) {
                 text = <a href="https://reports.aashe.org/institutions/virginia-tech-va/report/2013-03-19/OP/water/OP-23/"> STARS: A Program of AASHE</a>
             }
             else {
                 text = <p align="justify">The Smithfield Lot has three parts to it.
                     The first is the Smithfield lot Bioretention Pretreatment. This is upstream of the bioretention and uses a natural filter
                     to keep out solid debris. The water is distributed evenly into the bioretention pond. The next part is the biorention pond.
                     Using filtration media, the Smithfield Biorention pond filters the water to remove sediment and pollutants before its flows 
                     back into the storm water system. The final part to the Smithfield lot is the extended detention. The extended detetion 
                     gradually release water to increase settling polluntants and protect downstream channels. 
                     </p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n === imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else if (p === 2) {
             if (moreInfo) {
                 text = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf"> Link</a>
             }
             else {
                 text = <p align="justify">The Grove Lane Detention pond was constructed in the late 90s but underwent renovations.
                     They replaced low flow outlet structure to handle runoff and volume better. The low flow channel directs water to the outlet,
                     while the inflow channel collects parking lot runoff into the pond. The renovations helped the pond look better instead 
                     of a muddy mess filled with sediment and debris. 
                 </p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n === imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p2ImgArray[n - 1];
             }
         }
         else if (p === 3) {
             if (moreInfo) {
                 text = <a href="https://www.nps.gov/tps/sustainability/new-technology/green-roofs/define.html">Link 1</a>
                 text2 = <a href="https://vtx.vt.edu/articles/2012/07/070312-caus-greenroof.html"> Link 2 </a>
             }
             else {
                 text = <p align="justify">The Life Sciences Green Roof has a planted layers of vegetation to reduce urban stormwater runoff.
                     This environmental design is to support healthy equilibrium between manmade and natural storm drainage systems.
                 </p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n === imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p3ImgArray[n - 1];
             }
         }
         else if (p === 4) {
             if (moreInfo) {
                 text = <a href="https://www.epa.gov/soakuptherain/soak-rain-rain-gardens">Link 1 </a>
                 text2 = <a href="https://resilientvirginia.org/vsbn_archives/20071026_016_Va_Tech.pdf"> Link 2</a>
                 text3 = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf">Link3 </a>
             }
             else {
                 text = <p align="justify">The ICTAS II Rain Garden is a depressed area that collects rain and allows it to soak into the ground.
                     The purpose of this is to reduce runoff from the property and filter out pollutants.
                 </p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p4ImgArray[n - 1];
             }
         }
         else if (p == 5) {
             if (moreInfo) {
                 text = <a href="">Some links here.</a>
             }
             else {
                 text = <p align="justify">This is page 5.</p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else if (p == 6) {
             if (moreInfo) {
                 text = <a href="">Some links here.</a>
             }
             else {
                 text = <p align="justify">This is page 6.</p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else if (p == 7) {
             if (moreInfo) {
                 text = <a href="">Some links here.</a>
             }
             else {
                 text = <p align="justify">This is page 7.</p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else if (p == 8) {
             if (moreInfo) {
                 text = <a href="">Some links here.</a>
             }
             else {
                 text = <p align="justify">This is page 8.</p>
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else {
             text = <p align="justify">Thank you for taking our tour:)</p>
             imgSrc = img1;
         }

         if (moreInfo) {
             // Returns the proper text and image according to the page number that the user is on
             return (
                 <div id="infoTemplate">
                     {text}<br />
                     {text2}<br />
                     {text3}<br />
                     <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
                 </div>
             );
         }
         else {
             // Returns the proper text and image according to the page number that the user is on
             // document.getElementById("background").style.opacity = "0.5";
             return (
                 <div id="infoTemplate">
                     <img id="infoImg" src={imgSrc}/>
                     {imgFBtn}
                     {imgBBtn}
                     {text}
                     <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>More Information</button>
                 </div>


             );
         }



     }

}

export default Page;