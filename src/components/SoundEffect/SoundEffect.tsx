import React, { FC, useRef, useState } from "react";
import classNames from "classnames";

import "./SoundEffect.scss";

interface SoundEffectProps {
  name: string;
  path: string;
}

const SoundEffect: FC<SoundEffectProps> = props => {
  const audioElement = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioElement !== null) {
      const current: HTMLAudioElement =
        audioElement.current || new HTMLAudioElement();

      if (current !== null) {
        if (playing) {
          current.load();
          setPlaying(false);
        } else {
          current.play().then(() => {});
          setPlaying(true);
        }
      }
    }
  };

  const audioFinished = () => {
    setPlaying(false);
  };

  return (
    <div
      className={classNames("sound-effect", {
        "sound-effect__playing": playing
      })}
      onClick={toggleAudio}
    >
      <p>{props.name}</p>

      <audio src={props.path} ref={audioElement} onEnded={audioFinished} />
    </div>
  );
};

export default SoundEffect;
