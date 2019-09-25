import React, { FC, useRef } from "react";
import "./App.scss";

interface SoundEffectProps {
  name: string;
  path: string;
}
const SoundEffect: FC<SoundEffectProps> = props => {
  const audioElement = useRef(null);

  const playAudio = () => {
    if (audioElement !== null) {
      const current = audioElement.current;
      if (current !== null) {
        audioElement.current.play();
      }
    }
  };

  return (
    <div>
      <button onClick={playAudio}>{props.name}</button>
      <audio src={props.path} ref={audioElement} />
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
