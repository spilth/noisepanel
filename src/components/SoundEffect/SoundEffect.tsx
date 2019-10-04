import React, { FC, useRef, useState } from "react";

import "./SoundEffect.scss";

interface SoundEffectProps {
  name: string;
  path: string;
}

const SoundEffect: FC<SoundEffectProps> = props => {
  const audioElement = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playAudio = () => {
    if (audioElement !== null) {
      const current: HTMLAudioElement =
        audioElement.current || new HTMLAudioElement();

      if (current !== null) {
        current.play().then(() => {});
        setPlaying(true);
      }
    }
  };

  const pauseAudio = () => {
    if (audioElement !== null) {
      const current: HTMLAudioElement =
        audioElement.current || new HTMLAudioElement();

      if (current !== null) {
        current.pause();
        setPlaying(false);
      }
    }
  };

  const stopAudio = () => {
    if (audioElement !== null) {
      const current: HTMLAudioElement =
        audioElement.current || new HTMLAudioElement();

      if (current !== null) {
        current.load();
        setPlaying(false);
      }
    }
  };

  const audioFinished = () => {
    setPlaying(false);
  };

  return (
    <div className="sound-effect">
      <p>{props.name}</p>
      <p>
        {!playing && (
          <button className="sound-effect__button" onClick={playAudio}>
            <i className="fas fa-play"></i>
          </button>
        )}
        {playing && (
          <button className="sound-effect__button" onClick={stopAudio}>
            <i className="fas fa-stop"></i>
          </button>
        )}
      </p>

      <audio src={props.path} ref={audioElement} onEnded={audioFinished} />
    </div>
  );
};

export default SoundEffect;
