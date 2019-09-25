import React, { FC } from "react";
import "./App.scss";

interface SoundEffectProps {
  name: string;
  path: string;
};
const SoundEffect: FC<SoundEffectProps> = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <audio controls src={props.path} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <SoundEffect name="Price Is Wrong" path="/sounds/price-is-wrong.mp3" />
      <SoundEffect name="Dun dun duuun!!!" path="/sounds/dun-dun-duuun.mp3" />
    </div>
  );
};

export default App;
