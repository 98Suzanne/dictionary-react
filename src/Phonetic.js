import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const start = () => {
    audio.load();
    audio.play();
  };

  return (
    <div className="Phonetic">
      <button className="btn PhoneticButton" onClick={start}>
        <i className="fas fa-volume-up"></i>
      </button>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
