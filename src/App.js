import './App.css';
import React from "react";
import Background from "./Background";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {window_width: window.innerWidth, window_height: window.innerHeight};
    this.forward = this.forward.bind(this);
    this.back = this.back.bind(this);
  }

  render() {
    return (
        <div className="App">
            <Background window_width={this.state.window_width} window_height={this.state.window_height}
                forward={this.forward} back={this.back}/>
        </div>

    );
  }

  forward(e) {
      alert("forward clicked");
      /* move to new location */
  }

  back(e) {
      alert("back clicked");
      /* move to new location */
  }


}

export default App;