import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => {
  return (
    <div>
      {
        Object.keys(tracks).map((id, idx) => <Track key={idx} track={tracks[id]} onPlay={onPlay(tracks[id])} isRecording={isRecording}/>)
      }
    </div>
  );
};


export default Jukebox;
