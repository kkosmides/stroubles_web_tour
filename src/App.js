/*
 * Stroubles Creek Web Tour
 * App component JavaScript source code
 *
 * Author: Katrina Kosmides
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
        this.state = {window_width: window.innerWidth, window_height: window.innerHeight, showPage: false, pageNum: 0, moreInfo: false};
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
        this.exit = this.exit.bind(this);
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
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
                    forward={this.forward} back={this.back} exit={this.exit}/>
                {showPage && <Page pageNum={this.state.pageNum} moreInfo={this.state.moreInfo} handleMoreInfo={this.handleMoreInfo}/>}
            </div>
        );
    }

    /*
     * Forward function gets called when forward button is clicked. Increments pageNum to keep track of
     * which page the user is on and determines whether the page component should be shown.
     */
    forward(e) {
        // Increments pageNum
        if (this.state.pageNum >= 0 && this.state.pageNum < 9) {
            this.setState({ pageNum: this.state.pageNum + 1});
            this.setState({moreInfo: false});
        }
        // Determines if the page component should be shown or hidden
        if (this.state.pageNum == 0) {
            this.setState({ showPage: !this.state.showPage})
            this.setState({moreInfo: false});
        }
    }

    /*
     * Back function gets called when the back button is clicked. Decrements pageNum to keep track of
     * which page the user is on and determines whether the page component should be shown.
     */
    back(e) {
        // Decrements pageNum
        if (this.state.pageNum > 0 && this.state.pageNum <= 9) {
            this.setState({ pageNum: this.state.pageNum - 1})
            this.setState({moreInfo: false});
        }
        // Determines if the page component should be shown or hidden
        if (this.state.pageNum == 1) {
            this.setState({ showPage: !this.state.showPage})
            this.setState({moreInfo: false});
        }
    }

    /*
     * Exit function gets called when the exit button is clicked. Resets pageNum to 0.
     */
    exit(e) {
        // Hides page component and resets pageNum to 0 if the user is in the tour.
        if (this.state.showPage == true) {
            this.setState({showPage: !this.state.showPage})
            this.setState({pageNum: 0})
        }
    }

    handleMoreInfo(e) {
        this.setState({moreInfo: !this.state.moreInfo});
    }
}

export default App;