import React, { Component } from "react";
import "./App.css";
import TheDate from "./state/TheDate";
import Messages from "./Messages";
import Counter from "./state/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={123} />
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
      </div>
    );
  }
}

export default App;
