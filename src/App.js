import React, { Component } from "react";
import "./App.css";
// import TheDate from "./state/TheDate";
// import Messages from "./Messages";
// import Counter from "./state/Counter";
import Tabs from "./state/Tabs";

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsProp} />
        {/* <Counter count={123} />
        <TheDate />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div> */}
      </div>
    );
  }
}

export default App;
