import React from "react";
import NavBar from "./components/nav/NavBar";
import Slider from "./components/carousel/Slider";
import Video from "./components/video/Video";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Video />
    </div>
  );
}

export default App;
