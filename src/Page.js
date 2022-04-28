/*
 * Stroubles Creek Web Tour
 * Page component JavaScript source code
 *
 * Author: Katrina Kosmides, Matt Zambetti, Camille Blaine, Jacob Neigh
 * Version: 1.0
 */

import './Page.css';
import React from "react";
// Smithfield lot photos
import img0 from "./photos/smith.jpg";
import img1 from "./photos/smithfield1.jpg";
import img2 from "./photos/smithfield2.jpg";
// Grove lane photos
import img2_2 from "./photos/grove.jpg";
import img3 from "./photos/grove1.jpg";
import img4 from "./photos/grove2.jpg";
// Life sciences photos
import img4_2 from "./photos/life_science.jpg";
import img5 from "./photos/green_roof.jpg";
import img6 from "./photos/green_roof2.jpg";
// ICTAS photos
import img6_2 from "./photos/icat.jpg";
import img7 from "./photos/rain1.jpg";
import img8 from "./photos/rain2.jpg";
// Duckpond photos
import img8_2 from "./photos/duckpond.jpg";
import img9 from "./photos/duckpond1.jpg";
import img10 from "./photos/duckpond2.jpg";
import img11 from "./photos/duckpond3.jpg";
import img12 from "./photos/duckpond4.jpg";
// War Memorial photos
import img12_2 from "./photos/war.jpg";
import img13 from "./photos/war_mem1.png";
import img14 from "./photos/war_mem2.png";
import img15 from "./photos/war_mem3.jpg";
// Conclusion photos
import img16 from "./photos/conclusion2.png";
import img17 from "./photos/conclusion1.png";
// Old Mill photos
import img17_2 from "./photos/mill.jpg";
import img18 from "./photos/oldblacksburgmill.jpg";
import img19 from "./photos/oldblacksburgmill2.jpg";
// Animal photos
import img20 from "./photos/foxridge.jpg";
import img21 from  "./photos/page8.jpg";
import img22 from "./photos/page8_2.JPG";
import img23 from "./photos/page8_3.jpg";

class Page extends React.Component {

