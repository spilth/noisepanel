import React, { FC, useRef } from "react";

import "./SoundEffect.scss";

interface SoundEffectProps {
  name: string;
  path: string;
}

const SoundEffect: FC<SoundEffectProps> = props => {
  const audioElement = useRef(null);

  const playAudio = () => {
    if (audioElement !== null) {
      const current: HTMLAudioElement =
        audioElement.current || new HTMLAudioElement();

      if (current !== null) {
        current.play().then(r => {});
      }
    }
  };

  return (
    <div>
      <button className="sound-effect__button" onClick={playAudio}>
        {props.name}
      </button>
      <audio src={props.path} ref={audioElement} />
    </div>
  );
};

export default SoundEffect;
