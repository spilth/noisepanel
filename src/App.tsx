import React from "react";
import "./App.scss";
import SoundEffect from "./components/SoundEffect/SoundEffect";

const App: React.FC = () => {
  return (
    <div className="sound-effects">
      <SoundEffect name="Price Is Wrong" path="/sounds/price-is-wrong.mp3" />
      <SoundEffect name="Dun dun duuun!!!" path="/sounds/dun-dun-duuun.mp3" />
    </div>
  );
};

export default App;
