import React, { FC, useState } from "react";
import "./App.scss";
import SoundEffect from "./components/SoundEffect/SoundEffect";

const App: FC = () => {
  const [volume, setVolume] = useState(1);
  const sounds = [
    { name: "Applause", path: "/sounds/applause.mp3" },
    { name: "B17 Bomber", path: "/sounds/b17-bomber.mp3" },
    { name: "Ba Dum Dum Tss", path: "/sounds/ba-dum-tss.mp3" },
    { name: "Bat Signal", path: "/sounds/bat-signal.mp3" },
    { name: "Bixby Snider", path: "/sounds/bixby-snider.mp3" },
    { name: "Bored Bored Bored", path: "/sounds/b-b-b-bored.mp3" },
    { name: "Canned Laughter", path: "/sounds/canned-laughter.mp3" },
    { name: "Captain Refactor", path: "/sounds/captain-refactor.mp3" },
    { name: "Car Horn", path: "/sounds/car-horn.mp3" },
    {
      name: "Charlie Brown Teacher",
      path: "/sounds/charlie-brown-teacher.mp3"
    },
    { name: "Close Encounters", path: "/sounds/close-encounters.mp3" },
    { name: "Creaky Door", path: "/sounds/creaky-door.mp3" },
    { name: "Creepy (Long)", path: "/sounds/creepy-long.mp3" },
    { name: "Creepy (Short)", path: "/sounds/creepy-short.mp3" },
    { name: "Crickets", path: "/sounds/crickets.mp3" },
    { name: "DJ Horn", path: "/sounds/dj-horn.mp3" },
    { name: "Doorbell", path: "/sounds/doorbell.mp3" },
    { name: "Dream Sequence", path: "/sounds/dream-sequence.mp3" },
    { name: "Dun Dun Duuun", path: "/sounds/dun-dun-duuun.mp3" },
    { name: "Gibberish", path: "/sounds/gibberish.mp3" },
    { name: "Excuse me, Princess!", path: "/sounds/excuse-me.mp3" },
    { name: "Get to the Choppa!", path: "/sounds/get-to-the-choppa.mp3" },
    { name: "Granfather Clock", path: "/sounds/grandfather-clock.mp3" },
    { name: "Ha ha!", path: "/sounds/ha-ha.mp3" },
    { name: "I'm bored", path: "/sounds/i-m-bored.mp3" },
    { name: "Jaws Theme", path: "/sounds/jaws.mp3" },
    { name: "Jeopardy Countdown", path: "/sounds/jeopardy-countdown.mp3" },
    { name: "Law & Order", path: "/sounds/law-and-order.mp3" },
    { name: "LOST", path: "/sounds/lost-suspense.mp3" },
    { name: "Mario's Death", path: "/sounds/mario-death.mp3" },
    { name: "No! God please, no!", path: "/sounds/no-god-please-no.mp3" },
    { name: "Nooooo!", path: "/sounds/darth-no.mp3" },
    { name: "Old Phone", path: "/sounds/old-phone-ringing.mp3" },
    { name: "Orchestra Hit", path: "/sounds/orchestra-hit.mp3" },
    { name: "Ownage!", path: "/sounds/ownage.wav" },
    { name: "Price is Right", path: "/sounds/price-is-right.mp3" },
    { name: "Price is Wrong", path: "/sounds/price-is-wrong.mp3" },
    { name: "Record Scratch", path: "/sounds/record-scratch.mp3" },
    { name: "Reveille", path: "/sounds/reveille.mp3" },
    { name: "Sad Trombone", path: "/sounds/sad-trombone.mp3" },
    { name: "Serial Theme", path: "/sounds/serial-theme.mp3" },
    { name: "Snoring (Cartoon)", path: "/sounds/snoring-funny.mp3" },
    {
      name: "Star Trek Announcement",
      path: "/sounds/tos_shipannouncement.mp3"
    },
    { name: "Stop the insanity!", path: "/sounds/stop-the-insanity.mp3" },
    { name: "Stranger Things Theme", path: "/sounds/stranger-things.mp3" },
    { name: "TED Talk Intro", path: "/sounds/ted-talk-intro.mp3" },
    { name: "Thunder", path: "/sounds/thunder.mp3" },
    { name: "THX", path: "/sounds/thx.mp3" },
    { name: "What a Concept", path: "/sounds/yup-what-a-concept.mp3" },
    {
      name: "Where did you learn to fly?",
      path: "/sounds/where-did-you-learn-to-fly.mp3"
    },
    { name: "Wilhelm Scream", path: "/sounds/wilhelm.mp3" },
    { name: "Yakety Sax", path: "/sounds/yakety-sax.mp3" },
    { name: "Yes!", path: "/sounds/yes.mp3" },
    { name: "You're the man now, dog!", path: "/sounds/ytmnd.mp3" }
  ];

  return (
    <div>
      <div className="sound-effects__header">
        <label className="sound-effects__volume__label">Volume</label>
        <input
          className="sound-effects__volume__slider"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={({ target: { value } }) =>
            setVolume(Number.parseFloat(value))
          }
        />
      </div>

      <div className="sound-effects">
        {sounds.map(({ name, path }) => (
          <SoundEffect key={path} name={name} path={path} volume={volume} />
        ))}
      </div>
    </div>
  );
};

export default App;
