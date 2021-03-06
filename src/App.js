/*
 * Stroubles Creek Web Tour
 * App component JavaScript source code
 *
 * Author: Katrina Kosmides, Matt Zambetti, Camille Blaine, Jacob Neigh
 * Version: 1.0
 */

import './App.css';
import React from "react";
import Background from "./Background";
import Page from "./Page";

class App extends React.Component {

    /*
     * Constructor. Sets state and binds functions.
     */
    constructor(props) {
        super(props);
        this.state = {window_width: window.innerWidth, window_height: window.innerHeight, showPage: false, pageNum: 0, moreInfo: false, picNum: 1};
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
        this.exit = this.exit.bind(this);
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
        this.handleImgFBtn = this.handleImgFBtn.bind(this);
        this.handleImgBBtn = this.handleImgBBtn.bind(this);
    }

    /*
     * Renders the page. Web tour starts with page component hidden.
     * @returns The background and page components.
     */
    render() {
        const { showPage } = this.state;
        return (
            <div className="App">
                <Background window_width={this.state.window_width} window_height={this.state.window_height}
                            forward={this.forward} back={this.back} exit={this.exit} pageNum={this.state.pageNum}/>
                {showPage && <Page pageNum={this.state.pageNum} picNum={this.state.picNum}
                                   moreInfo={this.state.moreInfo} handleMoreInfo={this.handleMoreInfo}
                                   handleImgFBtn={this.handleImgFBtn} handleImgBBtn={this.handleImgBBtn}/>}
            </div>
        );
    }

    /*
     * Forward function gets called when forward button is clicked. Increments pageNum to keep track of
     * which page the user is on and determines whether the page component should be shown.
     */
    forward() {
        // Increments pageNum
        if (this.state.pageNum === 0) {
            this.setState({pageNum: this.state.pageNum + 1});
        }
        // Increments pageNum, resets moreInfo to false, and resets picNum to 1
        if (this.state.pageNum >= 0 && this.state.pageNum < 9) {
            document.getElementById("background").style.opacity = "0.3";
            this.setState({ pageNum: this.state.pageNum + 1});
            this.setState({moreInfo: false});
            this.setState({picNum: 1});
        }
        // Determines if the page component should be shown or hidden
        if (this.state.pageNum === 0) {
            this.setState({ showPage: !this.state.showPage})
            this.setState({moreInfo: false});
            this.setState({picNum: 1});
        }
    }

    /*
     * Back function gets called when the back button is clicked. Decrements pageNum to keep track of
     * which page the user is on and determines whether the page component should be shown.
     */
    back() {
        // Decrements pageNum, resets moreInfo to false, resets picNum to 1
        if (this.state.pageNum > 0 && this.state.pageNum <= 9) {
            document.getElementById("background").style.opacity = "0.3";
            this.setState({ pageNum: this.state.pageNum - 1})
            this.setState({moreInfo: false});
            this.setState({picNum: 1});
        }
        // Determines if the page component should be shown or hidden
        if (this.state.pageNum === 1) {
            document.getElementById("background").style.opacity = "1";
            this.setState({ showPage: !this.state.showPage})
            this.setState({moreInfo: false});
            this.setState({picNum: 1});
        }
    }

    /*
     * Exit function gets called when the exit button is clicked. Resets pageNum to 0.
     */
    exit() {
        // Hides page component and resets pageNum to 0 if the user is in the tour.
        if (this.state.showPage === true) {
            document.getElementById("background").style.opacity = "1";
            this.setState({showPage: !this.state.showPage});
            this.setState({pageNum: 0});
            this.setState({picNum: 1});
        }
    }

    /*
     * HandleMoreInfo function gets called when the more information button is clicked
     */
    handleMoreInfo() {
        this.setState({moreInfo: !this.state.moreInfo});
    }

    /*
     * HandleImgFBtn function gets called when a user clicks next image. Allows for user to
     * go through all images for each page
     */
    handleImgFBtn() {
        this.setState({picNum: this.state.picNum + 1});
    }

    /*
     * HandleImgBBtn function gets called when a user clicks previous image. Allows for user to
     * go through all images for each page
     */
    handleImgBBtn() {
        this.setState({picNum: this.state.picNum - 1});
    }
}

export default App;
