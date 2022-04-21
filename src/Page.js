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
import img1 from "./photos/smith_bioret.JPG";
import img2 from "./photos/smith_det.JPG";
// page 2 pictures
import img3 from "./photos/grove1.JPG";
import img4 from "./photos/grove2.JPG";
// page 3 pictures
import img5 from "./photos/roof1.JPG";
import img6 from "./photos/roof2.jpg";
// page 4 pictures
import img7 from "./photos/rain1.JPG";
import img8 from "./photos/rain2.JPG";
// page 5 pictures
import img9 from "./photos/duckpond1.jpg";
import img10 from "./photos/duckpond2.jpg";
import img11 from "./photos/duckpond3.jpg";
import img12 from "./photos/duckpond4.jpg";
// war memorial pics
import img13 from "./photos/war_mem1.png";
import img14 from "./photos/war_mem2.png";
import img15 from "./photos/war_mem3.jpg";

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
         let text4; // fourth link if there is one
         let imgAmt; // the amount of images for that specific page
         let imgSrc; // the image to show
         let p1ImgArray = [img1, img2]; // array of images for page 1
         let p2ImgArray = [img3, img4]; // array of images for page 2
         let p3ImgArray = [img5, img6]; // array of images for page 3
         let p4ImgArray = [img7, img8]; // array of images for page 4
         let p5ImgArray = [img9, img10, img11, img12]; // array of images for page 5
         let p6ImgArray = [img13, img14, img15];
         let imgFBtn; // button to control moving to the next image
         let imgBBtn; // button to control moving to the previous image

         // Determines which page the user is on, then sets text accordingly
         if (p === 1) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://reports.aashe.org/institutions/virginia-tech-va/report/2013-03-19/OP/water/OP-23/"> STARS: A Program of AASHE</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Smithfield Lot has three parts to it.
                     The first is the Smithfield lot Bioretention Pretreatment. This is upstream of the bioretention and uses a natural filter
                     to keep out solid debris. The water is distributed evenly into the bioretention pond. The next part is the biorention pond.
                     Using filtration media, the Smithfield Biorention pond filters the water to remove sediment and pollutants before its flows 
                     back into the storm water system. The final part to the Smithfield lot is the extended detention. The extended detetion 
                     gradually release water to increase settling polluntants and protect downstream channels. 
                     </p>

                 // Forward and back buttons for images and sets image
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
                 // External links for more information
                 text = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf"> Link</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Grove Lane Detention pond was constructed in the late 90s but underwent renovations.
                     They replaced low flow outlet structure to handle runoff and volume better. The low flow channel directs water to the outlet,
                     while the inflow channel collects parking lot runoff into the pond. The renovations helped the pond look better instead 
                     of a muddy mess filled with sediment and debris. 
                 </p>

                 // Forward and back buttons for images and sets image
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
                 // External links for more information
                 text = <a href="https://www.nps.gov/tps/sustainability/new-technology/green-roofs/define.html">Link 1</a>
                 text2 = <a href="https://vtx.vt.edu/articles/2012/07/070312-caus-greenroof.html"> Link 2 </a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Life Sciences Green Roof has a planted layers of vegetation to reduce urban stormwater runoff.
                     This environmental design is to support healthy equilibrium between manmade and natural storm drainage systems.
                 </p>

                 // Forward and back buttons for images and sets image
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
                 // External links for more information
                 text = <a href="https://www.epa.gov/soakuptherain/soak-rain-rain-gardens">Link 1 </a>
                 text2 = <a href="https://resilientvirginia.org/vsbn_archives/20071026_016_Va_Tech.pdf"> Link 2</a>
                 text3 = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf">Link3 </a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The ICTAS II Rain Garden is a depressed area that collects rain and allows it to soak into the ground.
                     The purpose of this is to reduce runoff from the property and filter out pollutants.
                 </p>

                 // Forward and back buttons for images and sets image
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
                 // External links for more information
                 text = <a href="https://vtechworks.lib.vt.edu/bitstream/handle/10919/49495/VWRRC_sr201048.pdf">Virginia Tech Published Article</a>
                 text2 = <a href="https://kids.kiddle.co/Stroubles_Creek">Fun Facts of Stroubles Creek for Kids.</a>
                 text3 = <a href="https://www.archive.vtmag.vt.edu/fall14/duck-pond.html#:~:text=Artificially%20created%20in%20the%20mid,other%20fish%20released%20into%20it">Virginia Tech Archives Article</a>
                 text4 = <a href="https://www.wsls.com/features/2022/01/13/wintry-cuteness-otters-spotted-playing-on-ice-at-virginia-tech-duck-pond/">News Article Highlighting the Otters</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Duck Pond is a crucial feature in Stroubles Creek as it is the merge point between the two
                     main branches, The Main Branch and The Webb Branch. Connected to the pond is a sewer line that feeds into a water 
                     treatment plant. Another important feature near the duckpond is a man-made wetland which serves as a storm basin, 
                     this is located just outh of the Holtzman Alumni Center. 
                         
                     The Duck Pond is one of the most important ecosystems and serves as a habitat for numerious fish, mamals, birds and
                     vegetation. Some waterfowl that call this water home are Canadian Geese, Mallard Ducks, and Muscovy Ducks. One
                     mamal that caught the eye of many was a pair of otters, who were spotting January 2022 frolicking on the frozen pond.
                     Under the surface Common Carp, Redbreast Sunfish, Mosquito Fish, White Suckers, and Blackbullheads thrive and call the
                     water home. These species even attract anglers who can compete in the College of Natural Resources and Environmental 
                     informal fishing tournament.</p>

                 // Forward and back buttons for images and sets image
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p5ImgArray[n - 1];
             }
         }
         else if (p == 6) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://create.piktochart.com/output/20516777-scip-infographicfeb2017">Infographic on Stroubles Creek</a>
                 text2 = <a href="http://www.collegiatetimes.com/news/virginia_tech/sinking-drillfield-rumors-exposed/article_9ec48152-572e-5c05-99b9-c7ee4e391b66.html">News Article on Rumors Partaining to the Creek</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">Stroubles Creek was burried underneath The Drillfield running by War Memorial Gym around 1937. The creek used to
                                           run above ground and now most of it runs under Blacksburg and the campus. The fact that the creek is underground
                                           almost reinforces the idea of "out of sight, out of mind", for the fact that many poeople do not know the creek 
                                           runs under campus.
                                               
                                           The creek in this section is burried in a three-sided culvert, leaving the bottom of the creek exposed to the
                                           natural earth beneath it. With the creek being burried underneath the drill field it is responsible for most
                                           of the flooding that happens here, but is not making the Drillfield sink which is contrary to many rumors.</p>

                 // Forward and back buttons for images and sets image
                 imgAmt = 2;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 else if (imgAmt > 1 && n == imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p6ImgArray[n - 1];
             }
         }
         else if (p == 7) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://www.dhr.virginia.gov/pdf_files/SpecialCollections/MY-059_Survey_Historic_AH_BlacksburgHD_1997_WORSHAM_report.pdf">Survey Report of Historic Blacksburg</a>
                 text2 = <a href="https://16frogs.org/frogs/millie.html">16 Frogs: Millie</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">This location is the Old Mill of Blacksburg. It was built originally for the Blacksburg Milling and Supply Company
                                           which supplied flour and farm to Blacksbug when it ran. The mill had five flour rollers and a stone wheel which
                                           were all power from Stroubles Creek. In 1940 it saw a small renovation when it was clad in brick so that there could
                                           be housing on the upper floors. Now to represent this location there is a metal frog named Millie which is a part of
                                           the 16 Frogs Tour (see link for more information). 
                                           
                                           Now this location is the Rivermill Bar and Grill.</p>

                 // Forward and back buttons for images and sets image
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
                 // External links for more information
                 text = <a href="">Some links here.</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">This is page 8.</p>

                 // Forward and back buttons for images and sets image
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
             if (moreInfo) {
                 // All sources here
                 text = <a href="">Some links here.</a>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">Thank you for taking our tour:)</p>

                 // Forward and back buttons for images and sets image
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

         // Returns the proper text and image according to the page number that the user is on
         if (moreInfo) {
             return (
                 <div id="infoTemplate">
                     {text}<br />
                     {text2}<br />
                     {text3}<br />
                     {text4}<br />
                     <button type="button" className="exitMoreInfo" onClick={this.props.handleMoreInfo}>Back</button>
                 </div>
             );
         }
         else {
             if (p == 9) {
                 return (
                     <div id="infoTemplate">
                         <img id="infoImg" src={imgSrc}/>
                         {imgFBtn}
                         {imgBBtn}
                         {text}
                         <button type="button" className="moreInfo" onClick={this.props.handleMoreInfo}>Sources</button>
                     </div>
                 );
             }
             else {
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
}

export default Page;
