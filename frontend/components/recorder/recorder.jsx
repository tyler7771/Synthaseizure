
import React from 'react';

const Recorder = ({ isRecording, isPlaying, startRecording, stopRecording }) => (
  <div className='recorder'>
    <div className='recorder-title'>
      Recorder
      <br/>
      <button
        className ='start-button'
        onClick={startRecording}
        disabled={isRecording || isPlaying}>
        Start
      </button>
      <button
        className='stop-button'
        onClick={stopRecording}
        disabled={!isRecording || isPlaying}>
        Stop
      </button>
    </div>
  </div>
);


export default Recorder;