    /*
     * Renders the information page depending on pageNum.
     * @returns The page component.
     */
     render() {
         let p = this.props.pageNum; // page number that the user is on
         let n = this.props.picNum; // picture number on that page
         let moreInfo = this.props.moreInfo; // a boolean if moreInfo has been clicked
         let text; // text description of location/image or first link
         let text2; // second link if there is one
         let text3; // third link if there is one
         let text4; // fourth link if there is one
         let SOL; //SOL text
         let imgAmt; // the amount of images for that specific page
         let imgSrc; // the image to show
         let p1ImgArray = [img1, img2, img0]; // array of images for page 1 (Smithfield)
         let p2ImgArray = [img3, img4, img2_2]; // array of images for page 2 (Grove)
         let p3ImgArray = [img5, img6, img4_2]; // array of images for page 3 (Life Sciences)
         let p4ImgArray = [img7, img8, img6_2]; // array of images for page 4 (Rain Garden)
         let p5ImgArray = [img9, img10, img11, img12, img8_2]; // array of images for page 5 (Duck Pond)
         let p6ImgArray = [img13, img14, img15, img12_2]; // array of images for page 6 (War Memorial Gym)
         let p7ImgArray = [img18, img19, img17_2]; // array of images for page 7 (Old Mill)
         let p8ImgArray = [img21, img22, img23, img20]; // array of images for page 8 (Trail camera)
         let p9ImgArray = [img16, img17]; // array of images for conclusion page
         let imgFBtn; // button to control moving to the next image
         let imgBBtn; // button to control moving to the previous image

         // Determines which page the user is on, then sets text accordingly
         if (p === 1) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://reports.aashe.org/institutions/virginia-tech-va/report/2013-03-19/OP/water/OP-23/" target="_blank" rel="noreferrer noopener"> STARS: A Program of AASHE</a>
                 SOL = <p>Virginia Science SOL 6.7b: The student will investigate and understand
                 the natural processes and human interactions that affect watershed systems. 
                 The key concept of this SOL we are looking at here is the location and structure of Virginia’s regional watershed systems.</p>
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
                 imgAmt = 3;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p1ImgArray[n - 1];
             }
         }
         else if (p === 2) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf" target="_blank" rel="noreferrer noopener"> VT MS4 Annual Report</a>
                 SOL = <p>Virginia Science SOL 6.7b: The student will investigate and understand
                 the natural processes and human interactions that affect watershed systems. 
                 The key concept of this SOL we are looking at here is the location and structure of Virginia’s regional watershed systems.</p>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Grove Lane Detention pond was constructed in the late 90s but underwent renovations.
                     They replaced low flow outlet structure to handle runoff and volume better. The low flow channel directs water to the outlet,
                     while the inflow channel collects parking lot runoff into the pond. The renovations helped the pond look better instead 
                     of a muddy mess filled with sediment and debris. 
                 </p>
                 // Forward and back buttons for images and sets image
                 imgAmt = 3;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p2ImgArray[n - 1];
             }
         }
         else if (p === 3) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://www.nps.gov/tps/sustainability/new-technology/green-roofs/define.htm" target="_blank" rel="noreferrer noopener">NPS Green Roof</a>
                 text2 = <a href="https://vtx.vt.edu/articles/2012/07/070312-caus-greenroof.html" target="_blank" rel="noreferrer noopener"> Green Roof Designs </a>
                 SOL = <p>Virginia SOL WG.2b: The student will analyze how physical and ecological 
                 processes shape Earth’s surface by describing 
                 how humans influence the environment and are influenced by it.</p>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The Life Sciences Green Roof has a planted layers of vegetation to reduce urban stormwater runoff.
                     This environmental design is to support healthy equilibrium between manmade and natural storm drainage systems.
                 </p>
                 // Forward and back buttons for images and sets image
                 imgAmt = 3;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p3ImgArray[n - 1];
             }
         }
         else if (p === 4) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://www.epa.gov/soakuptherain/soak-rain-rain-gardens" target="_blank" rel="noreferrer noopener"> Rain Gardens </a>
                 text2 = <a href="https://resilientvirginia.org/vsbn_archives/20071026_016_Va_Tech.pdf" target="_blank" rel="noreferrer noopener"> ICTAS II Planning and Building Design</a>
                 text3 = <a href="https://www.facilities.vt.edu/content/dam/facilities_vt_edu/stormwater/Virginia%20Tech%202020%20MS4%20Annual%20Report.pdf" target="_blank" rel="noreferrer noopener"> VT MS4 Annual Report </a>
                 SOL = <p>Virginia SOL WG.2b: The student will analyze how physical and ecological 
                 processes shape Earth’s surface by describing 
                 how humans influence the environment and are influenced by it.</p>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">The ICTAS II Rain Garden is a depressed area that collects rain and allows it to soak into the ground.
                     The purpose of this is to reduce runoff from the property and filter out pollutants.
                 </p>
                 // Forward and back buttons for images and sets image
                 imgAmt = 3;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p4ImgArray[n - 1];
             }
         }
         else if (p === 5) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://vtechworks.lib.vt.edu/bitstream/handle/10919/49495/VWRRC_sr201048.pdf" target="_blank" rel="noreferrer noopener">Virginia Tech Published Article</a>
                 text2 = <a href="https://kids.kiddle.co/Stroubles_Creek" target="_blank" rel="noreferrer noopener">Fun Facts of Stroubles Creek for Kids.</a>
                 text3 = <a href="https://www.archive.vtmag.vt.edu/fall14/duck-pond.html#:~:text=Artificially%20created%20in%20the%20mid,other%20fish%20released%20into%20it" target="_blank" rel="noreferrer noopener">Virginia Tech Archives Article</a>
                 text4 = <a href="https://www.wsls.com/features/2022/01/13/wintry-cuteness-otters-spotted-playing-on-ice-at-virginia-tech-duck-pond/" target="_blank" rel="noreferrer noopener">News Article Highlighting the Otters</a>
                 SOL = <p>Virginia Science SOL 6.7a: The student will investigate and understand
                 the natural processes and human interactions that affect watershed systems.
                 The key concept of this SOL we are looking at here is the health of ecosystems and the abiotic factors of a watershed.</p>
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
                 imgAmt = 5;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p5ImgArray[n - 1];
             }
         }
         else if (p === 6) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://create.piktochart.com/output/20516777-scip-infographicfeb2017" target="_blank" rel="noreferrer noopener">Infographic on Stroubles Creek</a>
                 text2 = <a href="http://www.collegiatetimes.com/news/virginia_tech/sinking-drillfield-rumors-exposed/article_9ec48152-572e-5c05-99b9-c7ee4e391b66.html" target="_blank" rel="noreferrer noopener">News Article on Rumors Partaining to the Creek</a>
                 SOL = <p>Virginia SOL VS.1b:  The student will demonstrate skills for historical thinking,
                     geographical analysis, economic decision making, and responsible citizenship by analyzing the impact of geographic features on 
                     people, places, and events to support an understanding of events in Virginia history.</p>
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
                 imgAmt = 4;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p6ImgArray[n - 1];
             }
         }
         else if (p === 7) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://www.dhr.virginia.gov/pdf_files/SpecialCollections/MY-059_Survey_Historic_AH_BlacksburgHD_1997_WORSHAM_report.pdf" target="_blank" rel="noreferrer noopener">Survey Report of Historic Blacksburg</a>
                 text2 = <a href="https://16frogs.org/frogs/millie.html" target="_blank" rel="noreferrer noopener">16 Frogs: Millie</a>
                 SOL = <p>Virginia SOL VS.1b:  The student will demonstrate skills for historical thinking,
                     geographical analysis, economic decision making, and responsible citizenship by analyzing the impact of geographic features on 
                     people, places, and events to support an understanding of events in Virginia history.</p>
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
                 imgAmt = 3;
                 if (n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (n > 1) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p7ImgArray[n - 1];
             }
         }
         else if (p === 8) {
             if (moreInfo) {
                 // External links for more information
                 text = <a href="https://drive.google.com/drive/folders/1w15-C9s-IocZfT7dqrLAMepWU_QxAntZ" target="_blank" rel="noreferrer noopener">Trail Camera</a>
                 SOL = <p>Virginia Science SOL 6.7a: The student will investigate and understand
                 the natural processes and human interactions that affect watershed systems.
                 The key concept of this SOL we are looking at here is the health of ecosystems and the abiotic factors of a watershed.</p>
             }
             else {
                 // Photo and location description
                 text = <p align="justify">This is the trail camera along the creek near Foxridge apartments.
                     This sight is known to have plenty of animal traffic that includes small and some large game.
                     Some featured mammal images at this location include otter, muskrat, mink, weasel, deer, bobcat,
                     and beaver. Species of birds similar to the duck pond also reside here.</p>
                 // Forward and back buttons for images and sets image
                 imgAmt = 4;
                 if (imgAmt > 1 && n < imgAmt) {
                     imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
                 }
                 if (imgAmt > 1 && n === imgAmt) {
                     imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
                 }
                 imgSrc = p8ImgArray[n - 1];
             }
         }
         else {

             // Photo and location description
             text = <p align="justify"> The 12 mile stream has played a key role in the town of Blacksburg, Virginia Tech, and Montgomery County.
             Stroubles Creek has been designated an impaired waterway. It is important for us to continue learning about the creek in order for us to protect it.
             Thank you for taking our tour and learning about Stroubles Creek :) </p>
             // Forward and back buttons for images and sets image
             imgAmt = 2;
             if (imgAmt > 1 && n < imgAmt) {
                 imgFBtn = <button type="button" className="imgFBtn" onClick={this.props.handleImgFBtn}>Next Image</button>
             }
             if (imgAmt > 1 && n === imgAmt) {
                 imgBBtn = <button type="button" className="imgBBtn" onClick={this.props.handleImgBBtn}>Previous Image</button>
             }
             imgSrc = p9ImgArray[n - 1];

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
                     {SOL}<br />
                 </div>
             );
         }
         else {
             if (p === 9) {
                 return (
                     <div id="infoTemplate">
                         <img id="infoImg" src={imgSrc} alt="Images of Stroubles Creek"/>
                         {imgFBtn}
                         {imgBBtn}
                         {text}
                     </div>
                 );
             }
             else {
                 return (
                     <div id="infoTemplate">
                         <img id="infoImg" src={imgSrc} alt="Images of Stroubles Creek"/>
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
