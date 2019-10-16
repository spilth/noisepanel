import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import "./SoundEffect.scss";

interface SoundEffectProps {
  name: string;
  path: string;
  volume: number;
}

const SoundEffect: FC<SoundEffectProps> = ({ name, path, volume }) => {
  const audioElement = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const current: HTMLAudioElement =
      audioElement.current || new HTMLAudioElement();
    current.volume = volume;
  });

  const togglePlaying = () => {
    const current: HTMLAudioElement =
      audioElement.current || new HTMLAudioElement();

    if (playing) {
      current.load();
      setPlaying(false);
    } else {
      current.play().then(() => {});
      setPlaying(true);
    }
  };

  return (
    <div
      className={classNames("sound-effect", {
        "sound-effect__playing": playing
      })}
      onClick={togglePlaying}
    >
      <p>{name}</p>
      <audio src={path} ref={audioElement} onEnded={() => setPlaying(false)} />
    </div>
  );
};

export default SoundEffect;
