import './App.css';
import React from "react";
import Background from "./Background";

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="App">
            <Background />
        </div>
    );
  }
}

export default App;